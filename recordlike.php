<?php


    include "dbconfig.php";


    $con=mysqli_connect($server,$login,$password,$dbname) or die("Cannot connect to DB");

session_start();

if (isset($_SESSION['user_id']) &&  isset($_SESSION['user_type'])  && isset($_SESSION['subscription_type']))

{



$response = array(); // Initialize empty response array
// Retrieve user ID and recipe ID from AJAX POST request

$user_id = $_SESSION['user_id'];
$subscription_type = $_SESSION['subscription_type'];
$user_type = $_SESSION['user_type'];
$likeflag = $_POST['likeType'];
$recipe_id = $_POST['recipeId'];
date_default_timezone_set('America/New_York');
$datetime1 = date('Y-m-d H:i:s');



        $sql_check_like = "select * from receipe_like where User_Id=$user_id and Receipe_id =$recipe_id";
        $result = mysqli_query($con, $sql_check_like);

        if(mysqli_num_rows($result) > 0) 
        {

            $sql_like_update = " update receipe_like set like_status ='$likeflag',CreatedDate = '$datetime1' where User_Id=$user_id and Receipe_id =$recipe_id";
            // echo $sql_like_update;
              $result = mysqli_query($con, $sql_like_update);

               if ($result)
                {
                        // "Like" status updated successfully
                        $response['status'] = 'success';
                        $response['message'] = 'Like Updated successfully in Receipe'; 
           
                 }
                 else
                 {  

                        $response['status'] = 'Fail';
                        $response['message'] = 'Like Updated Fail in Receipe'; 
                 }

        }

     else
     {
        //   echo "No data found.";
         // echo "Error: " . mysqli_error($con);

         $sql_query_insert_like = "INSERT INTO receipe_like (receipe_like_id, like_status, User_Id, Receipe_Id,CreatedDate)
          VALUES (0, '$likeflag', $user_id,$recipe_id, '$datetime1')";
         
         $result = mysqli_query($con, $sql_query_insert_like);

              if ($result) 
                 {  // b6
                   $Rec_Id = mysqli_insert_id($con);
                    $response['status'] = 'success';
                    $response['message'] = "Like Added successfully in Receipe" . $Rec_Id;
               }
               else
               {
                 // Error inserting new "like" status
                    $response['status'] = 'error';
                    $response['message'] = "Error inserting new 'like' status: " . mysqli_error($con);
      
               }
     }



}

else
{
      // Session variables not set
    $response['status'] = 'error';
    $response['message'] = 'Session variables not set';
}

// Return response as JSON
header('Content-Type: application/json');
echo json_encode($response);

$con->close();


?>
