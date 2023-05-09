<?php
    include "dbconfig.php";

    $con=mysqli_connect($server,$login,$password,$dbname) or die("<br>Cannot connect to DB\n");

    if(isset($_COOKIE['user_id']))
    {

                    $user_id = $_COOKIE['user_id'];
            $Prefernce_cata ="";

         $sql_Query1 = "SELECT * from user_preferences where User_Id = $user_id";
         $result = mysqli_query($con, $sql_Query1);

                        if(mysqli_num_rows($result) > 0)
                        {

                           // $recipepref  = array();
                            while ($row = mysqli_fetch_array($result)) 
                                {     
                                    $Prefernce_cata = $row['Prefernce_cata'];
                               //     $preference_cusine = $row['Preference_Cusine'];

                                    // Split the preference strings using ',' as the separator
                                    $array1 = explode(',', $Prefernce_cata);
                             //       $array2 = explode(',', $preference_cusine);

                                    // Print the contents of the arrays
                                 //   echo '<pre>';
                                  //  print_r($array1);
                                 //   print_r($array2);
                                 //   echo '</pre>';

                                        foreach ($array1 as $element1) 
                                        {
                                           // echo "First".$element1;

                                           $query ="select Receipe_Id ,Receipe_Name ,Author ,ReceipeDesc ,Instructions ,Course_Cata ,Cusine, Preptime from Receipe WHERE Status ='Active' and Course_Cata = '$element1'";
                                            $result = mysqli_query($con, $query);

                                            // Check if any recipes were found
                                            if (mysqli_num_rows($result) > 0)
                                            {   
                                                while ($row1 = mysqli_fetch_array($result)) 
                                                {     
                                                    $matched_ids_info[] = array(
                                                        "Receipe_Id" => $row1['Receipe_Id'],
                                                        "Receipe_Name" => $row1['Receipe_Name'],
                                                        "Author" => $row1['Author'],
                                                        "ReceipeDesc" => $row1['ReceipeDesc'],
                                                        "Course_Cata" => $row1['Course_Cata'],
                                                        "Cusine" => $row1['Cusine'],
                                                        "Preptime" => $row1['Preptime']           
                                                        
                                                      );
                                                }
                                            }

                                        }


                                }

                           

     
                        }
                        else
                        {
                            $matched_ids_info[] =null;
                        }

                         $json = json_encode($matched_ids_info);
                            echo $json;
    }
    else
    {
      //  echo "Login";
    }


						
    mysqli_close($con);
?>
