<?php

/*
    include "dbconfig.php";

    $con=mysqli_connect($server,$login,$password,$dbname) or die("<br>Cannot connect to DB\n");


      

    // Retrieve the image paths from the database
  
 $sql_Query1 = "SELECT r.Receipe_Name, r.Receipe_Id, r.Author, r.Preptime, r.ReceipeDesc, r.Status,r.Course_Cata, r.Cusine, i.imagepath, i.newfilename, i.videourl, IFNULL(COUNT(l.receipe_like_id), 0) AS like_count
FROM Receipe r JOIN Rep_Image_Info i ON r.Receipe_Id = i.Receipe_Id LEFT JOIN receipe_like l ON r.Receipe_Id = l.Receipe_Id AND l.like_status = '$like_status'
WHERE r.Course_Cata ='$Course_Cata' and  r.Status= '$status' GROUP BY r.Receipe_Id, r.Receipe_Name, r.Author, r.ReceipeDesc, r.Course_Cata, r.Cusine, i.imagepath, i.newfilename, i.videourl";


    $result = mysqli_query($con, $sql_Query1);

    if(mysqli_num_rows($result) > 0)
     {
                 $images = array();
        while ($row = mysqli_fetch_array($result)) 
        {
          $images[] = array(
            "imagepath" => $row['imagepath'],
            "Receipe_Name" => $row['Receipe_Name'],
            "Preptime" => $row['Preptime'],
            "Receipe_Id" => $row['Receipe_Id'],  
            "Author" => $row['Author'],    
            "Course_Cata" => $row['Course_Cata'],           
            "likecount" => $row['like_count']
          );
        }
        header('Content-Type: application/json');

          $json = json_encode(array("data" => $images));
                          echo $json;
    } 

else 
{
  echo "No images found.";
  echo "Error: " . mysqli_error($con);
}
   
    mysqli_close($con);*/

  


      include "dbconfig.php";

    $con=mysqli_connect($server,$login,$password,$dbname) or die("<br>Cannot connect to DB\n");

     $like_status ='like';
      $Course_Cata ='Appetizer';
      $status='Active';

    // Retrieve the image paths from the database
    $sql_Query1 = "SELECT r.Receipe_Name, r.Receipe_Id, r.Author, r.Preptime, r.ReceipeDesc, r.Status,r.Course_Cata, r.Cusine, i.imagepath, i.newfilename, i.videourl, IFNULL(COUNT(l.receipe_like_id), 0) AS like_count
FROM Receipe r JOIN Rep_Image_Info i ON r.Receipe_Id = i.Receipe_Id LEFT JOIN receipe_like l ON r.Receipe_Id = l.Receipe_Id AND l.like_status = '$like_status'
WHERE r.Course_Cata ='$Course_Cata' and  r.Status= '$status' GROUP BY r.Receipe_Id, r.Receipe_Name, r.Author, r.ReceipeDesc, r.Course_Cata, r.Cusine, i.imagepath, i.newfilename, i.videourl";

  
    $result = mysqli_query($con, $sql_Query1);

    if(mysqli_num_rows($result) > 0)
     {
                 $images = array();
        while ($row = mysqli_fetch_array($result)) 
        {
           $images[] = array(
            "imagepath" => $row['imagepath'],
            "Receipe_Name" => $row['Receipe_Name'],
            "Preptime" => $row['Preptime'],
            "Receipe_Id" => $row['Receipe_Id'],  
            "Author" => $row['Author'],    
            "Course_Cata" => $row['Course_Cata'],           
            "likecount" => $row['like_count']
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