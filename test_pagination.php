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

    $page = $_GET["page"];

    if($page=="" || $page=="1")
    {

        $page1=0;

    }

    else
    {

        $page =($page*5) - 5 ;

    }



    // SQL request tor retrieve all the products from the database
    $products_sql = mysqli_query($conn, "SELECT * FROM products LIMIT 0,5");


    while ($row = mysqli_fetch_array($products_sql, MYSQLI_NUM)) {

        echo $row[0] . "  " . $row[1]."  ".$row[2];
        echo "<br>";
    }


    $count = mysqli_num_rows($products_sql);

    $products_per_page =ceil($count/5);


    for($i= 1; $i<$products_per_page;$i++){

        ?><a href="test_pagination.php? page=<?php echo $i;?>" style="text-decoration:none"><?php echo $i." "; ?></a><?php


    }


    echo $products_per_page;

}




?>