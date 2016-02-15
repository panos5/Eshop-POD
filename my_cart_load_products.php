<?php

    $serverName = "localhost";
    $userName = "root";
    $password = "root";
    $database = "eshop";

    // Create connection with the database
    $conn = new mysqli($serverName, $userName, $password , $database);


    // Check the status of the connection an if fails throw an error message
    if ($conn->connect_error)
    {
        die("Connection failed: " . $conn->connect_error);
        alert("The connection has timed-out!!!");
    }


    else
    {
        // SQL request tor retrieve all the products from the database
        $products_sql = mysqli_query($conn,"SELECT * FROM products");


        // Returns the number of rows that the sql request has produced
        $count = mysqli_num_rows($products_sql);

        $data = new stdclass();
        $data->response = array();
        $result = new stdclass();
        $products= array();

        // If the number of the lines returned from the SQL request are more that 0
        // then all the products stored in an array in order to be returned to the client
        if($count>0)
        {


            $result->status = "OK";
            //Loop through all the results of sql query and place them in an array called products
            while($row = mysqli_fetch_array($products_sql , MYSQLI_NUM))
            {

                $result->products[] = $row;

            }
        }

        // If the are no results returned from the sql request then the status variable is set to Failed and sent to the client
        // so to act accordingly
        else
        {
            $result->status = "Failed";
            mysqli_error($conn);
        }

    }


    $data->response[] = $result;

    echo json_encode($data);

?>