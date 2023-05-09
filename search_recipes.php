<?php
    include "dbconfig.php";

    $con=mysqli_connect($server,$login,$password,$dbname) or die("<br>Cannot connect to DB\n");

  
                $searchTerm = $_GET['searchTerm'];
         		//echo "Search Term".$searchTerm;
                    
      /* $sql_search_query1 = "SELECT r.Receipe_Name, r.Receipe_Id ,r.Author, r.ReceipeDesc, r.Course_Cata, r.Cusine, i.imagepath ,i.newfilename,i.videourl
FROM Receipe r  JOIN Rep_Image_Info i ON r.Receipe_Id = i.Receipe_Id WHERE r.Receipe_Name  like ('%$searchTerm%')";*/

			
		$sql_search_query1 = "	SELECT r.Receipe_Name, r.Receipe_Id, r.Author, r.ReceipeDesc, r.Status,r.Course_Cata, r.Cusine, i.imagepath, i.newfilename, i.videourl, IFNULL(COUNT(l.receipe_like_id), 0) AS like_count
FROM Receipe r JOIN Rep_Image_Info i ON r.Receipe_Id = i.Receipe_Id LEFT JOIN receipe_like l ON r.Receipe_Id = l.Receipe_Id AND l.like_status = 'like'  WHERE r.Receipe_Name LIKE ('%$searchTerm%') and  r.Status= 'Active'
GROUP BY r.Receipe_Id, r.Receipe_Name, r.Author, r.ReceipeDesc, r.Course_Cata, r.Cusine, i.imagepath, i.newfilename, i.videourl";


                        $result = mysqli_query($con, $sql_search_query1);

                        if(mysqli_num_rows($result) > 0)
                        {  
                        	$recipeserch = array();
                        while ($row = mysqli_fetch_array($result)) 
                        {     
                            $recipe = array(
                                "Receipe_Id" => $row['Receipe_Id'],            
                                "Receipe_Name" => $row['Receipe_Name'],
                                "Author" => $row['Author'],
                                "ReceipeDesc" => $row['ReceipeDesc'],
                                "Course_Cata" => $row['Course_Cata'],
                                 "Cusine" => $row['Cusine'],
                                "imagepath" => $row['imagepath'],
                                 "newfilename" => $row['newfilename'],
                                 "like_count" => $row['like_count'],
                                "videourl" => $row['videourl']
                            );
                            array_push($recipeserch, $recipe);
                        }
                      
                         $json = json_encode(array("Status" => "Yes" ,"data" => $recipeserch));
                          echo $json;

                    }   
                    else
                    {               
                            $errorMessage = "No Receipe Found for ". " ". $searchTerm;
                            
                          //  $recipepending = array("error" => $errorMessage);
                            $recipeserch = array("Status" => "No" ,"data" => $errorMessage);

                            echo json_encode($recipeserch);
                            
                           // echo '<script>alert("Please login "); window.location.href = "login.html";</script>';
                    }



    mysqli_close($con);
?>
