<?php

    $serverName = "localhost";
    $userName = "root";
    $password = "root";
    $database = "eshop";

    // Create connection with the database
    $conn = new mysqli($serverName, $userName, $password , $database);


    //Retrieves the two values sent from the ajax request
    $userName      =  $_GET["userName"];
    $userPassword  =  $_GET["userPassword"];
    $firstName     =  $_GET["firstName"];
    $lastName      =  $_GET["lastName"];
    $userEmail     =  $_GET["email"];
    $streetNumber  =  $_GET["streetNumber"];
    $houseNumber   =  $_GET["houseNumber"];
    $postcode      =  $_GET["postcode"];
    $telephone     =  $_GET["telephone"];



    // Check the status of the connection
    if ($conn->connect_error)
    {

        die("Connection failed: " . $conn->connect_error);
        alert("The connection has timed-out!!!");
    }

    else
    {

        $sql = mysqli_query($conn, "SELECT user_id FROM register WHERE user_name='$userName'");

        $data = new stdclass();
        $data->response = array();
        $result = new stdclass();


        if (mysqli_num_rows($sql) > 0)
        {

            $result->status = "Failed";
        }

        else
        {

            $randomNumber = strval( rand(1,20)."-" );

            $sglInsertion = mysqli_query($conn, "INSERT INTO register(user_id, user_name, first_name, last_name , password , email, street_address , home_address , postcode ,telephone )
                                                  VALUES ('$randomNumber$userName','$userName','$firstName', '$lastName' ,'$userPassword','$userEmail','$streetNumber','$houseNumber','$postcode','$telephone')");


            $result->status = "OK";
            session_start();
            $_SESSION['login_user'] = strtoupper($userName);
        }

    }

    $data->response[] = $result;

    echo json_encode($data);

?>