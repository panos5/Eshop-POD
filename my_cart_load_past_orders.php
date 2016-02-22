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
        $data->status = "";
        $past_orders = [];

        $previous_orders_sql =  mysqli_query($conn , "SELECT name , price , order_date ,description   FROM register , orders , products
                                                      WHERE register.user_id = orders.user_id AND  orders.product_id = products.product_id
                                                      AND register.user_name = 'troll'");


        if(mysqli_num_rows($previous_orders_sql)>0)
        {

            $data->status = "OK";

            while($row = mysqli_fetch_array( $previous_orders_sql , MYSQLI_NUM))
            {
                $data-> past_orders[] = $row;
            }


        }

        else
        {
            $data->status = "Failed";
            mysqli_error($conn);
        }

    }

    echo json_encode($data);

?>