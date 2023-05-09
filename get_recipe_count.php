<?php
    include "dbconfig.php";

    $con=mysqli_connect($server,$login,$password,$dbname) or die("<br>Cannot connect to DB\n");


    // Retrieve the image paths from the database
    $sql_Query1 = "select count(*) as tc from Receipe;";
  
    $result = mysqli_query($con, $sql_Query1);

    if(mysqli_num_rows($result) > 0)
     {
                 $images = array();
        while ($row = mysqli_fetch_array($result)) 
        {
          
            $Totalcount = $row['tc'];
           
        }
        header('Content-Type: application/json');
        echo json_encode($Totalcount, JSON_UNESCAPED_SLASHES);
    } 

else 
{
  echo "No images found.";
  echo "Error: " . mysqli_error($con);
}
   
    mysqli_close($con);
  ?>