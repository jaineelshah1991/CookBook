
<?php
    include "dbconfig.php";

    $con=mysqli_connect($server,$login,$password,$dbname) or die("Cannot connect to DB");

    $recipe_id = $_GET['recipe_id'];


$sql_comment_Query = "select rc.Receipe_comments_Id,rc.Comments, rc.Receipe_id, rc.commentdate, r.Receipe_Name, u.User_Id, u.FirstName from Receipe_comments rc join Receipe r on r.Receipe_id = rc.Receipe_id join User_Info u on u.User_Id = rc.User_Id 
   where rc.Receipe_id=$recipe_id";
    $result = mysqli_query($con, $sql_comment_Query);

    if(mysqli_num_rows($result) > 0) {
        $commentinfo = array();
        while ($row = mysqli_fetch_array($result)) {
          $commentinfo[] = array(
           
            "Receipe_Id" => $row['Receipe_id'],
            "Receipe_Name" => $row['Receipe_Name'],
            "User_Id" => $row['User_Id'],
            "FirstName" => $row['FirstName'],
            "Comments" => $row['Comments'],
            "commentdate" => $row['commentdate'],
            "Receipe_comments_Id" => $row['Receipe_comments_Id']
           
          );
        }
        header('Content-Type: application/json');
        echo json_encode($commentinfo, JSON_UNESCAPED_SLASHES);
    } else {
        echo "No data found.";
        echo "Error: " . mysqli_error($con);
    }
    mysqli_close($con);
?>