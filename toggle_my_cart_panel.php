<?php


    session_start();

    if (isset($_SESSION['login_user']))
    {

        include 'my_cart_center_panel.html';
        include 'bottom_bar.html';

    }
    else
    {
        include 'login.html';

    }

?>