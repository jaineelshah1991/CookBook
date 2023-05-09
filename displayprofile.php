
<?php
    include "dbconfig.php";

    $con=mysqli_connect($server,$login,$password,$dbname) or die("Cannot connect to DB");

    $user_Id = $_GET['user_Id'];






   //$sql_profile_Query = "select ui.User_Id, ui.SecurityQuestion,ui.Answer,concat(ui.FirstName,' ',ui.LastName) as fullname, ui.City, ui.ZipCode,ui.Mobile,ui.Email,ui.CreatedDate,ua.Subscription_Type   from User_Info ui inner join User_Access_Rights ua   on ui.User_Id = ua.User_Id where ui.User_Id=$user_Id limit 1;";

$sql_profile_Query = "select ui.User_Id,concat(ui.FirstName,' ',ui.LastName) as fullname,ui.City,
  ui.ZipCode,ui.Mobile,ui.Email,ui.CreatedDate, ui.SecurityQuestion, ui.Answer,im.imagepath,ua.Subscription_Type
  from User_Info ui join user_images im
  join User_Access_Rights ua on ui.User_Id = ua.User_Id
  where ui.User_Id=$user_Id limit 1";
    $result = mysqli_query($con, $sql_profile_Query);

    if(mysqli_num_rows($result) > 0) {
        $userinfo = array();
        while ($row = mysqli_fetch_array($result)) {
          $userinfo[] = array(
           
            "fullname" => $row['fullname'],
            "City" => $row['City'],
            "ZipCode" => $row['ZipCode'],
            "Mobile" => $row['Mobile'],
            "Email" => $row['Email'],
            "CreatedDate" => $row['CreatedDate'],
            "Subscription_Type" => $row['Subscription_Type'],
            "SecurityQuestion" => $row['SecurityQuestion'],
            "Answer" => $row['Answer'],
            "User_Id" => $row['User_Id'],
            "imagepath" => $row['imagepath']
         
          );
        }
        header('Content-Type: application/json');
        echo json_encode($userinfo, JSON_UNESCAPED_SLASHES);
    } else {
        echo "No data found.";
        echo "Error: " . mysqli_error($con);
    }
    mysqli_close($con);
?>