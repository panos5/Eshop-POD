<?php

    $serverName = "localhost";
    $userName = "root";
    $password = "root";
    $database = "eshop";

    //Create connection with the database
    $conn = new mysqli($serverName, $userName, $password , $database);

    //Retrieves the two values sent from the ajax request
    $userName = $_GET["userName"];
    $newUserName = $_GET["newUserName"];
    $firstName = $_GET["firstName"];
    $lastName = $_GET["lastName"];
    $password = $_GET["password"];
    $email = $_GET["email"];
    $street_address = $_GET["streetAddress"];
    $home_address = $_GET["homeAddress"];
    $postcode     = $_GET["postcode"];
    $telephone   = $_GET["telephone"];

    // Check the status of the connection
    if ($conn->connect_error)
    {

        die("Connection failed: " . $conn->connect_error);
        alert("The connection has timed-out!!!");
    }


    else
    {
        $data = new stdclass();
        $data->response = array();
        $result = new stdclass();

        $register_number_sql =  mysqli_query($conn , "SELECT register_id FROM register WHERE user_name = '$userName'");


        while($row = mysqli_fetch_array( $register_number_sql, MYSQLI_ASSOC))
        {

            $result->regNumber = $row['register_id'];
            $register_number =$result->regNumber;

        }


        $update_register_sql = mysqli_query($conn, " UPDATE register
                                 SET first_name = '$firstName' , user_name = '$newUserName' , last_name='$lastName' , password='$password',
                                 email='$email', street_address='$street_address',  home_address='$home_address',
                                 postcode='$postcode',telephone='$telephone'
                                 WHERE register_id='$register_number'");


        if($update_register_sql)
        {

            $result->status = "OK";
            session_start();
            $_SESSION['login_user'] = $newUserName;
        }
        else
        {
            $result->status = "Failed";
            mysqli_error($conn);
            echo(mysqli_error($conn));
        }

    }

    $data->response[] = $result;

    echo json_encode($data);

?>