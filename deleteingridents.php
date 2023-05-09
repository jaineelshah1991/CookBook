<?php
    include "dbconfig.php";

    $con=mysqli_connect($server,$login,$password,$dbname) or die("<br>Cannot connect to DB\n");

  if(isset($_COOKIE['user_id']) && isset($_COOKIE['subscription_type']) && isset($_COOKIE['user_type']))
    {
     //   $user_id = $_COOKIE['user_id'];

          $id = $_POST['id'];

 $sql_Query1 = "delete from Rep_Ingridients where Rep_ingId =$id";
    $result = mysqli_query($con, $sql_Query1);

    if(mysqli_num_rows($result) > 0)
     {  
     		 header('Content-Type: application/json');
     	  echo json_encode(['success' => true]);
	}
	else
	{
		  echo json_encode(['success' => false, 'message' => 'Invalid request method']);

	}

            
       
    } 


   else {
        header("Location:login.html");
    }
    // Retrieve the image paths from the database
    
   
    mysqli_close($con);
  ?>