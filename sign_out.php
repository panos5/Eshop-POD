<?php

session_start();

session_unset(); // remove all session variables

session_destroy(); //close the session

header("location: home_page.html")

?>