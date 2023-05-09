<?php
    
    include "dbconfig.php";

  $con=mysqli_connect($server,$login,$password,$dbname)
                 or die("<br>Cannot connect to DB\n");

$ranme = $rauthor = $rins = $rcata = $rcus = $rdesc = $upload_file = $datetime1 = "";
$rprep = $rcook = $rsize = $user_id = $Ing_Id = $existcount = $existingcount1 = 0;

$target_dir = "uploads/";

 if ((!isset($_COOKIE['user_id'])) && !isset($_COOKIE['subscription_type'])) {
    // Redirect to login page if not logged in
    echo '<script>alert("Session Not Set!"); window.location.href = "login.html";</script>';
    header('Location:login.html');
    exit;
}

if (($_COOKIE['subscription_type'] == "Paid") && ($_SERVER["REQUEST_METHOD"] == "POST")) 
{ // b1

  //  if (isset($_FILES["fileToUpload"]) && $_FILES["fileToUpload"]["error"] == UPLOAD_ERR_OK)
        { // b2

             //$upload_dir = "uploads/";
   // $upload_file = $upload_dir . basename($_FILES["fileToUpload"]["name"]);


             // Check if the file already exists
             //   if (file_exists($upload_file))
             //   {
                   // echo "Sorry, the file already exists.";
              //  }
//else 
               /* {
                    // Create a unique filename and move the uploaded file to the server
                    $file_ext = pathinfo($upload_file, PATHINFO_EXTENSION);
                    $new_file_name = uniqid() . '.' . $file_ext;
                    $new_upload_file = $upload_dir . $new_file_name;
                    
                    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $new_upload_file)) {
                        echo "The file ". $new_file_name. " has been uploaded.";
                    } else {
                        echo "Sorry, there was an error uploading your file.";
                    }
                //}*/

                $ranme = $_POST['iRname'];
                if (empty($ranme)) 
                {
                    $error_msg = "Please enter a value for the recipe name.";
                    echo '<script>document.getElementById("iRname").title = "'.$error_msg.'";</script>';
                } 
                elseif (!preg_match('/^[a-zA-Z\s]+$/', $ranme)) {
                    $error_msg = "Recipe name should only contain letters and spaces.";
                    echo '<script>document.getElementById("iRname").title = "'.$error_msg.'";</script>';
                }
                else
                {
                        $ranme = $_POST['iRname'];
                        echo $ranme;

                }


/*
            $ranme = $_POST['iRname'];

            $rauthor = $_POST['recipe_author'];
            $rdesc = $_POST['nmrecipe_description'];
            $rins = $_POST['nmrecipe_instructions'];
            $rcata = $_POST['nmrecipe_category'];
            $rcus = $_POST['nmrecipe_cuisine'];
            $rprep = $_POST['nmrecipe_prep_time'];
            $rcook = $_POST['nmrecipe_cook_time'];
            $rsize = $_POST['nmrecipe_serving_size'];
            $user_id = $_COOKIE['user_id'];
            $datetime1 = date('Y-m-d H:i:s');



                 echo "Fetch Data :";
                echo "<br/>";
                echo "$ranme";
                echo "<br/>";
                echo "$rauthor";
                echo "<br/>";
                echo "$rdesc";
                echo "<br/>";
                echo "$rins";
                echo "<br/>";
                echo "$upload_file";
                echo "<br/>";
                echo "$rcata";
                echo "<br/>";
                echo "$rcus";
                echo "<br/>";
                echo $rprep;
                echo "<br/>";
                echo $rcook;     
                echo "<br/>";
                echo $rsize;   
                echo "<br/>";
                echo $datetime1;
                echo "<br/>";
                echo $user_id;

                $size = $_POST['totalRows'];
                echo "Total Size";*/
                /*
                    $j = 0;
                            while ($j < $size)
                        {

                            $pr_id= $_POST['ingredients'][$j];
                            $pr_name= $_POST['quantities'][$j];
                            $pr_des= $_POST['measure'][$j];

                            echo "Ing:".$pr_id; 
                            echo "<br/>";
                            echo "quan".$pr_name;
                             echo "<br/>";
                            echo "Meas".$pr_des;
                             echo "<br/>";

                        }  */


     //   }// b2
     //   else
     //   { // b2 else
            echo "E1";
      //  }// b2  else
}// b1


?>