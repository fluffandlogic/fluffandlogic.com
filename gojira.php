<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Messages - Admin Panel</title>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Contact Messages</h1>
            <p>Messages received through your portfolio contact form</p>
        </div>

        <?php
            // view_contacts.php - Simple version
            $host = 'fluffandlogic.com';
            $dbname = 'cwffclbm_fluffandlogic';  // Your database name
            $username = 'cwffclbm_contact';  // Your MySQL username
            $password = '4p8Gb5Cjy7M8Cqh';  // Your MySQL password

            try {
                $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
                $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                // Get all contacts
                $stmt = $pdo->query("SELECT * FROM contacts");
                $contacts = $stmt->fetchAll();

                echo "<h2>Contact Messages (" . count($contacts) . " total)</h2>";

                if (empty($contacts)) {
                    echo "<p>No contacts found.</p>";
                } else {
                    foreach ($contacts as $contact) {
                        echo "<div style='border: 1px solid #ccc; margin: 10px 0; padding: 15px; background: #f9f9f9;'>";
                        echo "<h3>ID: {$contact['id']} - " . htmlspecialchars($contact['name']) . "</h3>";
                        echo "<p><strong>Email:</strong> " . htmlspecialchars($contact['email']) . "</p>";

                        if (!empty($contact['phone'])) {
                            echo "<p><strong>Phone:</strong> " . htmlspecialchars($contact['phone']) . "</p>";
                        }

                        echo "<p><strong>Message:</strong></p>";
                        echo "<p>" . nl2br(htmlspecialchars($contact['message'])) . "</p>";
                        echo "</div>";
                    }
                }

            } catch (Exception $e) {
                echo "Error: " . $e->getMessage();
            }
        ?>

    </body>
</html>