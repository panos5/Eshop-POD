<?php


/**
 * Created by PhpStorm.
 * User: Panagiotis
 * Date: 2/11/2016
 * Time: 2:43 PM
 */

    $userName    = $_GET["userName"];
    $userEmail   = $_GET["userEmail"];
    $userMessage = $_GET["userMessage"];

    $email_to = "pfiliotis@podfather.com";
    $headers = "From : ".$userName;
    $status = "";


    mail($email_to, $userEmail , $userMessage, $headers);


    if(@mail($email_to, $userEmail , $userMessage, $headers))
    {
        $status = "OK";

    }

    else
    {
        $status = "Failed";
    }

echo json_encode($status);

?>