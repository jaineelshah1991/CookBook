<?php

include "dbconfig.php";
  

  // Get the JSON payload from the frontend
$json = file_get_contents('php://input');
$data = json_decode($json, true);


    $con=mysqli_connect($server,$login,$password,$dbname) or die("<br>Cannot connect to DB\n");

//    $recipe_id = $_POST['recipe_id'];
 //   $action = $_POST['action'];


// Extract data from the JSON payload
$recipe_id = $data['recipe_id'];
$action = $data['action'];

    // get the  user_Id of receipe creator 

    $check_receipe_user_info ="select User_Id from Receipe where Receipe_Id = $recipe_id";
    $result_set=mysqli_query($con,$check_receipe_user_info);

  if(mysqli_num_rows($result_set) > 0)
    {
        $row=mysqli_fetch_array($result_set);
       $user_id =  $row['User_Id'];                          
    }
    else
    {
      $user_id  = $_COOKIE['user_id'];
    }

    date_default_timezone_set('America/New_York');
    $datetime1 = date('Y-m-d H:i:s');

    $response = array(
  'action' => '',
  'message' => '',
  'status' => '',
);

    // Perform action based on the value of $action
if ($action === 'approve')
 {  
  // Handle approve request
   //   $comment = $_POST['comment'];

      $comment = "Approved";

       $sql_Query1 = "update Receipe set Status='Active' where Receipe_Id =$recipe_id";
        if (mysqli_query($con, $sql_Query1))
        {
              


                $sql_query2 = "insert into admin_task (admin_task_id,Receipe_Id,User_id,Status,Comments,Lastupdated)
                values (0,$recipe_id,$user_id,'Approved','$comment','$datetime1')";

                        if (mysqli_query($con, $sql_query2))
                        {
                                  $response['action'] = 'Approved';
                                   $response['message'] = 'Recipe is approved';
                                   $response['status'] = 'Completed';
                        }
                        else
                        {
                                  $response['action'] = 'Not Approved';
                                   $response['message'] = 'Recipe is Not  approved';
                                   $response['status'] = 'Failed';
                        }
        }
        else
        {
              $response['error'] = mysqli_error($con);

        }


} 
elseif ($action === 'reject')

 {
  // Handle reject request

        // Retrieve the JSON payload from the request body
      $request_body = file_get_contents('php://input');
      $data = json_decode($request_body, true);

      // Extract the recipe ID and comment from the JSON data
    //  $recipe_id = $data['recipe_id'];
     // $comment = $data['comment'];
      $comment = "Not Good";


    $sql_Query1 = "update Receipe set Status='Rejected' where Receipe_Id =$recipe_id";
        if (mysqli_query($con, $sql_Query1))
        {
           $sql_query2 = "insert into admin_task (admin_task_id,Receipe_Id,User_id,Status,Comments,Lastupdated)
                values (0,$recipe_id,$user_id,'Rejected','$comment','$datetime1')";

                        if (mysqli_query($con, $sql_query2))
                        {
                                  $response['action'] = 'Rejected';
                                   $response['message'] = 'Recipe is Rejected';
                                   $response['status'] = 'Completed';

                        }
                        else
                        {
                                   $response['action'] = 'Not Rejected';
                                   $response['message'] = 'Recipe is Not Rejected';
                                   $response['status'] = 'Failed';

                        }
        }
        else
        {
                                   $response['action'] = 'Not Updated';
                                   $response['message'] = 'Update Receipe Faied';
                                   $response['status'] = 'Failed';
        }

}





  // Output the messages as JSON
  header('Content-Type: application/json');
echo json_encode($response);


?>