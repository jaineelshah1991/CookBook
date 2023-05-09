<?php

include "dbconfig.php";

$con=mysqli_connect($server,$login,$password,$dbname) or die("<br>Cannot connect to DB\n");

if(isset($_COOKIE['user_id']) && isset($_COOKIE['subscription_type']) && isset($_COOKIE['user_type']))
{

    $user_Id = $_COOKIE['user_id'];

    // Retrieve the recipe ID from the request body
    $recipeId = $_GET['Receipe_Id'];

    $sql_Query1 = "SELECT Receipe_Name, newfilename FROM Receipe JOIN Rep_Image_Info ON Receipe.Receipe_Id = Rep_Image_Info.Receipe_Id WHERE Receipe.User_Id = $user_Id AND Receipe.Receipe_Id = $recipeId";

    $result = mysqli_query($con, $sql_Query1);

    if(mysqli_num_rows($result) > 0)
    {
        while ($row = mysqli_fetch_array($result)) 
        { 
            $sql_delete_Query3 = "DELETE FROM Rep_Ingridients WHERE Receipe_Id=$recipeId AND User_Id=$user_Id";
            $sql_delete_Query1 = "DELETE FROM Rep_Image_Info WHERE Receipe_Id=$recipeId AND User_Id=$user_Id";
            $sql_delete_Query2 = "DELETE FROM Receipe_comments WHERE Receipe_Id=$recipeId AND User_Id=$user_Id";
            $sql_delete_Query = "DELETE FROM Receipe WHERE Receipe_Id=$recipeId AND User_Id=$user_Id";

            if (mysqli_query($con, $sql_delete_Query3))
            {
            }
            else
            {
                echo "Error deleting user3: " . mysqli_error($con);
            }

            if (mysqli_query($con, $sql_delete_Query2))
            {
            }
            else
            {
                echo "Error deleting user2: " . mysqli_error($con);
            }

            if (mysqli_query($con, $sql_delete_Query1))
            {
            }
            else
            {
                echo "Error deleting user1: " . mysqli_error($con);
            }

            if (mysqli_query($con, $sql_delete_Query)) 
            {
                $response['message'] = 'Recipe "'.$row['Receipe_Name'].'" deleted successfully.';

                echo json_encode($response);

            }
            else
            {
                echo "Error deleting user0: " . mysqli_error($con);
            }
        }
    }
    else
    {
        $response['error'] = 'Recipe not found.';
        echo json_encode($response);
    }
}
else
{
    $response['error'] = 'Unauthorized access.';
    echo json_encode($response);
}