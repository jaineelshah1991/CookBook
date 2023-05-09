<?php
    include "dbconfig.php";
    $con=mysqli_connect($server,$login,$password,$dbname) or die("Cannot connect to DB");
	session_start();

if (isset($_SESSION['user_id']) &&  isset($_SESSION['user_type'])  && isset($_SESSION['subscription_type']))

{	// main start
	// global declaration 
		$User_Id = $_SESSION['user_id'];
		$subscription_type = $_SESSION['subscription_type'];
		$user_type = $_SESSION['user_type'];

		$response = array(); // Initialize empty response array

	// end global declation 

		if (isset($_POST['task']))
		{ // m1
				    $task = $_POST['task'];

				    //////////////////////////////  Check All COmments count group by all users on one receipe //////////////////////////////////////
				    if ($task == 'getalllikecount')
				    {
				    		$recipe_Id = $_POST['recipeId'];

				    		 $sql_check_likecount = "select count(like_status) as totalcount from receipe_like where like_status ='like'  and Receipe_Id =$recipe_Id group by User_Id";
				    		 $result = mysqli_query($con, $sql_check_likecount);

								if (mysqli_num_rows($result) > 0) {
									        $total_count = 0;
									        while ($row = mysqli_fetch_array($result)) {
									            $total_count = $row['totalcount'];
									        }
									        $response = array(
									            "status" => "success",
									            "totalcount" => $total_count
									        );
				    		 }		
				    		 header('Content-Type: application/json');
				    		         echo json_encode($response);

				    }

				   if ($task == 'getallcommentscount')

				    {

				    		$recipe_Id = $_POST['recipeId'];

				    		 $sql_check_likecount = "select count(Comments) as totalcount from Receipe_comments where   Receipe_Id =$recipe_Id  group by User_Id";



				    		 $result = mysqli_query($con, $sql_check_likecount);

								if (mysqli_num_rows($result) > 0) {
									        $total_count = 0;
									        while ($row = mysqli_fetch_array($result)) {
									            $total_count = $row['totalcount'];
									        }
									        $response = array(
									            "status" => "success",
									            "totalcount" => $total_count
									        );
				    		 }		
				    		 header('Content-Type: application/json');
				    		         echo json_encode($response);

				    }
				    else
				    {

				    }



		} // m1
		else
		{	
			    // Handle missing task parameter
			    echo json_encode(array('error' => 'Missing task parameter'));

		}

} // main end 





?>
