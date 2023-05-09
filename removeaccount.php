<?php

 include "dbconfig.php";

$con=mysqli_connect($server,$login,$password,$dbname)
                 or die("<br>Cannot connect to DB\n");

                 if (isset($_COOKIE['user_id']) && isset($_COOKIE['subscription_type'])
                  && isset($_COOKIE['user_type'])) 
                 {
   						 $user_Id = $_COOKIE['user_id'];
   						 $user_type = $_COOKIE['user_type'];
   						 $subscription_type = $_COOKIE['subscription_type'];
						$cancel_reason = $_POST['cancel-reason'];

					$sql_delete_Query = " delete from User_Info  where User_Id=$user_Id";
					$sql_delete_Query1 = " delete from User_Access_Rights  where User_Id=$user_Id";
					$sql_delete_Query2 = " delete from User_Credentail_Internal where User_Id=$user_Id";
					  $sql_delete_Query3 = "delete from User_Credentail where User_Id=$user_Id";

						    if (mysqli_query($con, $sql_delete_Query1))
						     {
						     	   
						     	     echo '<script>alert("User deleted successfully"); window.location.href = "http://obi.kean.edu/~shahjai/CookBook/index.html";</script>';
						     	    	if (mysqli_query($con, $sql_delete_Query3))
						     	    	{
						     	    		if (mysqli_query($con, $sql_delete_Query2))
						     	    		{
						     	    			if (mysqli_query($con, $sql_delete_Query))
						     	    			{
						     	    				//echo "All recorded deleted";


 														 // Clear the cookies by setting their expiration time to the past
												        setcookie('user_id', '', time() - 3600); // set the user_id cookie to expire 1 hour ago
												        setcookie('subscription_type', '', time() - 3600); // set the subscription_type cookie to expire 1 hour ago
        
       											     



						     	    			}
						     	    		}
						     	    	}
						     	    	
						     }
							else
							 {
						   			 echo "Error deleting user: " . mysqli_error($con);
							 }

   					 }
				 
				 else
				 {
				 	header('Location:login.html');

				 }

?>