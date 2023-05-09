<?php

include "dbconfig.php";
$con=mysqli_connect($server,$login,$password,$dbname) or die("<br>Cannot connect to DB\n");

$user_id = $_POST['user_id'];

// Get selected recipe categories
if (isset($_POST['recipe_category']))
 {
    $recipe_category = implode(',', $_POST['recipe_category']);
    echo "Rep Category".$recipe_category;
} 
else
 {
    $recipe_category = '';
}

// Get selected recipe cuisines
if (isset($_POST['nmrecipe_cuisine'])) 
{
    $recipe_cuisine = implode(',', $_POST['nmrecipe_cuisine']);
    echo "Rep Cusine".$recipe_cuisine;

}
 else
  {
    $recipe_cuisine = '';
}
  if (!empty($recipe_category) && !empty($recipe_cuisine)) 
  {

         date_default_timezone_set('America/New_York');
            $datetime1 = date('Y-m-d H:i:s');


            $sql_Query1 = "Insert into user_preferences (preference_Id,Prefernce_cata,Preference_Cusine,User_Id,LastUpdated)
            values (0,'$recipe_category','$recipe_cuisine',$user_id,'$datetime1')";

        if (mysqli_query($con, $sql_Query1))
        {
                echo "Inserted Preferences";

                echo '<script>alert("Sign Up completed Please Login!"); window.location.href = "login.html";</script>';

        }
        else
        {
            echo "Error";
        }

}


/*
  

*/



?>