<?php

    $serverName = "localhost";
    $userName = "root";
    $password = "root";
    $database = "eshop";

    // Create connection with the database
    $conn = new mysqli($serverName, $userName, $password , $database);

    //Retrieves the two values sent from the ajax request
    $userName = $_GET["userName"];

    // Check the status of the connection
    if ($conn->connect_error) {

        die("Connection failed: " . $conn->connect_error);

        alert("The connection has timed-out!!!");
    }

    else
    {

        $sql = mysqli_query($conn,"SELECT * FROM register WHERE  user_name = '$userName'");

        $count = mysqli_num_rows($sql);

        $data = new stdclass();
        $data->response = array();
        $result = new stdclass();


        if($count > 0)
        {
            while($row = mysqli_fetch_array($sql, MYSQLI_ASSOC))
            {

                $result->user_name = $row['user_name'];
                $result->first_name = $row['first_name'];
                $result->last_name = $row['last_name'];
                $result->password = $row['password'];
                $result->email = $row['email'];
                $result->street_address = $row['street_address'];
                $result->home_address = $row['home_address'];
                $result->postcode = $row['postcode'];
                $result->telephone = $row['telephone'];
            }

            $result->status = "OK";

        }

        else

        {
            $result-> status = "Failed" ;
        }
    }

    $data->response[] = $result;

    echo json_encode($data);

?>