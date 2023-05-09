<?php

include "dbconfig.php";


$con=mysqli_connect($server,$login,$password,$dbname)
                 or die("<br>Cannot connect to DB\n");

$ranme = $rauthor = $rins = $rcata = $rcus = $rdesc = $upload_file = $datetime1 = "";
$rprep = $rcook = $rsize = $user_id = $Ing_Id = $existcount = $existingcount1 = $Recimage_Id = $final_Receipe_Id =0;
$target_dir = "uploads/";

if ((isset($_COOKIE['user_id'])) && isset($_COOKIE['subscription_type']) && $_COOKIE['subscription_type'] == "Paid") 
{ // b1

	if (isset($_FILES["recipeimage"]) && $_FILES["recipeimage"]["error"] == UPLOAD_ERR_OK)
	{

			$upload_dir = "uploads/";
    	   $upload_file = $upload_dir . basename($_FILES["recipeimage"]["name"]);

    	    if (file_exists($upload_file)) 
	         { //  b5
	     		   echo "Sorry, the file already exists.";
	   		 }//  b5
	   		 else
	   		 {

	   		 		 $allowed_types = array("image/jpeg", "image/png", "image/gif");
				        $file_type = $_FILES["recipeimage"]["type"];
				        if (!in_array($file_type, $allowed_types)) {
				            echo "Error: Only image files are allowed.";
				            return;
				        }

				      // Create a unique filename and move the uploaded file to the server
			        $file_ext = pathinfo($upload_file, PATHINFO_EXTENSION);
			        $old_file_name = $_FILES["recipeimage"]["name"];
			        $image_id = uniqid();
			        $new_file_name = uniqid() . '.' . $file_ext;
			        $new_upload_file = $upload_dir . $new_file_name;



			         if (move_uploaded_file($_FILES["recipeimage"]["tmp_name"], $new_upload_file))
			          {
           					 // File was successfully uploaded
          					  echo "The file " . $old_file_name . " has been uploaded and renamed to " . $new_file_name;
       				 } 
       				 else
       				  {
          					  echo "Sorry, there was an error uploading your file.";
      					  }


	   		 }
	   		 $recipe_id = $_POST['recipe_Id'];
	   		$ranme = $_POST['receipename'];
            $rdesc = $_POST['recipedesc'];
            $rins = $_POST['recipeinstructions'];
            $rcata = $_POST['coursecategory'];

            $rcus = $_POST['cuisine'];
            $rprep = $_POST['preptime'];
            $rsize = $_POST['recipesize'];
            $nmrecipe_videourl = $_POST['videourlinput'];

            $user_id = $_COOKIE['user_id'];
            date_default_timezone_set('America/New_York');
            $datetime1 = date('Y-m-d H:i:s');

                echo "Fetch Data :";
                echo "R ID".$recipe_id;
                echo "<br/>";
                echo "R Name".$ranme;
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
                echo "<br/>";
                echo "R size".$rsize;   
                echo "<br/>";
                echo "Current time".$datetime1;
                echo "<br/>";
                echo "user id".$user_id;
                     echo "<br/>";
                echo "You tube".$nmrecipe_videourl;

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

	  if ($recipe_id != null && $ranme != null && $rdesc != null && $rins != null && $upload_file != null && $rcata != null && $rcus != null && $rprep != null &&  $rsize != null && $datetime1 != null && $user_id != null && $old_file_name != null && $image_id != null && $new_file_name != null && $new_upload_file != null)

	  {



	  		$sql_image_update = "update Rep_Image_Info set Oldfilename='$old_file_name', newfilename ='$new_file_name',
	  		 imagepath='$new_upload_file', videourl='$nmrecipe_videourl',  User_Id=$user_id, Lastupdateddate ='$datetime1'
	  		  where Receipe_Id='$recipe_id'";

	  		  echo $sql_image_update;


             if (mysqli_query($con, $sql_image_update))
             {
             	echo "Rep image updated";
             }
             else
             {
             	echo "Rep image update fail";
             }
 
	  		     $sql_query_update_receipe = "update Receipe set Receipe_Name ='$ranme',ReceipeDesc ='$rdesc',Instructions ='$rins',Course_Cata ='$rcata',Cusine ='$rcus', Preptime =$rprep,size =$rsize where Receipe_Id='$recipe_id'";
				 echo "<br/>";
             echo $sql_query_update_receipe;
             echo "<br/>";

             if (mysqli_query($con, $sql_query_update_receipe))
                 {  // b6
         				 echo '<script>alert("Recipe updated successfully!");</script>';

                 		    echo '<script>     var confirmUpdate = confirm("Do you want to update ingredients for this recipe?");
            if(confirmUpdate == true) {
              window.location.href = "editingredient.html?recipe_id='.$recipe_id.'";
            }
            else
            {
            	              window.location.href = "ViewAllReceipe.html";

            }
          </script>';  

          echo '<script>alert("Recipe updated successfully!");</script>';


                 }


	  }
	  else
	  {
	  	echo "Null values";
	  }
			    
	}	// end file upload 				

		else
	{
		echo "File upload Error";
            	 $old_file_name = "";
			        $image_id = "";
			        $new_file_name   = "";
			        $new_upload_file   = "";

	}
    	
}// b1
else
{
	// Redirect to login page if not logged in
    echo '<script>alert("Session Not Set!"); window.location.href = "login.html";</script>';
    header('Location:login.html');
}
	


?>

