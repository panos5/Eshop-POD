<?php



    $serverName = "localhost";
    $userName = "root";
    $password = "root";
    $database = "eshop";

    // Create connection with the database
    $conn = new mysqli($serverName, $userName, $password, $database);

    // Check the status of the connection
    if ($conn->connect_error)
    {
        $connection_status = "Fail";
        die("Connection failed: " . $conn->connect_error);

    }

    else
    {
        $connection_status = "Established";
    }

?>