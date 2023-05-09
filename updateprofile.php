<?php 
	 

	 include "dbconfig.php";

	 $con=mysqli_connect($server,$login,$password,$dbname)
                 or die("<br>Cannot connect to DB\n");

if (isset($_COOKIE['user_id']))

 {
  
  $user_Id =$_COOKIE['user_id'];
$errorMessage = '';

    if($_SERVER["REQUEST_METHOD"] == "POST")
      {// m1

         if (empty($_POST['firstname']))
          {
                 $errorMessage = 'Please enter First name';
          }

          $First_name=$_POST['firstname'];
          $Last_name=$_POST['lastname'];
          $email=$_POST['email'];
          $password=$_POST['password'];
          $securityquestion=$_POST['securityquestion'];
          $securityanswer=$_POST['answer'];
          $city=$_POST['city'];
          $zip=$_POST['zipcode'];
          $mobile=preg_replace('/[^\dxX]/', '',$_POST['contact']);

           $password_verify = hash('sha256', $password);
          
          echo "Fetch Data :";
          echo "$First_name";
          echo "$Last_name";
          echo "$email";
          echo "$password";
          echo "$password_verify";
          echo "$securityquestion";
          echo "$securityanswer";
          echo "$city";
          echo $zip;
          echo $mobile;

           if (!empty($errorMessage))
            {
                $url = 'Viewprofile.html?errorMessage=' . urlencode($errorMessage);
                header('Location: ' . $url);
                exit();
            }

// Prepare the query
$stmt = $con->prepare("SELECT  ui.FirstName ,ui.LastName,ui.Email,ui.SecurityQuestion,ui.Answer,ui.City,ui.ZipCode,ui.Mobile,uc.Password   FROM  User_Info ui    INNER JOIN User_Credentail uc ON ui.User_Id = uc.User_Id WHERE ui.User_Id = ?");
if (!$stmt) {
   die('Error: ' . $con->error); 
}

$stmt->bind_param("i", $user_Id);

// Execute the query
$stmt->execute();

// Get the result
$result = $stmt->get_result();

if ($result->num_rows == 1) {
    // Fetch the row
    $row = $result->fetch_assoc();

    // Check if the data is the same
    if (($row['FirstName'] == $First_name) && ($row['LastName'] == $Last_name)
        && ($row['Email'] == $email) && ($row['Password'] == $password_verify) &&
        ($row['SecurityQuestion'] ==  $securityquestion) &&
        ($row['Answer'] ==  $securityanswer) && ($row['City'] ==  $city)
        && ($row['ZipCode'] ==  $zip) && ($row['Mobile'] ==  $mobile)) {
        
        echo '<script>alert("Data same Updation Not needed");</script>';
    } 

    else {
        
        // Prepare the update query
$stmt = $con->prepare("UPDATE User_Info  
INNER JOIN User_Credentail ON User_Info.User_Id = User_Credentail.User_Id  
INNER JOIN User_Credentail_Internal ON User_Credentail.User_Id = User_Credentail_Internal.User_Id 
SET User_Info.FirstName = ?, User_Info.LastName = ?, User_Info.Email = ?, 
    User_Info.City = ?, User_Info.ZipCode = ?, User_Info.Mobile = ?, 
    User_Credentail.Password = ?, User_Credentail_Internal.Password = ?, 
    User_Info.SecurityQuestion = ?, User_Info.Answer = ? 
WHERE User_Info.User_Id = ?");
if ($stmt === false) {
    die("Error preparing statement: " . $con->error);
}

$result = $stmt->bind_param("ssssssssssi", $First_name, $Last_name, $email, $city, $zip, $mobile, $password_verify, $password, $securityquestion, $securityanswer, $user_Id);
if ($result === false) {
    die("Error binding parameters: " . $stmt->error);
}

$result = $stmt->execute();
if ($result === false) {
    die("Error executing statement: " . $stmt->error);
}

        
    echo '<script>alert("Data updated successfully"); window.location.href = "http://obi.kean.edu/~shahjai/CookBook/Viewprofile.html?User_Id=' . $user_Id . '";</script>';

    }
}
else
{
    echo "No result";
}
// Close the statement and database connections
$stmt->close();
$con->close();


   }// m1
        else
      { //else m1
                        echo "No post";
        } //else m1


} // cook
else 
{
  echo "Cookie not set";
}
    // Close the statement and database connections

?>