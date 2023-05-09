<?php 
include "dbconfig.php";
$con = mysqli_connect($server, $login, $password, $dbname) or die("<br>Cannot connect to DB\n");

if (isset($_POST['name']) && isset($_POST['comment'])) {
  $name = $_POST['name'];
  $comment = $_POST['comment'];
  $timestamp = time();

  $sql_query = "INSERT into testcomments (id, name, comments) VALUES (0, '$name', '$comment')";
  if (mysqli_query($con, $sql_query)) {
    $comment_id = mysqli_insert_id($con);


  } else {
    echo "Insert failed";
  }
}

?>