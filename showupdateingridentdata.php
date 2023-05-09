<?php
    include "dbconfig.php";

    $con=mysqli_connect($server,$login,$password,$dbname) or die("<br>Cannot connect to DB\n");

  if(isset($_COOKIE['user_id']) && isset($_COOKIE['subscription_type']) && isset($_COOKIE['user_type']))
    {
     //   $user_id = $_COOKIE['user_id'];
        $Receipe_Id = $_GET['recipe_id'];


 $sql_Query1 = "select   ri.Rep_ingId,ri.Ingridients_Id, i.Ingridients_Name,ri.Quantity, ri.Measure
 from  Rep_Ingridients ri  
 join  Ingridients i  on i.Ingridients_Id = ri.Ingridients_Id
 where ri.Receipe_Id =$Receipe_Id";
    $result = mysqli_query($con, $sql_Query1);

    if(mysqli_num_rows($result) > 0)
     {  
                 $editreceipe = array();
        while ($row = mysqli_fetch_array($result)) 
        {     


          $editingrident[] = array(
    "Ingridients_Id" => trim($row['Ingridients_Id']),
    "Ingridients_Name" => trim($row['Ingridients_Name']),
    "Quantity" => trim($row['Quantity']),
    "Measure" => trim($row['Measure']),
        "Rep_ingId" => trim($row['Rep_ingId'])

    
);
        }
        header('Content-Type: application/json');
        echo json_encode($editingrident, JSON_UNESCAPED_SLASHES);
    } 

else 
{
  echo "No Data found.";
  echo "Error: " . mysqli_error($con);
}
    }
   else {
        header("Location:login.html");
    }
    // Retrieve the image paths from the database
    
   
    mysqli_close($con);
  ?>