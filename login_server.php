<?php

    include "database_connection.php";

    //Retrieves the two values sent from the ajax request
    $userName = $_GET["userName"];
    $userPassword = $_GET["userPassword"];

    //Sql request to check if the details sent by the client in order to login are correct
    $sql = mysqli_query($conn, "SELECT user_name , password FROM register WHERE user_name='$userName' AND password='$userPassword'");

    $data = new stdclass();
    $data->response = array();
    $result = new stdclass();

    //If request returns a result then the status OK is set to the relevant value and a new Session for the user starts
    if (mysqli_num_rows($sql) > 0) {

        $result->status = "OK";
        session_start();
        $_SESSION['login_user'] = strtoupper($userName);
    } else {
        $result->status = "Failed";
    }



    $data->response[] = $result;


    echo json_encode($data);

?>