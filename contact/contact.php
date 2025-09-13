<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON data from the request
    $data = json_decode(file_get_contents('php://input'), true);

    // Validate required fields
    if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Name, email, and message are required']);
        exit;
    }

    // Validate email format
    if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid email format']);
        exit;
    }

    // MySQL database configuration
    $host = 'localhost';
    $dbname = 'fluffandlogic';  // Your database name
    $username = 'contact';  // Your MySQL username
    $password = ']bD*idWcy2Fa6lwg';  // Your MySQL password

    try {
        // Create MySQL database connection
        $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";
        $pdo = new PDO($dsn, $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Prepare SQL statement to insert contact
        $stmt = $pdo->prepare("
            INSERT INTO contacts (name, email, phone, message)
            VALUES (?, ?, ?, ?)
        ");

        // Execute the statement with the data
        $result = $stmt->execute([
            trim($data['name']),
            trim($data['email']),
            !empty($data['phone']) ? trim($data['phone']) : null,
            trim($data['message'])
        ]);

        if ($result) {
            // Get the ID of the inserted record
            $insertId = $pdo->lastInsertId();

            echo json_encode([
                'success' => true,
                'id' => $insertId,
                'message' => 'Contact saved successfully'
            ]);
        } else {
            throw new Exception('Failed to insert record');
        }

    } catch (PDOException $e) {
        error_log('Database error: ' . $e->getMessage());
        http_response_code(500);

        // Don't expose database details in production
        if (strpos($e->getMessage(), 'Access denied') !== false) {
            echo json_encode(['error' => 'Database connection failed']);
        } elseif (strpos($e->getMessage(), 'Unknown database') !== false) {
            echo json_encode(['error' => 'Database not found']);
        } else {
            echo json_encode(['error' => 'Database error occurred']);
        }

    } catch (Exception $e) {
        error_log('General error: ' . $e->getMessage());
        http_response_code(500);
        echo json_encode(['error' => 'An error occurred while saving contact']);
    }

} else {
    // Method not allowed
    http_response_code(405);
    echo json_encode(['error' => 'Only POST method is allowed']);
}
?>