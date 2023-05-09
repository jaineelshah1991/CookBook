<?php
    include "dbconfig.php";

    $con=mysqli_connect($server,$login,$password,$dbname) or die("<br>Cannot connect to DB\n");

  if(isset($_COOKIE['user_id']) && isset($_COOKIE['subscription_type']) && isset($_COOKIE['user_type']))
    {
        $User_Id = $_COOKIE['user_id'];
    
    $sql_Query1 = "select * from Receipe where User_Id=$User_Id";
  
    $result = mysqli_query($con, $sql_Query1);

    if(mysqli_num_rows($result) > 0)
     {  
                 $receipe = array();
        while ($row = mysqli_fetch_array($result)) 
        {     

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
            "CreatedDate" => date("Y-m-d", strtotime($row['CreatedDate'])),
            "Status" => $row['Status']
           
          );
        }
        header('Content-Type: application/json');
        echo json_encode($receipe, JSON_UNESCAPED_SLASHES);
    } 

else 
{
  echo "No images found.";
  echo "Error: " . mysqli_error($con);
}
    }
   else {
        header("Location:login.html");
    }
    // Retrieve the image paths from the database
    
   
    mysqli_close($con);
  ?>