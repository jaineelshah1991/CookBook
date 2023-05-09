<?php 
		
 include "dbconfig.php";

$con=mysqli_connect($server,$login,$password,$dbname) or die("<br>Cannot connect to DB\n");

if ((isset($_COOKIE['user_id'])) && isset($_COOKIE['subscription_type'])) 
{
	if ($_COOKIE['subscription_type'] == "Paid")
		{

			if ($_SERVER['REQUEST_METHOD'] === 'POST') 
			 {
			 				$quantities = array(); // create an empty array to store quantities

							foreach ($_POST['quantity'] as $quantity) {
	  								array_push($quantities, $quantity); // add quantity to the array
											}

							$ingridents = array(); // create an empty array to store quantities

							foreach ($_POST['ingredient'] as $ingredient) {
	  								array_push($ingridents, $ingredient); // add quantity to the array
											}

							$measures = array(); // create an empty array to store quantities

							foreach ($_POST['measure'] as $measure) {
	  								array_push($measures, $measure); // add quantity to the array
											}

							$ReceipeId = $_POST['hf1'];

							    echo "Quantities: <br>";
								print_r($quantities);
								echo "<br><br>";

								echo "Ingredients: <br>";
								print_r($ingridents);
								echo "<br><br>";

								echo "Measures: <br>";
								print_r($measures);
								echo "<br><br>";

								echo "Receipe ID".$ReceipeId;

								for ($i = 0; $i < count($ingridents); $i++) 
								{
										$ingredient = $ingridents[$i];
										$quantity = $quantities[$i];
										$measure = $measures[$i];

										echo "ING".$ingredient;
										echo "</br>";

										echo "QTY".$quantity;
										echo "</br>";

										echo "Mea".$measure;
										echo "</br>";



										 $query = "SELECT * FROM Ingridients WHERE Ingridients_Name = '$ingredient'";
   										 $result = mysqli_query($con, $query);
   										 echo $query;
   										 	if (mysqli_num_rows($result) == 0)
	   										 	 {
	   										 	 	$user_id = $_COOKIE['user_id'];
	           										date_default_timezone_set('America/New_York');
	    											$datetime1 = date('Y-m-d H:i:s');
		       										  			 		

		      										  // If the ingredient doesn't exist, insert it into the ingredients table and get its id
		      											  $query = "INSERT INTO Ingridients (Ingridients_Id,Ingridients_Name,User_Id,CreatedDate) VALUES (0,'$ingredient',$user_id,'$datetime1')";
		       										 	if(mysqli_query($con, $query))
		       										 	{
		       										 		 $ingredient_id = mysqli_insert_id($con);
			       										 		 echo "</br>";
	       													echo "Ingrident Inserted";
	       													echo "</br>";

	       													echo "New added InG id".$ingredient_id;

	       												 // add into rep-img 
		       									
		       										  			 		
		       												   $insert_Rep_img_new ="insert into Rep_Ingridients (Receipe_Id,Ingridients_Id,Quantity,Measure,User_Id,CreatedDate) values ($ReceipeId,$ingredient_id,$quantity,'$measure',$user_id,'$datetime1')";
		       										  
		       										  			echo "</br>";
		       										  			echo $insert_Rep_img_new;

		       										  			if(mysqli_query($con, $insert_Rep_img_new))
		       												  	 {
		       										 						$last_inserted_id = mysqli_insert_id($con);
		       										 						echo " Record  added in Rep_ING";
																}
																else
																{
																	echo "Insert fail REPING";
																}
		       										 	}
		       										 	else
		       										 	{
		       										 		echo "Insert ing faild";
		       										 		$ingredient_id=0;
		       										 	}

		       										   	


		       										  	

    											 }
    											  else
    											   {
       														 // If the ingredient already exists, get its id
        														$row = mysqli_fetch_assoc($result);
       																 $ingredient_id = $row['Ingridients_Id'];
       																 	echo "</br>";

       																   echo "Ingrident Present";
       															echo "</br>";

		       										  				echo "Presented InG id".$ingredient_id;
																	echo "</br>";

		       										  			$check_Query_Rep_ing ="select * from  Rep_Ingridients where Receipe_Id =$ReceipeId and Ingridients_Id =$ingredient_id";
		       										  				 echo $check_Query_Rep_ing;
		       														 echo "</br>";
							  				 
		       										  			 $result = mysqli_query($con, $check_Query_Rep_ing);

		       										  			 if (mysqli_num_rows($result) == 0)
		       										  			 {
		       										  			 	// insert into rep ing
		       										  			 		$user_id = $_COOKIE['user_id'];
	           														    date_default_timezone_set('America/New_York');
	    														        $datetime1 = date('Y-m-d H:i:s');
		       										  			 		
		       										  			 		$insert_Rep_img ="insert into Rep_Ingridients (Receipe_Id,Ingridients_Id,Quantity,Measure,User_Id,CreatedDate) values ($ReceipeId,$ingredient_id,$quantity,'$measure',$user_id,'$datetime1')";

		       										  			 		echo "</br>";
		       										  			 		echo $insert_Rep_img;

		       										  			 		if(mysqli_query($con, $insert_Rep_img))
		       										  			 		{
		       										 					 $last_inserted_id = mysqli_insert_id($con);
		       										 					 echo "New Record in Rep_ING";
																		}

		       										  			 }
		       										  			 else
		       										  			 {
		       										  			 	// update rep img

		       										  			 	$update_rep_ing = 
		       										  			 	"update Rep_Ingridients set Quantity =$quantity , Measure ='$measure' where Receipe_Id =$ReceipeId and Ingridients_Id =$ingredient_id";

		       										  			 	 if(mysqli_query($con, $update_rep_ing))
		       										  			 	 {
		       										  			 	 	echo "update completed";
		       										  			 	 }


		       										  			 }


    												}
								} // end for 
						
						 echo '<script>alert("Ingridents for Receipe updated successfully!");            	              window.location.href = "ViewAllReceipe.html";</script>';



			 }  // end post 
			 else
			 {
			 	echo "NO Post";
			 }
		}
				
		else
		{
			echo "Unauthorised Access";
		}
}
else
{
	echo "Cookie not set";
}

?>
