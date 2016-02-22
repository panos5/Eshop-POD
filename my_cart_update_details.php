<?php

        include "database_connection.php";

        //Retrieves the values sent from the ajax request
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


        $data = new stdclass();
        $data->response = array();
        $result = new stdclass();

        $check_username_exist_sql = mysqli_query($conn , "SELECT user_id FROM register WHERE user_name = '$newUserName'");

        if(strtolower($userName) != $newUserName && mysqli_num_rows($check_username_exist_sql)>0)
        {

            $result->status = "nameFailed";
        }

        else

        {

            $register_number_sql = mysqli_query($conn, "SELECT user_id FROM register WHERE user_name = '$userName'");

            while ($row = mysqli_fetch_array($register_number_sql, MYSQLI_ASSOC))
            {
                $result->regNumber = $row['user_id'];
                $register_number = $result->regNumber;
            }


            $update_register_sql = mysqli_query($conn, " UPDATE register
                                 SET user_name= '$newUserName' , first_name = '$firstName' , user_name = '$newUserName' , last_name='$lastName' , password='$password',
                                 email='$email', street_address='$street_address',  home_address='$home_address',
                                 postcode='$postcode',telephone='$telephone'
                                 WHERE user_id = '$register_number'");


            if ($update_register_sql)
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