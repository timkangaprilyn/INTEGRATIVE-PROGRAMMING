<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lab Exercise 5 - PHP + JSON + AJAX</title>
</head>
<body>
    <h2>PHP + JSON + AJAX Example</h2>

    <form id="userForm">
        <label for="name">Enter your name:</label>
        <input type="text" id="name" name="name" required>
        <button type="submit">Submit</button>
    </form>

    <h3>Response:</h3>
    <pre id="output"></pre> <!-- JSON output will appear here -->

    <script>
        document.getElementById('userForm').addEventListener('submit', function(event) {
            event.preventDefault(); // prevent page reload

            const name = document.getElementById('name').value;

            // Send data to PHP using Fetch API
            fetch('process.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: name })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                // Display JSON directly in <pre>
                document.getElementById('output').textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                document.getElementById('output').textContent = "Error occurred: " + error.message;
            });
        });
    </script>
</body>
</html>

<?php
// Set header to tell browser it's JSON
header('Content-Type: application/json');

// Get raw POST data
$input = json_decode(file_get_contents('php://input'), true);

// Check if name exists
if (isset($input['name']) && !empty(trim($input['name']))) {
    $name = htmlspecialchars(trim($input['name']));
    $response = [
        "status" => "success",
        "message" => "Welcome, $name!"
    ];
} else {
    $response = [
        "status" => "error",
        "message" => "Name cannot be empty!"
    ];
}

// Send JSON response
echo json_encode($response);
?>


