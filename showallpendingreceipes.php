<?php
    include "dbconfig.php";

    $con=mysqli_connect($server,$login,$password,$dbname) or die("<br>Cannot connect to DB\n");

    if(isset($_COOKIE['user_type']))
    {
        if ($_COOKIE['user_type'] == "Admin")
        {   

                $status = $_GET['status'];

                if ($status == "pending")
                {

                        $sql_Query1 = "SELECT r.Receipe_Id, u.User_id, r.Receipe_Name, r.Author, r.Status, r.CreatedDate, CONCAT(u.FirstName,' ',u.LastName) as Createdby FROM Receipe r JOIN User_Info u ON u.User_Id = r.User_Id WHERE r.Status='Pending'";
                        $result = mysqli_query($con, $sql_Query1);

                        if(mysqli_num_rows($result) > 0)
                        {  
                            $recipepending = array();
                            while ($row = mysqli_fetch_array($result)) 
                            {     
                                $recipe = array(
                                    "Receipe_Id" => $row['Receipe_Id'],            
                                    "Receipe_Name" => $row['Receipe_Name'],
                                    "Author" => $row['Author'],
                                    "Status" => $row['Status'],
                                    "User_id" => $row['User_id'],
                                    "CreatedDate" => $row['CreatedDate'],
                                    "Createdby" => $row['Createdby']
                                );
                                array_push($recipepending, $recipe);
                            }
                      

                          $json = json_encode(array("status" => "pending", "data" => $recipepending));
                          echo $json;
                     }
                    else
                    {               
                      
                            $errorMessage = "No Pending Receipe found.";
                            $recipepending = array("status" => "pending", "data" => $errorMessage);

                        //    $recipepending = array("error" => $errorMessage);
                            echo json_encode($recipepending);
                            
                        //    echo '<script>alert("Please login "); window.location.href = "login.html";</script>';


                    }   



                }

                else if ($status == "rejected")
                {
                    // need to change query 
                    
                             $sql_Query1 = "SELECT r.Receipe_Id, u.User_id, r.Receipe_Name, r.Author, r.Status, r.CreatedDate, CONCAT(u.FirstName,' ',u.LastName) as Createdby FROM Receipe r JOIN User_Info u ON u.User_Id = r.User_Id WHERE r.Status='rejected'";
                        $result = mysqli_query($con, $sql_Query1);

                        if(mysqli_num_rows($result) > 0)
                        {  
                        $recipepending = array();
                        while ($row = mysqli_fetch_array($result)) 
                        {     
                            $recipe = array(
                                "Receipe_Id" => $row['Receipe_Id'],            
                                "Receipe_Name" => $row['Receipe_Name'],
                                "Author" => $row['Author'],
                                "Status" => $row['Status'],
                                "User_id" => $row['User_id'],
                                "CreatedDate" => $row['CreatedDate'],
                                "Createdby" => $row['Createdby']
                            );
                            array_push($recipepending, $recipe);
                        }
                      
                         $json = json_encode(array("status" => "rejected", "data" => $recipepending));
                          echo $json;

                    }   
                    else
                    {               
                            $errorMessage = "No Rejected Receipe found.";
                            
                          //  $recipepending = array("error" => $errorMessage);
                            $recipepending = array("status" => "rejected", "data" => $errorMessage);

                            echo json_encode($recipepending);
                            
                           // echo '<script>alert("Please login "); window.location.href = "login.html";</script>';
                    }


                         
                }
              else if ($status == "Approved")
                {

                             $sql_Query1 = "SELECT r.Receipe_Id, u.User_id, r.Receipe_Name, r.Author, r.Status, r.CreatedDate, CONCAT(u.FirstName,' ',u.LastName) as Createdby FROM Receipe r JOIN User_Info u ON u.User_Id = r.User_Id WHERE r.Status='Active'";
                        $result = mysqli_query($con, $sql_Query1);

                        if(mysqli_num_rows($result) > 0)
                        {  
                        $recipepending = array();
                        while ($row = mysqli_fetch_array($result)) 
                        {     
                            $recipe = array(
                                "Receipe_Id" => $row['Receipe_Id'],            
                                "Receipe_Name" => $row['Receipe_Name'],
                                "Author" => $row['Author'],
                                "Status" => $row['Status'],
                                "User_id" => $row['User_id'],
                                "CreatedDate" => $row['CreatedDate'],
                                "Createdby" => $row['Createdby']
                            );
                            array_push($recipepending, $recipe);
                        }
                      

                          $json = json_encode(array("status" => "Approved", "data" => $recipepending));
                          echo $json;

                    }
                    else
                    {               
                            $errorMessage = "No Active Receipe found.";
                            
                         //   $recipepending = array("error" => $errorMessage);
                          $recipepending = array("status" => "Approved", "data" => $errorMessage);

                           echo json_encode($recipepending);
                            
                         //   echo '<script>alert("Please login "); window.location.href = "login.html";</script>';
                    }


                }


       
        }
        else
        {               
            echo "Logged in as another user";
           // echo '<script>alert("Please login first as Admin"); window.location.href = "login.html";</script>';
        }
    }
    else
    {
        echo "No isset";
        // echo '<script>alert("Please login "); window.location.href = "login.html";</script>';
    }

    mysqli_close($con);
?>
