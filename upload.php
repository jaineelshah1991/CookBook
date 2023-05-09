<?php
include "dbconfig.php";

  $conn=mysqli_connect($server,$login,$password,$dbname)
                 or die("<br>Cannot connect to DB\n");


// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Check if a file was uploaded
  if (isset($_FILES["fileToUpload"]) && $_FILES["fileToUpload"]["error"] == UPLOAD_ERR_OK) {
    // Define the upload directory and file path
    $upload_dir = "uploads/";
    $upload_file = $upload_dir . basename($_FILES["fileToUpload"]["name"]);
    // Move the uploaded file to the upload directory
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $upload_file)) {
      // Insert the file path into the database
      $sql = "INSERT INTO testimages (id,path) VALUES (0,'$upload_file')";
      if ($conn->query($sql) === TRUE) {
        echo "File uploaded successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }
    } else {
      echo "Error uploading file";
    }
  } else {
    echo "No file uploaded";
  }
}

$conn->close();
?>
