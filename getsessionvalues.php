<?php

session_start(); // start the session



// retrieve the session values and store them in PHP variables


$user_id = isset($_SESSION['user_id']) && $_SESSION['user_id'] !== null ? $_SESSION['user_id'] : null;
$subscription_type = isset($_SESSION['subscription_type']) ? $_SESSION['subscription_type'] : null;
$user_type = isset($_SESSION['user_type']) ? $_SESSION['user_type'] : null;



 if ($user_id != null && $subscription_type != null && $user_type != null)
 {
             		$sessionValues = array(
              'user_id' => $user_id,
              'subscription_type' => $subscription_type,
              'user_type' => $user_type
            );

 // encode the array as a JSON string and output it
		echo json_encode($sessionValues);

 }
 else
 {
 	 
 	   echo json_encode(array('error' => 'Session Not Set'));

 }


?>