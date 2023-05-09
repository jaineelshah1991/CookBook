<?php

include "dbconfig.php";

 $con=mysqli_connect($server,$login,$password,$dbname)
                 or die("<br>Cannot connect to DB\n");

$a =$b=$user_id=$subscription_type=$user_type ="";
 

if($_SERVER["REQUEST_METHOD"] == "POST")

{

              #to prevent SQL injection the strings are being parsed

       $username = mysqli_real_escape_string($con, $_POST['email']);
       $password = mysqli_real_escape_string($con, $_POST['password']);

        $password_verify = hash('sha256', $password);
        $username=strtolower($username);


         
        //fetching records
            //mysql_query() is used to perform queries it will return result set

        if ($username != null and $password != null)
        {
                $sql_query="SELECT * from User_Credentail where  Username='$username'";
                $result_set=mysqli_query($con,$sql_query);

                if(mysqli_num_rows($result_set) > 0)
                {

                         $row=mysqli_fetch_array($result_set);
                          if($row['Password']!=$password_verify)
                          {
                                 echo '<script>alert("User exists, but password not matches!"); window.location.href = "login.html";</script>';
                          }
                          else
                          {

                              echo '<script>alert("Login successful!");</script>';
                            $user_id=$row['User_Id'];
                            $sql_redirect_query = "select distinct User_Type,Subscription_Type,User_Id from User_Access_Rights where User_Id=$user_id";

                                  //  echo $sql_redirect_query;
                             $result_set_redirect =mysqli_query($con,$sql_redirect_query);

                             if(mysqli_num_rows($result_set_redirect)>0)
                                     {
                                         $row=mysqli_fetch_array($result_set_redirect);

                                          session_start();
                                          $type = $row['Subscription_Type'];
                                         $type1 =$row['User_Id'];
                                         $type2 =$row['User_Type'];
                                              
                                         setcookie("user_id",$type1,time()+1800);
                                         setcookie("subscription_type",$type,time()+1800);
                                         setcookie("user_type",$type2,time()+1800);

                                       //  echo "Cookie User ID".$_COOKIE["user_id"];
                                       //  echo "Cookie Sub Type  ID".$_COOKIE["subscription_type"];
                                       //  echo "Cookie User Type".$_COOKIE["user_type"];

                                        $_SESSION['user_id'] = $type1;
                                        $_SESSION['subscription_type'] = $type;
                                        $_SESSION['user_type'] =$type2;

                                        // Set session expiration time to 1800 seconds
                                        $_SESSION['expire_time'] = time() + 1800;
                                         
                                                        if($row['Subscription_Type'] == "Paid")
                                                        {
                                                             header('Location: HomePage-Paid.html');
                                                        }
                                                        elseif ($row['Subscription_Type'] == "Unpaid")
                                                        {
                                                               header('Location: HomePage-Unpaid.html');  
                                                        }
                                                        elseif ($row['User_Type'] == "Admin")
                                                        {
                                                            header('Location: HomePage-Admin.html');
                                                        }
                                               
                                     }
                                     else
                                     {
                                        echo "No details found";
                                     }

                          }


                }
                else
                {
                    
                      echo '<script>alert("Login Not Exists please sign up!"); window.location.href = "Sign-up.html";</script>';
                }

        }
        else
        {
            echo "Username or password is empty";
        }

}
  

    


?>


