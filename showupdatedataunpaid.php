
<?php
    include "dbconfig.php";

    $con=mysqli_connect($server,$login,$password,$dbname) or die("Cannot connect to DB");

    $user_Id = $_GET['user_Id'];






   $sql_profile_Query = "select ui.User_Id, ui.SecurityQuestion,ui.Answer, ui.FirstName,ui.LastName , ui.City, ui.ZipCode, ui.Mobile,ui.Email,ui.CreatedDate,ua.Subscription_Type
   from User_Info ui inner join User_Access_Rights ua
   on ui.User_Id = ua.User_Id where ui.User_Id=$user_Id limit 1";

    $result = mysqli_query($con, $sql_profile_Query);

    if(mysqli_num_rows($result) > 0) {
        $userinfo = array();
        while ($row = mysqli_fetch_array($result)) {
          $userinfo[] = array(
           
            "User_Id" => $row['User_Id'],
            "SecurityQuestion" => $row['SecurityQuestion'],
            "Answer" => $row['Answer'],
            "FirstName" => $row['FirstName'],
            "LastName" => $row['LastName'],
            "City" => $row['City'],
            "ZipCode" => $row['ZipCode'],
            "Mobile" => $row['Mobile'],
            "Email" => $row['Email'],
            "CreatedDate" => $row['CreatedDate'],
            "Subscription_Type" => $row['Subscription_Type']
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