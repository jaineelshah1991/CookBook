<?php
    include "dbconfig.php";

    $con=mysqli_connect($server,$login,$password,$dbname) or die("<br>Cannot connect to DB\n");


    // Retrieve the image paths from the database
    $sql_Query1 = "select  distinct r.Receipe_Id,ri.Rep_Image_Info_Id,ri.newfilename,
ri.imagepath , r.Receipe_Name, r.Preptime, r.Cooktime,r.Status
from Rep_Image_Info   ri join  Receipe r where r.Receipe_Id = ri.Receipe_Id";
  
    $result = mysqli_query($con, $sql_Query1);

    if(mysqli_num_rows($result) > 0)
     {
                 $images = array();
        while ($row = mysqli_fetch_array($result)) 
        {
          $images[] = array(
            "imagepath" => "uploads/" . $row['newfilename'],
            "Receipe_Name" => $row['Receipe_Name'],
            "Preptime" => $row['Preptime'],
            "Status" => $row['Status'],
            "Receipe_Id" => $row['Receipe_Id'],            
            "Cooktime" => $row['Cooktime']
          );
        }
        header('Content-Type: application/json');
        echo json_encode($images, JSON_UNESCAPED_SLASHES);
    } 

else 
{
  echo "No images found.";
  echo "Error: " . mysqli_error($con);
}
   
    mysqli_close($con);
  ?>