<?php
include "dbconfig.php";


  $con=mysqli_connect($server,$login,$password,$dbname)
                 or die("<br>Cannot connect to DB\n");
// check id using cookie  
 if(isset($_COOKIE['user_id']) && isset($_COOKIE['subscription_type'])) 
 {	
 	if($_SERVER["REQUEST_METHOD"] == "POST")
	{
			$Rname=$_POST['iRname'];
    		$receipe_id=$_POST['recipe_id'];
			$user_id = $_COOKIE['user_id'];
			date_default_timezone_set('America/New_York');

			$datetime1 = date('Y-m-d H:i:s');

			echo "Comments".$Rname;
			echo "receipe_id".$receipe_id;

			$sql_query="INSERT into Receipe_comments (Receipe_comments_Id,Comments,User_Id,Receipe_id,commentdate) VALUES (0,'$Rname','$user_id','$receipe_id','$datetime1')";
			echo "<br/>";
            echo $sql_query;

                if (mysqli_query($con, $sql_query))
                {
                		echo "Comments done";
                 	 $comment_id = mysqli_insert_id($con);
                 	 echo $receipe_id;
                 	echo "Receipe Id".$receipe_id;
                   echo "<br/>";
                   echo "Comment id".$comment_id;
             
                   //header('Location:ViewReceipe.html');
                  
					header('Location: ViewReceipe.html?recipe_id=' . $receipe_id);

                }
	}
	else
	{
		echo  "No Post Method";
	}
 }
else
{
	
	    echo "<script>alert('Please login'); window.location.href = 'login.html';</script>";


}
	




?>
