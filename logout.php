<?php


    if(!isset($_COOKIE['user_id']) && !isset($_COOKIE['subscription_type'])) {
        echo '<script>alert("Session were not set""); window.location.href = "login.html";</script>';
        header("Location:login.html");
    } else {
        // Clear the cookies by setting their expiration time to the past
        setcookie('user_id', '', time() - 3600); // set the user_id cookie to expire 1 hour ago
        setcookie('subscription_type', '', time() - 3600); // set the subscription_type cookie to expire 1 hour ago
        setcookie('user_type', '', time() - 3600); // set the subscription_type cookie to expire 1 hour ago

        echo "Logout successful";
        header("Location:login.html");
    }

    // Clear session
// start the session
    session_start(); 
        if(!isset($_SESSION['user_id']) && !isset($_SESSION['subscription_type'])) 
        {

        }
        else
        {
            unset($_SESSION['user_id']); // unset the 'user_id' session variable
            unset($_SESSION['subscription_type']); // unset the 'subscription_type' session variable
            unset($_SESSION['user_type']); // unset the 'user_type' session variable

            session_destroy(); // destroy the session
            header("Location:login.html");
        }




?>