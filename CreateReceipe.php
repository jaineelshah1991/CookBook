<html>

<?php
if (isset($_GET['error_msg'])) {
  $error_msg = $_GET['error_msg'];
  echo "<script>alert('" . $error_msg . "');window.location.href='CreateReceipe.php';</script>";
}
?>
<!doctype html>




<head>
  <!-- ... -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.min.css" />
  <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>

    <link rel="stylesheet" type="text/css" href="style.css">

     <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css' rel='stylesheet'>
    <link href='https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css' rel='stylesheet'>
                               
                                <style>::-webkit-scrollbar {
                                  width: 8px;
                                }
                                /* Track */
                                ::-webkit-scrollbar-track {
                                  background: #f1f1f1; 
                                }
                                 
                                /* Handle */
                                ::-webkit-scrollbar-thumb {
                                  background: #888; 
                                }
                                
                                /* Handle on hover */
                                ::-webkit-scrollbar-thumb:hover {
                                  background: #555; 
                                } @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap");:root{--header-height: 3rem;--nav-width: 68px;--first-color: #4723D9;--first-color-light: #AFA5D9;--white-color: #F7F6FB;--body-font: 'Nunito', sans-serif;--normal-font-size: 1rem;--z-fixed: 100}*,::before,::after{box-sizing: border-box}body{position: relative;margin: var(--header-height) 0 0 0;padding: 0 1rem;font-family: var(--body-font);font-size: var(--normal-font-size);transition: .5s}a{text-decoration: none}.header{width: 100%;height: var(--header-height);position: fixed;top: 0;left: 0;display: flex;align-items: center;justify-content: space-between;padding: 0 1rem;background-color: var(--white-color);z-index: var(--z-fixed);transition: .5s}.header_toggle{color: var(--first-color);font-size: 1.5rem;cursor: pointer}.header_img{width: 35px;height: 35px;display: flex;justify-content: center;border-radius: 50%;overflow: hidden}.header_img img{width: 40px}.l-navbar{position: fixed;top: 0;left: -30%;width: var(--nav-width);height: 100vh;background-color: var(--first-color);padding: .5rem 1rem 0 0;transition: .5s;z-index: var(--z-fixed)}.nav{height: 100%;display: flex;flex-direction: column;justify-content: space-between;overflow: hidden}.nav_logo, .nav_link{display: grid;grid-template-columns: max-content max-content;align-items: center;column-gap: 1rem;padding: .5rem 0 .5rem 1.5rem}.nav_logo{margin-bottom: 2rem}.nav_logo-icon{font-size: 1.25rem;color: var(--white-color)}.nav_logo-name{color: var(--white-color);font-weight: 700}.nav_link{position: relative;color: var(--first-color-light);margin-bottom: 1.5rem;transition: .3s}.nav_link:hover{color: var(--white-color)}.nav_icon{font-size: 1.25rem}.show{left: 0}.body-pd{padding-left: calc(var(--nav-width) + 1rem)}.active{color: var(--white-color)}.active::before{content: '';position: absolute;left: 0;width: 2px;height: 32px;background-color: var(--white-color)}.height-100{height:100vh}@media screen and (min-width: 768px){body{margin: calc(var(--header-height) + 1rem) 0 0 0;padding-left: calc(var(--nav-width) + 2rem)}.header{height: calc(var(--header-height) + 1rem);padding: 0 2rem 0 calc(var(--nav-width) + 2rem)}.header_img{width: 40px;height: 40px}.header_img img{width: 45px}.l-navbar{left: 0;padding: 1rem 1rem 0 0}.show{width: calc(var(--nav-width) + 156px)}.body-pd{padding-left: calc(var(--nav-width) + 188px)}}</style>
<script type='text/javascript' src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js'></script>
                               
                            <style type="text/css">
    
    .container {
  margin: auto;
  width: 80%;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
}

h1 {
  text-align: center;
  font-size: 36px;
  color: #333;
  margin-bottom: 30px;
}

form {
  max-width: 600px;
  margin

}
  </style> 




					    
		  </head>					
 <body className='snippet-body'>
 <body id="body-pd">



    <!-- Header Navigation Section -->
	
	 <header class="header" id="header">
		
		   
			  
	       
		<div class ="col-sm-11">
		
		<a class="navbar-brand" href="#">Welcome to the Cookbook Network!</a>

		 <a href="index.html" class="py-4 px-2 text-base font-regular primary-color">Home</a>
		 		 <a href="HomePage-Paid.html" class="py-4 px-2 text-base font-regular primary-color">User Home</a>

		 <a href="contact.html" class="py-4 px-2 text-base font-regular primary-color">Contact Us</a>
		 <a id="nav-profile-img" href="profile.html" class="none md:visible">
						
			
						</a>
		</div>
		 
						<!-- Mobile menu button -->
					<div class="md:hidden flex items-center">
						<button class="outline-none mobile-menu-button">
						<svg class=" w-6 h-6 text-gray-500 hover:text-blue-600"
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>

    
	

    </header>

<!--Container Main start-->
		<div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
		       <div class="sub-div1 py-4">
						   <div class="container">
	
				<form name ="receipe"  onsubmit="return validateForm()" action="addreceipe.php" method="POST" enctype="multipart/form-data" 
				>
				

 


				 <div class="col-sm-8 offset-sm-6">
               <h1 class="mb-8 text-2xl text-center font-med text-blue-800">Create Receipe </h1>
              </div>
			             
				<div class="grid md:grid-cols-2 text-m">
			 
								
					<div class="grid md:grid-cols-1">
                                <div class="px-4 py-2 font-medium">
								 <label for="recipe_name">Recipe Name</label>
								</div>
                            
                            </div>
								<div class="grid md:grid-cols-0">
                                     <input 
                    type="text"
                    class="block border border-grey-light w-full p-2 rounded mb-4 font-light"
                    id="Rname"
                    name="iRname" 
                    value="<?php echo isset($_POST['rname']) ? $_POST['rname'] : '' ?>"
                    placeholder=""  />

                   


                                </div>
								
					<div class="grid md:grid-cols-1">
                                <div class="px-4 py-2 font-medium">
					<label for="recipe_author">Recipe Author</label>
								</div>
                            
                            </div>
			<div class="grid md:grid-cols-1">
                                     <input 
                    type="text"
                    class="block border border-grey-light w-full p-2 rounded mb-2 font-light"
                    id="recipe_author"
                    name="nmrecipe_author" 
                    placeholder=""  />
                                </div>
								
				<div class="grid md:grid-cols-1">
                                <div class="px-4 py-2 font-medium">
					 <label for="recipe_description">Recipe Description</label>
								</div>
                            
                            </div>
			<div class="grid md:grid-cols-1 mb-2">
                         				  
					<textarea id="recipe_description" name="nmrecipe_description" rows="5" cols="50">
     </textarea>
  
  
									</div>		
									
			<div class="grid md:grid-cols-1">
                                <div class="px-4 py-2 font-medium">
					  <label for="recipe_instructions">Instructions</label>
								</div>
                            
                            </div>
			<div class="grid md:grid-cols-1 mt-2">
        
								  				  
					<textarea id="recipe_instructions" name="nmrecipe_instructions" rows="5" cols="50" >
   
  </textarea>			
														</div> 
		         				

				<div class="grid md:grid-cols-2">
                                <div class="px-4 py-2 font-medium">
					<label for="recipe_image">Recipe Image</label>
								</div>
                            
                            </div>
			<div class="grid md:grid-cols-1 mt-2"> 
			
			<input type="file" id="fileToUpload" name="fileToUpload" placeholder="upload only JPEG and JPG images ">

			</div>
             
                              	

			<div class= "grid md:grid-cols-1">
                                <div class="px-4 py-2 font-medium">
			<label for="recipe_category">Receipe Course Category</label>
								</div>
                            
                            </div>
			<div class="grid md:grid-cols-1 mt-2">
				<select id="recipe_category" name="nmrecipe_category" required>
					<option value="appetizers">Appetizers</option>
					<option value="entrees">Bread</option>
					<option value="desserts">Main Dish</option>
						<option value="desserts">Salad</option>
							<option value="desserts">Soups</option>
								<option value="desserts">Snacks</option>
				  </select>                             <br/>   </div>
								
					

				<div class="grid md:grid-cols-1">
                                <div class="px-4 py-2 font-medium">
						<label for="recipe_cuisine">Cuisine</label>
								</div>
                            
                            </div>
			<div class="grid md:grid-cols-1">
<select id="recipe_cuisine" name="nmrecipe_cuisine" required>
				<option value="american">Africa & Middle East</option>
				<option value="italian">Asia & Pacific Ocean</option>
				<option value="mexican">Europe</option>
				<option value="chinese">North & South America</option>
				<option value="indian">Other</option>
  </select>									  <br/>
                                </div>



<div class="grid md:grid-cols-1">
                                <div class="px-4 py-2 font-medium">
  <label for="recipe_prep_time">Preparation Time (in minutes)</label>
								</div>
                            
                            </div>
			<div class="grid md:grid-cols-1">
		<input type="text" id="recipe_prep_time"   name="nmrecipe_prep_time" >
									  <br/>
                                </div>	
								
<div class="grid md:grid-cols-1">
                                <div class="px-4 py-2 font-medium">
  <label for="recipe_cook_time">Cook Time (in minutes)</label>
								</div>
                            
                            </div>
			<div class="grid md:grid-cols-1">
  <input type="text" id="recipe_cook_time"  name="nmrecipe_cook_time" >
									  <br/>
                                </div>	
								<div class="grid md:grid-cols-1">
                                <div class="px-4 py-2 font-medium">
  <label for="recipe_serving_size">Serving Size</label>
								</div>
                            
                            </div>
			<div class="grid md:grid-cols-1 mt-1" >
  <input type="text" id="recipe_serving_size"  name="nmrecipe_serving_size" >
									  <br/>
                                </div>	
								

</div>
								
        </div>	
		
		
							
								
			 </div>
			
			<!--	 </form>
			-->
			
        <!-- content of sub-div1 -->
		
			
		 <div class="mt-4 sub-div2 py-4">
		
			<!-- content of sub-div2 -->
			
			<div class="container"> 
				
 <div class="col-sm-8 offset-sm-2">
               <h1 class="mb-7 text-l text-center font-med text-blue-800">Add Ingredients </h1>
              </div>
			  
			<h1></h1>
      
<table id="ingredients-table">
  <thead>
    <tr>
	<th>No</th>
      <th>Ingredient</th>
      <th>Quantity</th>
      <th>Measure</th>
    </tr>
  </thead>
  <tbody id="ingredients">
    <tr class="ingredient">
	<td><label for="id0" value="1">1</label>      
       </td>
      <td>
        
        <input type="text" id="ingredient0" name="ingredients[0]" placeholder="Enter ingredient">
      </td>
      <td>
        
        <input type="text" id="quantity0" name="quantities[0]" placeholder="Enter quantity">
      </td>
      <td>
        <select id="measure0" name="measure[0]" required>
          <option value="LBS">LBS</option>
          <option value="TBSP">TBSP</option>
          <option value="TSP">TSP</option>
          <option value="CUP">CUP</option>
          <option value="Ounce">Ounce</option>
          <option value="None">None</option>
        </select>  
      </td>
    </tr>
  </tbody>
</table>
<table>
	<tr>
		<td><button type="button" id="add-ingredient" style="color: blue;">Add Ingredient</button></td> 
		<td></td>
		<td><button type="button" id="remove-ingredient" style="color: blue;">Remove Ingredient</button></td>
	</tr>
</table>
		
		<div class="col-sm-5 offset-sm-3">
    
    <!-- all input fields go here -->
    
    <div>
<button
                    type="submit"   id="myButton2" 
                    class="w-full text-center py-3 rounded bg-blue-600 text-white hover:bg-blue-700 focus:outline-none my-1 font-regular" 
                >Add Ingredients </button>    </div>
</div>

 
      </div>
<input type="hidden" id="total-rows" name="totalRows" value="1">

    </form>

<style type="text/css">
  #ingredients-table {
    border-collapse: collapse;
    margin-top: 20px;
    margin-right: 10px;
    margin-left: 10px;
    padding-right: 10px;
  }

  #ingredients-table th,
  #ingredients-table td {
    padding: 15px;
    border: none;
    text-align: left;
  }

  #ingredients-table th:first-child,
  #ingredients-table td:first-child {
    width: 10%;
  }
  
   #ingredients-table th:secon-child,
  #ingredients-table td:secon-child {
    width: 50%;
  }
</style>
	<script type="text/javascript">
 function addIngredientRow() {
  // Get the table body and the number of existing rows
  const tableBody = document.getElementById("ingredients");
  const rowCount = tableBody.getElementsByTagName("tr").length;

  // Create a new table row
  const newRow = document.createElement("tr");
  newRow.classList.add("ingredient");

  // Add the row number field
  const rowNumberCell = document.createElement("td");
  rowNumberCell.textContent = rowCount + 1;
  newRow.appendChild(rowNumberCell);

  // Add the ingredient name field
  const ingredientCell = document.createElement("td");
  const ingredientInput = document.createElement("input");
  ingredientInput.type = "text";
  ingredientInput.id = "ingredient" + rowCount;
  ingredientInput.name = "ingredients[" + rowCount + "]";
  ingredientInput.placeholder = "Enter ingredient";

  // Add validation to the ingredient field
  ingredientInput.addEventListener("blur", () => {
    const value = ingredientInput.value.trim();
    if (!value.match(/^[a-zA-Z]+$/)) {
      ingredientInput.classList.add("invalid");
    } else {
      ingredientInput.classList.remove("invalid");
    }
  });

  ingredientCell.appendChild(ingredientInput);
  newRow.appendChild(ingredientCell);

  // Add the quantity field
  const quantityCell = document.createElement("td");
  const quantityInput = document.createElement("input");
  quantityInput.type = "text";
  quantityInput.id = "quantity" + rowCount;
  quantityInput.name = "quantities[" + rowCount + "]";
  quantityInput.placeholder = "Enter quantity";

  // Add validation to the quantity field
  quantityInput.addEventListener("blur", () => {
    const value = quantityInput.value.trim();
    if (!value.match(/^[0-9\/]+$/)) {
      quantityInput.classList.add("invalid");
    } else {
      quantityInput.classList.remove("invalid");
    }
  });

  quantityCell.appendChild(quantityInput);
  newRow.appendChild(quantityCell);

  // Add the measure dropdown box
  const measureCell = document.createElement("td");
  const measureSelect = document.createElement("select");
  measureSelect.id = "measure" + rowCount;
  measureSelect.name = "measure[" + rowCount + "]";
  measureSelect.required = true;

  const options = [
    {value: "LBS", label: "LBS"},
    {value: "TBSP", label: "TBSP"},
    {value: "TSP", label: "TSP"},
    {value: "CUP", label: "CUP"},
    {value: "Ounce", label: "Ounce"},
    {value: "None", label: "None"},
  ];

  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.textContent = option.label;
    measureSelect.appendChild(optionElement);
  });

  measureCell.appendChild(measureSelect);
  newRow.appendChild(measureCell);

  // Add the new row to the table body
  tableBody.appendChild(newRow);

  // Update the value of the hidden input field
  const totalRowsInput = document.getElementById("total-rows");
  totalRowsInput.value = rowCount + 1;
}

const addIngredientButton = document.getElementById("add-ingredient");
addIngredientButton.addEventListener("click", addIngredientRow);




const removeIngredientButton = document.getElementById("remove-ingredient");
removeIngredientButton.addEventListener("click", () => {
  const tableBody = document.getElementById("ingredients");
  const rowCount = tableBody.getElementsByTagName("tr").length;
  if (rowCount > 1) {
    tableBody.removeChild(tableBody.lastChild);
  }
});
</script>	

	 
				</div>
		 </div>
		
		</div> 
   
	 </div>
		 </div>
    <!--Container Main end-->
	

    <!-- Foooter -->
   
<section class="bg-blue-600 mt-52">
    <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <div class="flex justify-center mt-8 space-x-6">
            <a href=" "class="text-gray-50 hover:text-white">
                <span class="sr-only">Facebook</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                </svg>
            </a>
            <a href="" class="text-gray-50 hover:text-white">
                <span class="sr-only">Twitter</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
            </a>
            <a href="" class="text-gray-50 hover:text-white">
                <span class="sr-only">GitHub</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                </svg>
            </a>
           
        </div>
        <p class="mt-8 text-base leading-6 text-center text-gray-50">
           
        </p>
    
</section>

    <script type="text/javascript" src="../scripts/loginHandler.js" ></script>
    <script type="text/javascript" src="../scripts/otherProfileHandler.js"></script>
    <!-- <script type="text/javascript" src="../scripts/profileHandler.js"></script> -->

</body>


</html>



