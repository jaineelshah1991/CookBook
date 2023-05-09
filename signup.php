<?php

include "dbconfig.php";

  $con=mysqli_connect($server,$login,$password,$dbname)
                 or die("<br>Cannot connect to DB\n");

$First_name=$Last_name=$email=$password=$securityquestion=$securityanswer=$birthday=$city=$password_verify=" ";
$zip=$mobile=$User_id =$image_id =0;
$file_name =$file_tmp=$file_ext =$new_file_name =$file_path =" ";
try
{
    if($_SERVER["REQUEST_METHOD"] == "POST")

    {

          $First_name=$_POST['firstname'];
          $Last_name=$_POST['lastname'];
          $email=$_POST['Email'];
          $password=$_POST['password'];
          $securityquestion=$_POST['question'];
          $securityanswer=$_POST['answer'];
          $city=$_POST['city'];
          $zip=$_POST['zipcode'];
          $mobile=preg_replace('/[^\dxX]/', '',$_POST['contact']);

        
             $upload_dir = "Images/"; // set upload directory
                     // get file details
            $file_name = $_FILES["fileToUpload"]["name"];
            $file_tmp = $_FILES["fileToUpload"]["tmp_name"];
            $file_ext = pathinfo($file_name, PATHINFO_EXTENSION);

            // generate unique file name
            $new_file_name = uniqid() . '.' . $file_ext;

            // set full file path
            $file_path = $upload_dir . $new_file_name;
          
             // check if file already exists in the directory
             if (file_exists($file_path))
             {
                echo "Sorry, the file already exists.";
             } 
             else
              {
                // move the file to the upload directory with the new file name
                if (move_uploaded_file($file_tmp, $file_path))
                {
                  echo "The file " . $file_name . " has been uploaded and renamed to " . $new_file_name;
               }
                 else
                  {
                   echo "Sorry, there was an error uploading your file.";
                }
               }
             
        

         $password_verify = hash('sha256', $password);
          
        /*  echo "Fetch Data :";
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

*/
           if($First_name != null  &&  $Last_name != null  && $email != null  && $password_verify != null &&
                  $securityquestion!= null && $securityanswer != null    && $city != null  && $zip != null && $mobile != null && $file_path != null)
           {
            
                    $checkuserexistquery = "select * from User_Credentail where Username='$email'";
                     $result_set=mysqli_query($con,$checkuserexistquery);
                     $existcount = (mysqli_num_rows($result_set) > 0);

                     if ($existcount >0)
                     {
                             echo '<script>alert("User exists,  please login!"); window.location.href = "login.html";</script>';

                           
                     }
                     else
                     {

                 

             $sql_query="INSERT into User_Info (User_id,FirstName,LastName,City,ZipCode,Mobile,Email,SecurityQuestion,Answer,Status,CreatedDate) 
			 VALUES (0,'$First_name','$Last_name','$city','$zip',$mobile,'$email','$securityquestion','$securityanswer','Active',NOW())";



                    //echo $sql_query;
                 if(mysqli_query($con,$sql_query))
                         {  

                              $User_id = mysqli_insert_id($con);
                              if($User_id != null)
                              {
                                    $sql_query_cred = "INSERT into User_Credentail (Crid,User_Id,Username,Password)
                                    values (0,$User_id,'$email','$password_verify')";

                                    $sql_query_credq = "INSERT into User_Credentail_Internal (Crid,User_Id,Username,Password)
                                    values (0,$User_id,'$email','$password')";


                                     if(mysqli_query($con,$sql_query_cred))
                                     {
                                       // echo "Record inserted successfully  in user credentail";  
                                     }

                                     if(mysqli_query($con,$sql_query_credq))
                                     {
                                        
                                     }

                                     $sql_query_right = "INSERT into User_Access_Rights (access_id,User_Type,Subscription_Type,rights,Rights_FLAG,User_Id)
                                    values (0,'User','Unpaid','Create Post','No',$User_id),(0,'User','Unpaid','Create Channel','No',$User_id)";

                                     if(mysqli_query($con,$sql_query_right))
                                     {
                                      //  echo "Record inserted successfully  in Access right";
                                     }
                                    

                                     $sql_query_image = "INSERT into user_images (Image_id,imagepath,User_id) values (0,'$file_path',$User_id)";

                                     if(mysqli_query($con,$sql_query_image))
                                     {
                                       // echo "Record inserted successfully  in User Image";
                                     }


                                    echo "<script>localStorage.setItem('last_user_id', '{$User_id}');</script>";


                                    echo "<script> alert(localStorage.getItem('last_user_id')); </script>";


                                    echo '<script> window.location.href = "addchoise.html"; </script>';

                                   // echo '<script>alert("Sign Up completed Please Login!"); window.location.href = "login.html";</script>';


                              }

                         }
                         else
                         {  

                         echo "Could not insert record: ";  

                         }  

                         mysqli_close($con);

           } 
       }

    }
}

catch (Exception $e1)
            {

            echo 'Message: ' .$e1->getMessage();   
            error_reporting(0);

              header("refresh: 1");
            }
             
 ?>