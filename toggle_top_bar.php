<?php

    session_start();

    if (isset($_SESSION['login_user']))
    {

        include 'top_bar_after_login.html';
    }

    else
    {
        include 'top_bar.html';
    }

?>