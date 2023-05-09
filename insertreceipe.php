<?php

include "dbconfig.php";


$con=mysqli_connect($server,$login,$password,$dbname)
                 or die("<br>Cannot connect to DB\n");

$ranme = $rauthor = $rins = $rcata = $rcus = $rdesc = $upload_file = $datetime1 = "";
$rprep = $rcook = $rsize = $user_id = $Ing_Id = $existcount = $existingcount1 = $Recimage_Id = $final_Receipe_Id =0;
$target_dir = "uploads/";

if ((!isset($_COOKIE['user_id'])) && !isset($_COOKIE['subscription_type'])) 
{ // b1
    // Redirect to login page if not logged in
    echo '<script>alert("Session Not Set!"); window.location.href = "login.html";</script>';
    header('Location:login.html');
    exit;
}// b1

if (($_COOKIE['subscription_type'] == "Paid") && ($_SERVER["REQUEST_METHOD"] == "POST")) 
{ // b2
	if ($_SERVER['REQUEST_METHOD'] === 'POST') 
	{ // b3
			$ranme = $_POST['iRname'];
            $rauthor = $_POST['nmrecipe_author'];
            $rdesc = $_POST['nmrecipe_description'];
            $rins = $_POST['nmrecipe_instructions'];

if (isset($_FILES["fileToUpload"]) && $_FILES["fileToUpload"]["error"] == UPLOAD_ERR_OK)
            { //  b4
            	$upload_dir = "uploads/";
    			$upload_file = $upload_dir . basename($_FILES["fileToUpload"]["name"]);

	    	  if (file_exists($upload_file)) 
	            { //  b5
	     		   echo "Sorry, the file already exists.";
	   			}//  b5
	   			else
	   			{
	   				// Create a unique filename and move the uploaded file to the server
			        $file_ext = pathinfo($upload_file, PATHINFO_EXTENSION);
			        $old_file_name = $_FILES["fileToUpload"]["name"];
			        $image_id = uniqid();
			        $new_file_name = uniqid() . '.' . $file_ext;
			        $new_upload_file = $upload_dir . $new_file_name;

			         if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $new_upload_file)) {
            // File was successfully uploaded
            echo "The file " . $old_file_name . " has been uploaded and renamed to " . $new_file_name;
        } else {
            echo "Sorry, there was an error uploading your file.";
        }


			        echo "File  upload details";
			        echo "</br>";
			          echo "File  extenstion".$file_ext;
			        echo "</br>";
			          echo "File  Old Name details".$old_file_name;
			        echo "</br>";
			          echo "File  Image Id".$image_id;
			        echo "</br>";
			          echo "File  New name".$new_file_name;
			        echo "</br>";
			   echo "File  New Upload name".$new_upload_file;
			        echo "</br>";

	   			}

	   		$rcata = $_POST['nmrecipe_category'];
            $rcus = $_POST['nmrecipe_cuisine'];
            $rprep = $_POST['nmrecipe_prep_time'];
         //   $rcook = $_POST['nmrecipe_cook_time'];
            $rsize = $_POST['nmrecipe_serving_size'];
            $nmrecipe_videourl = $_POST['nmrecipe_videourl'];

            $user_id = $_COOKIE['user_id'];
            date_default_timezone_set('America/New_York');
            $datetime1 = date('Y-m-d H:i:s');




                echo "Fetch Data :";
                echo "<br/>";
                echo "R Name".$ranme;
                echo "<br/>";
                echo "R Author".$rauthor;
                echo "<br/>";
                echo "R Desc".$rdesc;
                echo "<br/>";
                echo "R Ins".$rins;
                echo "<br/>";
                echo "Upload File".$upload_file;
                echo "<br/>";
                echo "R cata".$rcata;
                echo "<br/>";
                echo "R Cus".$rcus;
                echo "<br/>";
                echo "R Prep".$rprep;
                echo "<br/>";
              //  echo "R Cook".$rcook;     
                echo "<br/>";
                echo "R size".$rsize;   
                echo "<br/>";
                echo "Current time".$datetime1;
                echo "<br/>";
                echo "user id".$user_id;
                     echo "<br/>";
                echo "You tube".$nmrecipe_videourl;



            }//  b4
            else
            { // else b4
            	echo "No file uploaded";
            	 $old_file_name = "";
			        $image_id = "";
			        $new_file_name   = "";
			        $new_upload_file   = "";
            } // else b4



           // insert part 1  create receipe get receipe id and add first into image database
       if ($ranme != null && $rauthor != null && $rdesc != null && $rins != null && $upload_file != null && $rcata != null && $rcus != null && $rprep != null &&  $rsize != null && $datetime1 != null && $user_id != null && $old_file_name != null && $image_id != null && $new_file_name != null && $new_upload_file != null)
         {  // b4

          $checkreceipequery = "SELECT * FROM Receipe WHERE Receipe_Name = '$ranme'";
          echo $checkreceipequery;
          $result_set_checkreceipequery = mysqli_query($con, $checkreceipequery);
          $existingcount1 = mysqli_num_rows($result_set_checkreceipequery);

          if($existingcount1 == 0)
            { // b5
              // this will true when no data found for same receipe in the table 

             $sql_query_insert_receipe = "INSERT INTO Receipe (Receipe_Id, Receipe_Name, Author, ReceipeDesc, Instructions, Course_Cata, Cusine, Preptime, Cooktime, size, CreatedDate, User_Id,Status) VALUES (0, '$ranme', '$rauthor', '$rdesc', '$rins','$rcata', '$rcus', $rprep, null, $rsize, '$datetime1', $user_id,'Pending')";
             echo "<br/>";
             echo $sql_query_insert_receipe;
             echo "<br/>";

                if (mysqli_query($con, $sql_query_insert_receipe))
                 {  // b6
                   echo "Record inserted successfully in Receipe";
                   $Rec_Id = mysqli_insert_id($con);
                   echo "<br/>";
                   echo "Rep id".$Rec_Id;
                   $final_Receipe_Id= $Rec_Id;
                    echo "final_Receipe_Id".$final_Receipe_Id;

                     if ($Rec_Id != null)
                    { // b7

                      $sql_query_insert_image = "INSERT INTO Rep_Image_Info (Rep_Image_Info_Id, Oldfilename, newfilename,imagepath,videourl, Receipe_Id, User_Id, Lastupdateddate) VALUES (0, '$old_file_name', '$new_file_name', '$new_upload_file','$nmrecipe_videourl',$Rec_Id, $user_id, '$datetime1')";
					  echo "<br/>";
					  echo $sql_query_insert_image;
					  echo "<br/>";

					   if (mysqli_query($con, $sql_query_insert_image))
					   { // b8
					   		$Recimage_Id = mysqli_insert_id($con);
					   		 echo "Record inserted successfully in REP Image";
                  				echo "<br/>";
			                   echo "Repimage id".$Recimage_Id;

					   } // b8
					   else
					   { // else b8
					   	echo "REP IMG inser fail";
					   }// else b8


                    }  // b7                                          
                     else
                     { //else b7
                                          	echo "REC id was null no further insert";
                      }//else b7



                      // insert for others



            // insert part 2  in below add ingrident  get ing ind and store each rep id and ing in in pnether table 

             // Get the data for form 2 ingredients array
			  $ingredients = $_POST['ingredients'];
			  $quantities = $_POST['quantities'];
			  $measures = $_POST['measure'];
			  $Rec_Id = mysqli_insert_id($con);

			// Loop through the ingredients and print them
				foreach ($ingredients as $index => $ingredient)
				 {  // b9  for loop 
				  $name = $ingredient;
				  $quantity = $quantities[$index];
				  $measure = $measures[$index];

				  echo "Ingredient:".$name;
				    echo "<br/>";
				  echo "Quantity:". $quantity;
				    echo "<br/>";
				  echo "Measure:".$measure;
				  echo "<br/>";

				  	if ($name != null && $quantity != null && $measure != null)
				  	{ // b9a

				     $checkingingquery = "SELECT * FROM Ingridients WHERE Ingridients_Name = '$name'";
                   echo $checkingingquery;
                    echo "<br/>";
                    $result_set_checkingingquery = mysqli_query($con, $checkingingquery);
                    $existingcount = mysqli_num_rows($result_set_checkingingquery);


                    if ($existingcount == 0)
                    { // b10
                    		// if ing not exist 

                    	$sql_query_insert_ing = "INSERT INTO Ingridients (Ingridients_Id, Ingridients_Name,Quantity,Measure, User_Id, CreatedDate) VALUES (0, '$name',null,null, $user_id,'$datetime1')";
                        echo "<br/>";
                        echo $sql_query_insert_ing;

                         if (mysqli_query($con, $sql_query_insert_ing))
                         {// b11

                         		  echo "<br/>";
                                 echo "Ingredients added";

                                  $Ing_Id = mysqli_insert_id($con);

                                   if ($Ing_Id != null)
                                   { // b12

                                            echo "Recipe id 1".$final_Receipe_Id;
                                   		$sql_query_insert_receipeingr = "INSERT INTO Rep_Ingridients (Rep_ingId, Receipe_Id, Ingridients_Id, Quantity,Measure,User_Id, CreatedDate) VALUES
                                         (0, $final_Receipe_Id, $Ing_Id,$quantity,'$measure',$user_id,'$datetime1')";


                                             echo $sql_query_insert_receipeingr;

                                            if (mysqli_query($con, $sql_query_insert_receipeingr))
                                            { // b13

                                            	 echo "<br/>";
                                                 echo "Record inserted into RepING table";

                                            } // b13
                                            else
                                            {// else b13

                                            		echo "Insert REPING fail";
                                            }// else b13
                                   } // b12
                                   else
                                   { // else b12
                                   		echo "ING id null";
                                   } // else b12
                         } // b11
                         else
                         { // else b11

                         		echo "Insert ING fail";
                         } // else b11

                    }// b10
                    else
                    { //  else b10
                    		echo "ING present";

                    		// add new insert code 

                    
                    $row=mysqli_fetch_array($result_set_checkingingquery);
                    $Ing_Id = $row['Ingridients_Id'];
                    echo "Fetched INg if its allready exists".$Ing_Id;
                       echo "Recipe id 1".$final_Receipe_Id;

                  //  $sql_query_insert_receipeingr1 = "INSERT INTO Rep_Ingridients (Rep_ingId, Receipe_Id, Ingridients_Id, User_Id, CreatedDate) VALUES (0, $final_Receipe_Id, $Ing_Id, $user_id, '$datetime1')";

                    $sql_query_insert_receipeingr1 = "INSERT INTO Rep_Ingridients (Rep_ingId, Receipe_Id, Ingridients_Id, Quantity,Measure,User_Id, CreatedDate) VALUES
                                         (0, $final_Receipe_Id, $Ing_Id,$quantity,'$measure',$user_id,'$datetime1')";

                                             echo $sql_query_insert_receipeingr1;

                                            if (mysqli_query($con, $sql_query_insert_receipeingr1))
                                            { // b13

                                            	 echo "<br/>";
                                                 echo "Record inserted into RepING table";

                                            } // b13
                                            else
                                            {// else b13

                                            		echo "Insert REPING fail";
                                            }// else b13



                    } // else b10
                }  // b9a //////

				  	else
				  	{ // else // b9a
				  		Echo "form 2 has null values";
				  	} // else // b9a

				 } // b9 end of for loop 






                 } // b6
                                 else
                                 { // else b6
                                 		echo " Insert Fails in Receipe";
                                 }// else b6

                        	 } // b5
                        	 else
                        	 { // else b5

                        	 	 echo "Receipe present";
                        	 } // else b5

                          		




                          }  // end b4
                          else
                          { // else b4
                          		 echo "null values in form1";
                          } // else b4


                   // start write code

		




		



             echo '<script>alert("Receipe Created successfully"); window.location.href = "HomePage-Paid.html";</script>';

                         // end write code 

	} // b3
	else
	{ // else b3
			  	echo "Method is not post";

	}// else b3



//	 end write code

} // b2
else
{ // else b2
	 echo '<script>alert("You are not Authorised to Create Receipe,Please update Your Memebership or login as Premimum User!"); window.location.href = "login.html";</script>';
} // else b2


?>