<?php

include "dbconfig.php";

 $con=mysqli_connect($server,$login,$password,$dbname)
                 or die("<br>Cannot connect to DB\n");


if($_SERVER["REQUEST_METHOD"] == "POST")

{

       $username =$_POST['email'];
       $birthday = $_POST['bdate'];
       $squestion = $_POST['question'];
       $ans = $_POST['answer'];
       $pass = $_POST['password'];

      echo "Fetched data from last page ".$username;  echo "<br>";
       echo "Fetched data from last page :".$birthday; echo "<br>";
        echo "Fetched data from last page :".$squestion ; echo "<br>";
         echo "Fetched data from last page +".$ans; echo "<br>";
          echo "Fetched data from last page +".$pass; echo "<br>";
     $password_verify = hash('sha256', $pass);
      echo "<br>";

     echo " " .$password_verify;

       echo "<br>";

            $username=strtolower($username);

        

            $sql_query_verify_email="SELECT * from User_Credentail where  Username='$username' ";
            $result_set_email_verify=mysqli_query($con,$sql_query_verify_email);

         

            if(mysqli_num_rows($result_set_email_verify) > 0)
            {
                    // first check email is matched if yes fetch id 
                $row=mysqli_fetch_array($result_set_email_verify);
                //checking login

           		$uid = $row['User_Id'];
           		echo "Fetched From table User Id".$uid;
           		if ($uid != null)
           		{
           			// once id fetch verify the questions and answer

           			$sql_verify_qu_answer = "select SecurityQuestion,Answer from User_Info where User_Id=$uid";
           			$result_set_qu_answer_verify=mysqli_query($con,$sql_verify_qu_answer);

           			if(mysqli_num_rows($result_set_qu_answer_verify) > 0)
			            {
			                    //if $res > 0
			                $row1=mysqli_fetch_array($result_set_qu_answer_verify);
			               

			                $q1 = str_replace("", '', $row1['SecurityQuestion']);
			                $a1 = str_replace("", '', $row1['Answer']);


			                echo "SQ".$q1;
			                       echo "<br>";

			                echo "SQA".$a1;
			                       echo "<br>";

			                // now check if the both match with user entered question and answer ot not 

			                if ($q1 == $squestion)
			                {
			                  if ($a1 == $ans)
			                  {
			                  		// allow password to reset 

			                	$sql_update_query = "Update User_Credentail set Password = '$password_verify'
			                	 where User_Id='$uid' ";

			                	  echo "Update".$sql_update_query;
			                       echo "<br>";

							 	if(mysqli_query($con,$sql_update_query) == true)
									{
									    
									    echo "Password changed";
									      echo '<script>alert("Password updated successful!");</script>';
									}

			                  }
			                }

			                
			                else
			                {
			                	echo "Given Data did not matched so Password can not be updated please retry";
			                }
			           	}


				}
				else
				{
					"No user id Dound";
				}
		}
		else
		{
			Echo "Password not  updated";
		}
}
            

?>


