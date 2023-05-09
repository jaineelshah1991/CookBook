<?php 

include "dbconfig.php";
$con = mysqli_connect($server, $login, $password, $dbname) or die("<br>Cannot connect to DB\n");

//$recipe_id = $_GET['recipe_id'];

    $sql_Query1 = "SELECT * from testcomments";

    $result = mysqli_query($con, $sql_Query1);

    if(mysqli_num_rows($result) > 0) 
    {
       while ($row = mysqli_fetch_array($result)) {
          $commentinfo[] = array(
            
            'name' => $row['name'],
            'comment' => $row['comments'],
            'comment_id' => $row['id']

          );
        }


        header('Content-Type: application/json');
        echo json_encode($commentinfo, JSON_UNESCAPED_SLASHES);
     }
     else {
        echo "No data found.";
        echo "Error: " . mysqli_error($con);
    }
    mysqli_close($con);

?>