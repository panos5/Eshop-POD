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
    if ($conn->connect_error)
    {
        alert("The connection has timed-out!!!");
        die("Connection failed: " . $conn->connect_error);

    }

    else
    {
        $data = new stdclass();
        $data->response = array();
        $result = new stdclass();

        $previous_orders_sql =  mysqli_query($conn , "SELECT product_id , price , order_date   FROM register,orders
                                                      WHERE register.user_name = orders.user_name AND register.user_name = '$userName'");


        if(mysqli_num_rows($previous_orders_sql)>0)
        {
            while($row = mysqli_fetch_array( $previous_orders_sql , MYSQLI_NUM))
            {
                $result->orders[] = $row;
            }

            $result->status = "OK";
        }

        else
        {
            $result->status = "Failed";
            mysqli_error($conn);
        }

    }

    $data->response[] = $result;

    echo json_encode($data);

?>