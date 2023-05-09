
<?php
    include "dbconfig.php";

    $con=mysqli_connect($server,$login,$password,$dbname) or die("<br>Cannot connect to DB\n");

    $recipe_id = $_GET['recipe_id'];


   $sql_Query1 = "SELECT r.Receipe_Name, r.ReceipeDesc,r.Author, r.Instructions, r.Course_Cata, r.Cusine, r.Preptime,  r.size, ri.Ingridients_Id, ri.Receipe_Id, CONCAT(i.Quantity, ' ', i.Measure, ' ', i.Ingridients_Name) AS ingdetails, rimg.newfilename 
FROM Rep_Ingridients ri 
JOIN Ingridients i ON ri.Ingridients_Id = i.Ingridients_Id 
JOIN Receipe r ON r.Receipe_Id = ri.Receipe_Id 
JOIN Rep_Image_Info rimg ON rimg.Receipe_Id = ri.Receipe_Id 
WHERE ri.Receipe_Id = $recipe_id
GROUP BY ri.Receipe_Id"; 


 //$sql_query2= " select r.Receipe_Name, r.ReceipeDesc,r.Author, r.Instructions, r.Course_Cata, r.Cusine, r.Preptime,  r.size from Receipe r  where Receipe_Id=$recipe_id";


 $sql_query1="select r.Receipe_Id,r.Receipe_Name, r.ReceipeDesc,r.Author, r.Instructions, r.Course_Cata, r.Cusine, r.Preptime,r.size, rimg.newfilename,
 rimg.videourl  from Receipe r  JOIN Rep_Image_Info rimg ON rimg.Receipe_Id =  r.Receipe_Id  where r.Receipe_Id=$recipe_id";


 $sql_query2 ="select reping.Ingridients_Id ,reping.Quantity ,reping.Measure,i.Ingridients_Name,
 CONCAT(reping.Quantity, ' ', reping.Measure, ' ', i.Ingridients_Name) AS Ing_details 
 from Rep_Ingridients reping  join  Ingridients i ON reping.Ingridients_Id = i.Ingridients_Id  where Receipe_Id=$recipe_id";


$result1 = mysqli_query($con, $sql_query1);
$result2 = mysqli_query($con, $sql_query2);

        $receipeinfo = array();


if (mysqli_num_rows($result1) > 0 && mysqli_num_rows($result2) > 0)
 {

         while ($row = mysqli_fetch_array($result1)) {
          $receipeinfo[] = array(
            "imagepath" => "uploads/" . $row['newfilename'],
            "videourl" => $row['videourl'],
            "Receipe_Id" => $row['Receipe_Id'],
            "Receipe_Name" => $row['Receipe_Name'],
            "Receipe_Dec" => $row['ReceipeDesc'],
            "Author" => $row['Author'],             
            "Receipe_Ins" => $row['Instructions'],
            "Course_Cata" => $row['Course_Cata'],
            "Cusine" => $row['Cusine'],
            "Preptime" => $row['Preptime'],
            "Serve_size" => $row['size'],  
          );

      }

         while ($row1 = mysqli_fetch_array($result2)) {
          $ingridentinfo[] = array(
            "Ingridients_Id" => $row1['Ingridients_Id'],
            "Quantity" => $row1['Quantity'],
            "Measure" => $row1['Measure'],
            "Ingridients_Name" => $row1['Ingridients_Name'],             
            "Ing_details" => $row1['Ing_details']
          
          );

         }

           // Combine the two arrays into a single array
    $combinedArray = array_merge($receipeinfo, $ingridentinfo);

             header('Content-Type: application/json');
        echo json_encode($combinedArray, JSON_UNESCAPED_SLASHES);

}

else
 {
        echo "No data found.";
        echo "Error: " . mysqli_error($con);
    }

   


    mysqli_close($con);

    



?>
