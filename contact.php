<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON data from the request
    $data = json_decode(file_get_contents('php://input'), true);
    $output = "";

    // MySQL database configuration
    $host = 'fluffandlogic.com';
    $dbname = 'cwffclbm_fluffandlogic';  // Your database name
    $username = 'cwffclbm_contact';  // Your MySQL username
    $password = '4p8Gb5Cjy7M8Cqh';  // Your MySQL password

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

            $output = json_encode([ 'success' => true ]);
        } else {
            $output = json_encode([' error' => 'Failed' ]);
        }

    } catch (PDOException $e) {
        http_response_code(500);
        error_log('Database error: ' . $e->getMessage());
//         $output = json_encode([' error' => $e->getMessage() ]);
//
//
//         // Don't expose database details in production
//         if (strpos($e->getMessage(), 'Access denied') !== false) {
//             $output = json_encode(['error' => 'Database connection failed']);
//         } elseif (strpos($e->getMessage(), 'Unknown database') !== false) {
//             $output = json_encode(['error' => 'Database not found']);
//         } else {
//             $output = json_encode(['error' => 'Database error occurred']);
//         }

    } catch (Exception $e) {
        http_response_code(500);
        error_log('General error: ' . $e->getMessage());
//         $output = json_encode([' error' => $e->getMessage() ]);
    }

    echo $output;

} else {
    // Method not allowed
    http_response_code(405);
    error_log('Only POST method is allowed ');
//     echo json_encode(['error' => 'Only POST method is allowed']);
}
?>