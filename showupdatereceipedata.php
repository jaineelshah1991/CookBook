<?php
    include "dbconfig.php";

    $con=mysqli_connect($server,$login,$password,$dbname) or die("<br>Cannot connect to DB\n");

  if(isset($_COOKIE['user_id']) && isset($_COOKIE['subscription_type']) && isset($_COOKIE['user_type']))
    {
        $user_id = $_COOKIE['user_id'];
        $Receipe_Id = $_GET['recipeId'];

    $sql_Query1 = "select r.Receipe_Id,r.Receipe_Name,r.Author,r.ReceipeDesc,r.Instructions,r.Course_Cata,r.Cusine,r.Preptime,r.Cooktime,r.size,r.CreatedDate,r.Status,r.User_Id,rii.Oldfilename,rii.newfilename,rii.imagepath,
rii.videourl  from Receipe r  join Rep_Image_Info rii on  rii.Receipe_Id = r.Receipe_Id
where r.Receipe_Id=$Receipe_Id and r.User_Id=$user_id";


    $result = mysqli_query($con, $sql_Query1);

    if(mysqli_num_rows($result) > 0)
     {  
                 $editreceipe = array();
        while ($row = mysqli_fetch_array($result)) 
        {     

/*
          $receipe[] = array(
             "Receipe_Id" => $row['Receipe_Id'],            
            "Receipe_Name" => $row['Receipe_Name'],
            "Author" => $row['Author'],
            "ReceipeDesc" => $row['ReceipeDesc'],
            "Instructions" => $row['Instructions'],
              "Course_Cata" => $row['Course_Cata'],
            "Cusine" => $row['Cusine'],
            "Preptime" => $row['Preptime'],
              "Cooktime" => $row['Cooktime'],            
            "size" => $row['size'],
             "CreatedDate" => $row['CreatedDate'],            
            "Status" => $row['Status'],
            "User_Id" => $row['User_Id'],
            "Oldfilename" => $row['Oldfilename'],
            "newfilename" => $row['newfilename'],
            "imagepath" => $row['imagepath'],
             "videourl" => $row['videourl'],

           
          );
            */

          $editreceipe[] = array(
    "Receipe_Id" => trim($row['Receipe_Id']),
    "Receipe_Name" => trim($row['Receipe_Name']),
    "Author" => trim($row['Author']),
    "ReceipeDesc" => trim($row['ReceipeDesc']),
    "Instructions" => trim($row['Instructions']),
    "Course_Cata" => trim($row['Course_Cata']),
    "Cusine" => trim($row['Cusine']),
    "Preptime" => trim($row['Preptime']),
    "Cooktime" => trim($row['Cooktime']),
    "size" => trim($row['size']),
    "CreatedDate" => trim($row['CreatedDate']),
    "Status" => trim($row['Status']),
    "User_Id" => trim($row['User_Id']),
    "Oldfilename" => trim($row['Oldfilename']),
    "newfilename" => trim($row['newfilename']),
    "imagepath" => trim($row['imagepath']),
    "videourl" => trim($row['videourl']),
);
        }
        header('Content-Type: application/json');
        echo json_encode($editreceipe, JSON_UNESCAPED_SLASHES);
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