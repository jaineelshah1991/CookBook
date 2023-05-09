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

{
        if (isset($_FILES["fileToUpload"]) && $_FILES["fileToUpload"]["error"] == UPLOAD_ERR_OK)
        {
                $upload_dir = "uploads/";
                $upload_file = $upload_dir . basename($_FILES["fileToUpload"]["name"]);
                move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $upload_file);
                
                
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
                
                
                if ($ranme != null && $rauthor != null && $rdesc != null && $rins != null && $upload_file != null && $rcata != null && $rcus != null && $rprep != null && $rcook != null && $rsize != null && $datetime1 != null && $user_id != null)
                {
                        
                         $con=mysqli_connect($server,$login,$password,$dbname)
                 or die("<br>Cannot connect to DB\n");

                         $checkreceipequery = "SELECT * FROM Receipe WHERE Receipe_Name = '$ranme'";
                        echo $checkreceipequery;

                        $result_set_checkreceipequery = mysqli_query($con, $checkreceipequery);
                        $existingcount1 = mysqli_num_rows($result_set_checkreceipequery);
                        
                        
                         if($existingcount1 == 0)
                         {
                                
                                 // this will true when no data found for same receipe in the table 
                            
                             $sql_query_insert_receipe = "INSERT INTO Receipe (Receipe_Id, Receipe_Name, Author, ReceipeDesc, Instructions, image_url, Course_Cata, Cusine, Preptime, Cooktime, size, CreatedDate, User_Id) VALUES (0, '$ranme', '$rauthor', '$rdesc', '$rins', '$upload_file', '$rcata', '$rcus', $rprep, $rcook, $rsize, '$datetime1', $user_id)";

                                     echo $sql_query_insert_receipe;
                                     
                                       if (mysqli_query($con, $sql_query_insert_receipe))
                                       {
                                             echo "Record inserted successfully in Receipe";
                                             $Rec_Id = mysqli_insert_id($con);
                                                echo "<br/>";
                                             if ($Rec_Id != null)                                            
                                             {
              

   $textbox_values = array(); // initialize an array to store the textbox values
            foreach ($_POST as $key => $value) { // b4
                if (strpos($key, 'textbox_') === 1) { // b5
                    $textbox_values[] = $value; // store the textbox value in the array
                } // b5
            } // b4
                                                    echo "Array";

                                                 print_r($textbox_values);
                                                   foreach ($_POST as $key => $value)
                                                 
                                                 { 
                                                          if (strpos($key, 'textbox_') === 1)
                                                         {

                                                                 $my_variable = $value;
                                                                 echo "Each Ingr".$my_variable;

                                                                 $checkingquery = "SELECT * FROM Ingridients WHERE Ingridients_Name = '$my_variable'";
                                                                 echo $checkingquery;
                                                                 echo "<br/>";
                    $result_set_checkingquery = mysqli_query($con, $checkingquery);
                    $existingcount = mysqli_num_rows($result_set_checkingquery);

                                                             if ($existingcount == 0)
                                                             {
                                                                 $new_Ing_name = $my_variable;
                                                                             $sql_query_insert_ing = "INSERT INTO Ingridients (Ingridients_Id, Ingridients_Name, User_Id, CreatedDate) VALUES (0, '$new_Ing_name', $user_id, '$datetime1')";
                                                                        echo "<br/>";
                                                                        echo $sql_query_insert_ing;

                                                                        if (mysqli_query($con, $sql_query_insert_ing))
                                                                        {

                                                                            echo "<br/>";
                                                                            echo "Ingredients added";
                                                                            $Ing_Id = mysqli_insert_id($con);

                                                                              if ($Ing_Id != null)
                                                                              {

                                                                                $sql_query_insert_receipeingr = "INSERT INTO Rep_Ingridients (Rep_ingId, Receipe_Id, Ingridients_Id, User_Id, CreatedDate) VALUES (0, $Rec_Id, $Ing_Id, $user_id, '$datetime1')";
                                                                            
                                                                                     echo $sql_query_insert_receipeingr;

                                                                                      if (mysqli_query($con, $sql_query_insert_receipeingr)) 
                                                                                     {
                                                                                        echo "<br/>";
                                                                                         echo "Record inserted into RepING table";
                                                                                     }
                                                                                     else
                                                                                     {
                                                                                        echo "Insert REPING fail";
                                                                                     }

                                                                              }
                                                                        }
                                                                        
                                                                        else
                                                                         {
                                                                            echo "Insert ING fail";
                                                                         }
                                                             } 
                                                             else
                                                                  {
                                                                    echo "Ing exist";
                                                                  }

                                                         }
                                                     } // end for 
                                                 } 

                                                   
                                                               
                                          } // 
                                           else
                                               {
                                                    echo "Insert fail Receipe";
                                               }
                                       
                                       
                                         }
                                         else
                                             {
                                                    echo "Receipe present";
                                             }
                                         
                }
                  else
                {
                    echo "Null values";
                }                     
                                     
        }
             else
            {
                echo "No file uploaded";
            }
                         
                        
                }
               else
{
 echo '<script>alert("HEllo"); window.location.href = "login.html";</script>';

    echo '<script>alert("You are not Authorised to Create Receipe,Please update Your Memebership or login as Premimum User!"); window.location.href = "login.html";</script>';

} 
                
       


?>