<?php

include "dbconfig.php";

  $con=mysqli_connect($server,$login,$password,$dbname)
                 or die("<br>Cannot connect to DB\n");


  

$First_name=$Last_name=$email=$password=$securityquestion=$securityanswer=$birthday=$city=$password_verify=" ";
$zip=$mobile=$User_id =0;
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

          $password_verify = hash('sha256', $password);
          $cardfullname =$_POST['cardfullname'];
          $plan =$_POST['plan'];
          $cardnumber =$_POST['cardnumber'];
          $cvv =$_POST['cvv'];
          $Expdate =$_POST['Expdate'];
          


             // Split the date string into an array using the "/" delimiter
            $date_array = explode("/", $Expdate); 
            // The first element in the array is the "mm" value
            $exp_month = $date_array[0]; 

            // The second element in the array is the "yy" value
            $exp_year = $date_array[1]; 

          echo "Fetch Data for Premimim User :";
          echo "Fname"."$First_name";
          echo "Lname"."$Last_name";
          echo "Email"."$email";
          echo "Pass"."$password";
          echo "encpass"."$password_verify";
          echo "SQ"."$securityquestion";
          echo "SA"."$securityanswer";
          echo "City"."$city";
          echo "zip".$zip;
          echo "contact".$mobile;
          echo "CardName".$cardfullname;
          echo "Plan".$plan;
          echo "Card Number".$cardnumber;
          echo "CVV".$cvv;
          echo "Expdate".$Expdate;
          echo "exp_month".$exp_month;
          echo "exp_year".$exp_year;


           if($First_name != null  &&  $Last_name != null  && $email != null  && $password_verify != null &&
                  $securityquestion!= null && $securityanswer != null  && $city != null  && $zip != null  && $mobile != null && $cardfullname != null
                  && $plan != null  && $cardnumber != null && $cvv != null && $Expdate != null)
           {
                        echo "Hello";
          
                    $checkuserexistquery = "select * from User_Credentail where Username='$email'";
                     $result_set=mysqli_query($con,$checkuserexistquery);
                     $existcount = (mysqli_num_rows($result_set) > 0);

                     if ($existcount >0)
                     {
                             echo '<script>alert("User exists,  please login!"); window.location.href = "login.html";</script>';

                           
                     }
                     else
                     {
                        
                        // do first payement  
                            require_once('../vendor/autoload.php'); // include Stripe PHP library

                       
                            // create Stripe token
                            \Stripe\Stripe::setApiKey('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');
                try
                     {
                      $token = \Stripe\Token::create([
                        'card' => [
                          'number' => $cardnumber,
                          'exp_month' => $exp_month,
                          'exp_year' => $exp_year,
                          'cvc' => $cvv,
                        ],
                      ]);
                    }
                 catch (\Stripe\Exception\CardException $e) 
                 {
                  // show error message if the card is declined or invalid
                  echo 'Payment token no created: ' . $e->getMessage();
                  exit;
                }

                // process payment
            try
             {
              $charge = \Stripe\Charge::create([
                'amount' => 100, // charge $10.00 (in cents)
                'currency' => 'usd',
                'source' => $token['id'],
              ]);

              // show success message if the payment is successful
                echo 'Payment successful!';
                    echo '<script>alert("Payment successful!")</script>';
            } 
            catch (\Stripe\Exception\CardException $e)
             {
              // show error message if the charge is declined or invalid
              echo 'Payment failed: ' . $e->getMessage();
                echo '<script>alert("Payment failed!")</script>';

              exit;
            }
            
                        // insert the user into


             $sql_query="INSERT into User_Info (User_id,FirstName,LastName,City,ZipCode,Mobile,Email,SecurityQuestion,Answer,Status,CreatedDate) 
			 VALUES (0,'$First_name','$Last_name','$city','$zip',$mobile,'$email','$securityquestion','$securityanswer','Active',NOW())";



                    echo $sql_query;
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
                                        echo "Record inserted successfully  in user credentail";  
                                     }
                                     else
                                     {
                                        echo "Fail 1";
                                     }

                                     if(mysqli_query($con,$sql_query_credq))
                                     {
                                        
                                     }
                                     else
                                     {
                                        echo "Fail 2";
                                     }

                                     $sql_query_right = "INSERT into User_Access_Rights (access_id,User_Type,Subscription_Type,rights,Rights_FLAG,User_Id)
                                    values (0,'User','Paid','Create Post','Yes',$User_id),(0,'User','Paid','Create Channel','Yes',$User_id)";

                                     if(mysqli_query($con,$sql_query_right))
                                     {
                                        echo "Record inserted successfully  in Access right";
                                     }
                                     else
                                     {
                                        echo "f2";
                                     }
                                    
                                    sendemail($email);
                                    echo "Sign-up Completed";


                                    echo "<script>localStorage.setItem('last_user_id', '{$User_id}');</script>";

                                    echo '<script> window.location.href = "addchoise.html"; </script>';

                                   // echo '<script>alert("Sign Up completed Please Login!"); window.location.href = "login.html";</script>';


                              }
                              else
                              {
                                echo "No Users";
                              }

                         }
                         else
                         {  

                         echo "Could not insert record: ";  

                         }  

                         mysqli_close($con);

           } 
       }
       else
       {
        echo "Null values";
       }

    }
    else
    {
        echo "Main error";
    }
}

catch (Exception $e1)
            {

            echo 'Message: ' .$e1->getMessage();   
            error_reporting(0);

              header("refresh: 1");
            }

function sendemail($email)
{
    // Set SMTP settings for your Google account
    ini_set("SMTP","smtp.gmail.com");
    ini_set("smtp_port","587");
    ini_set("username","cookbooknetwork2023@gmail.com");
    ini_set("password","Cookbook@2023");

// Define the email content and recipients
    $to = $email;
    $subject = "Registration confirmation";
    $message = "Thank you for registering!";
    $headers = "From: cookbooknetwork2023@gmail.com\r\n" .
               "Reply-To: ".$to."\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Send the email using the mail() function
    if (mail($to, $subject, $message, $headers)) 
    {
      echo "Email sent successfully to " . $to;
    } 
    else
    {
      echo "Email sending failed";
    }
}  
 ?>