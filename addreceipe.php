<?php
   

   // validation part starts
    
 if ($_SERVER["REQUEST_METHOD"] == "POST") 

{ // m1

    function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}


  $rname = test_input($_POST["iRname"]);
  $author = test_input($_POST["nmrecipe_author"]);
  $desc = test_input($_POST["nmrecipe_description"]);
  $instr = test_input($_POST["nmrecipe_instructions"]);
  $prep_time = test_input($_POST["nmrecipe_prep_time"]);
  $cook_time = test_input($_POST["nmrecipe_cook_time"]);
  $serv_size = test_input($_POST["nmrecipe_serving_size"]);
  $category = test_input($_POST["nmrecipe_category"]);
  $cuisine = test_input($_POST["nmrecipe_cuisine"]);

  // Regular expressions for validation
  $regex_text = "/^[a-zA-Z ]*$/";
  $regex_minutes = "/^[0-9]+$/";

  // Validate Recipe Name
  if (empty($rname) || !preg_match($regex_text, $rname)) {
    echo "<script>alert('Please enter a valid Recipe Name. No Special Characters & Numbers Allowed.');</script>";
    echo "<script>window.location.href='CreateReceipe.php';</script>";
    exit;
}/*

  // Validate Recipe Author
  if (empty($author) || !preg_match($regex_text, $author)) {
    
   //   echo "<script>alert('Please enter a valid Recipe Author No Special Characters & Numbers Allowed.'); window.location.href='CreateReceipe.html'; return false;</script>";

       echo "<script>alert('Please enter a valid Recipe Author No Special Characters & Numbers Allowed.'); window.location.href='CreateReceipe.html';</script>";
  }*/
/*
  // Validate Recipe Description
  if (empty($desc) || !preg_match($regex_text, $desc)) {
  
      

           // echo "<script>alert('Please enter a valid Recipe Description No Special Characters & Numbers Allowed.'); window.location.href='CreateReceipe.html'; return false;</script>";

     echo "<script>alert('Please enter a valid Recipe Description No Special Characters & Numbers Allowed.'); window.location.href='CreateReceipe.html';</script>";
  }
*/
/*
  // Validate Instructions
  if (empty($instr) || preg_match("/[^a-zA-Z0-9 ]/", $instr)) {
           

            echo "<script>alert('Please enter a valid Recipe Instructions No Special Characters Allowed.'); window.location.href='CreateReceipe.html'; return false;</script>";


  }*/

  // validating file type 
/*
  $fileType = $_FILES["fileToUpload"]["type"];
  if($fileType != "image/jpeg" && $fileType != "image/jpg")
   {
   

            echo "<script>alert('Please upload only JPEG and JPG images.'); window.location.href='CreateReceipe.html'; return false;</script>";

  } 
  else
   {
    // Process the uploaded file
  }
*/

/*
  // Validate Preparation Time
  if (empty($prep_time) || !preg_match($regex_minutes, $prep_time)) {
    echo "<script>alert('Please enter a valid Preparation Time in minutes.'); window.location.href='CreateReceipe.html'; return false;</script>";
  }*/

  // Validate Cook Time
  /*if (empty($cook_time) || !preg_match($regex_minutes, $cook_time)) {
        echo "<script>alert('Please enter a valid Cook Time in minutes.'); window.location.href='CreateReceipe.html'; return false;</script>";
  }*/

  // Validate Serving Size
 /* if (empty($serv_size) || !is_numeric($serv_size)) {

            echo "<script>alert('Please enter a valid Serving Size (numeric value only)..'); window.location.href='CreateReceipe.html'; return false;</script>";

  }*/


    
  // Other validation here

//}



}// m1
else
{
    echo "No Post";
 // validation parts end 
}

?>