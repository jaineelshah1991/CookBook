

document.addEventListener("DOMContentLoaded", function(event) 
{
   
const showNavbar = (toggleId, navId, bodyId, headerId) =>
{
const toggle = document.getElementById(toggleId),
nav = document.getElementById(navId),
bodypd = document.getElementById(bodyId),
headerpd = document.getElementById(headerId)

//  var urlParams = new URLSearchParams(window.location.search);
//	     var recipeId = urlParams.get('recipe_id');
//showcomments(recipeId);

// Validate that all variables exist
if(toggle && nav && bodypd && headerpd)
	{
		toggle.addEventListener('click', ()=>
			{
				// show navbar
				nav.classList.toggle('show')
				// change icon
				toggle.classList.toggle('bx-x')
				// add padding to body
				bodypd.classList.toggle('body-pd')
				// add padding to header
				headerpd.classList.toggle('body-pd')
			})
	}
}

	showNavbar('header-toggle','nav-bar','body-pd','header')

	/*===== LINK ACTIVE =====*/
	const linkColor = document.querySelectorAll('.nav_link')

	function colorLink()
	{
		if(linkColor)
		{
		linkColor.forEach(l=> l.classList.remove('active'))
		this.classList.add('active')
		}
	}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

 // Your code to run since DOM is loaded and ready

});

$(document).ready(function() {
  // Code goes here
  var currentPage = 1;

  // Get the recipe ID from the URL
  var urlParams = new URLSearchParams(window.location.search);
  var recipeId = urlParams.get('recipe_id');
  alert('Recipe ID first time: ' + recipeId);

getSessionValues(function(sessionValues) {
  var user_id = sessionValues.user_id;
  var subscription_type = sessionValues.subscription_type;
  var user_type = sessionValues.user_type;

  console.log(user_id); // prints the user ID
  console.log(subscription_type); // prints the subscription type
  console.log(user_type); // prints the user type
  alert ("S1" + user_id);
  alert ("S2" + subscription_type);
    alert ("S3" + user_type);

 if (user_id && subscription_type && user_type) {

    generateRecipe(recipeId);

 	var commentsContainer = document.getElementById('comments-container');
	commentsContainer.classList.remove('hidden');



    sethiddenvalue(recipeId);
  } else {
    // ask the user to login or register
     alert('Please login to access this content');
  	//	window.location.href = 'login.html'; // redirect to login page
  }



  // use the variables to populate HTML elements or make other decisions
});



 /*if (getCookie('user_type') && getCookie('subscription_type') && getCookie('user_id'))
 {
				
}				

else
{
	// 
	}  */

  
 
});

function getCookie(name) {
  var cookies = document.cookie.split(";"); // split cookies into an array
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim(); // remove any whitespace
    if (cookie.startsWith(name + "=")) {
      return decodeURIComponent(cookie.substring(name.length + 1)); // return cookie value
    }
  }
  return null; // cookie not found
}


function getSessionValues(callback) {
 
   	alert("Session call ");


  $.ajax({
  url: 'getsessionvalues.php',
  type: 'POST',
  success: function(data) {
    var sessionValues = JSON.parse(data);

    		alert("Session call Sucess 1 ");

     if (sessionValues.hasOwnProperty('error')) {
     		alert("Please login");
        console.log(sessionValues.error);
      } else {
      	    		alert("Session call Sucess 2 ");

      	      callback(sessionValues);
      }

  },
  error: function(xhr, textStatus, error) {
  	alert("Session call Faild");
    console.log(xhr.statusText);
    console.log(textStatus);
    console.log(error);
  }
});

}

 function generateRecipe(recipeId) 
{	//  f 1
		
		     alert('Recipe ID first function: ' + recipeId);

		     $.getJSON("generatereceipe.php", { recipe_id: recipeId }, function(data) {
						    // Split the two arrays into separate variables
									   var firstArray = data[0];
						    var secondArray = data.slice(1);

						    // Use the arrays as needed
						    console.log(firstArray);
						    console.log(secondArray);


							    	// get the HTML elements
							const recipeNameEl = document.getElementById('recipeName');
							const recipeDescEl = document.getElementById('recipeDesc');
							const recipeAuthorEl = document.getElementById('recipeAuthor');
							const recipeIngredientsEl = document.getElementById('recipeIngredients');
							const recipeInstructionsEl = document.getElementById('recipeInstructions');
							const imageContainerEl = document.getElementById('imageContainer');
				  		const recipeVideosearchdiv = document.querySelector("[name=recipe-search]");


						// update the contents of the HTML elements with data from the firstArray object
						recipeNameEl.textContent = `Receipe Name: ${firstArray.Receipe_Name}`;

					recipeAuthorEl.textContent = `Author: ${firstArray.Author}`;


						const recipeDescParagraph = document.createElement('p');
							recipeDescParagraph.textContent = `Receipe Description: ${firstArray.Receipe_Dec}`;
							
					//	 append the new paragraph element to the recipe details container
					recipeDetails.appendChild(recipeDescParagraph);

						recipeDescEl.textContent = `Receipe Description : ${firstArray.Receipe_Dec}`;

						// create a new paragraph element for the ingredients
						const recipeIngredientsParagraph = document.createElement('p');
					recipeIngredientsParagraph.textContent = 'Ingridents Details :- ';
						recipeIngredientsEl.appendChild(recipeIngredientsParagraph);

						// loop through the secondArray and create a new paragraph element for each ingredient
						secondArray.forEach(ingredient => {
  						const recipeIngredient = document.createElement('p');
  						recipeIngredient.textContent = `${ingredient.Ingridients_Name}`;
  						recipeIngredientsEl.appendChild(recipeIngredient);
								});

								// Instrutions
			 		recipeInstructionsEl.textContent = `Instructions: ${firstArray.Receipe_Ins}`;



						// create a new image element and set its source to the imagepath value from the firstArray object
						const recipeImageEl = document.createElement('img');
						recipeImageEl.src = firstArray.imagepath;

						// append the image element to the image container element
						imageContainerEl.appendChild(recipeImageEl);



			    		 var recipeTable = $('#recipeabc');
								var recipeInstructionDiv = document.getElementsByName("receipeinstruction");

			        	for (var i = 0; i < firstArray.length; i++) {
  										var recipe = firstArray[i];
			        
			        	  console.log(recipe.Receipe_Name);
        					console.log(recipe.Receipe_Id);
        					console.log(recipe.Author);
        					console.log(recipe.Status);
        					console.log(recipe.User_id);
        					console.log(recipe.CreatedDate);
        					console.log(recipe.Createdby);
        					console.log(recipe.imagepath);
        					console.log(recipe.Cusine);
        					console.log(recipe.Preptime);
        					console.log(recipe.videourl);

							var rp =recipe.Receipe_Id;
        						concole.log("RP");
        						concole.log(rp);
        							sethiddenvalue(rp);

        					// create the table row for the recipe
		        	  var recipeRow = $('<tr>');


	          // c1 
		      		// create the first column for the recipe (image)
		   			 var recipeImageColumn = $('<td>').addClass('recipe-image-column');
		   			 recipeImageColumn.append('<img id="dish-page-image" class="object-cover h-full md:h-full w-full" src="' + recipe.imagepath + '" />');
		   			 recipeRow.append(recipeImageColumn);
		          	recipeTable.append(recipeRow);


		   			 	// set the receipe Name  in the div
	//	recipeInstructionDiv.innerHTML += '<h2 style="color: blue; font-size: 24px;">Receipe Name:</h2><p style="font-size: 18px; color: black;">' + recipe.Receipe_Name + '</p>';

		// set the Course Catagory  in the div
		recipeInstructionDiv.innerHTML += '<h2 style="color: blue; font-size: 24px;">Course Catagory:</h2><p style="font-size: 18px; color: black;">' + recipe.Course_Cata + '</p>';


		// set the Cusine  in the div
		recipeInstructionDiv.innerHTML += '<h2 style="color: blue; font-size: 24px;">Cusine:</h2><p style="font-size: 18px; color: black;">' + recipe.Cusine + '</p>';

		// set the recipe Cooking time in the div
	//	recipeInstructionDiv.innerHTML += '<h2 style="color: blue; font-size: 24px;">Cooking Time:</h2><p style="font-size: 18px; color: black;">' + data[i].Cooktime + '</p>';

		// set the recipe Author in the div
		recipeInstructionDiv.innerHTML += '<h2 style="color: blue; font-size: 24px;">Author:</h2><p style="font-size: 18px; color: black;">' + recipe.Author + '</p>';


			// split recipe instructions into an array of lines
		//var instructions = data[i].Receipe_Ins.split('\n');
		var instructions = recipe.Receipe_Ins.split('\n');

		// add bullet points to each line of instructions
		var formattedInstructions = '';
			for (var j = 0; j < instructions.length; j++)
			 {
				  if (instructions[j] !== '') 
				  {
				    formattedInstructions += '<li>' + instructions[j] + '</li>';
				  }
			}

		// set the formatted instructions in an unordered list
		recipeInstructionDiv.innerHTML += '<h2 style="color: blue; font-size: 24px;">Receipe Instruction:</h2><ul style="font-size: 18px; color: black;">' + formattedInstructions + '</ul>';

			// Set up the YouTube URL

		const videoId = recipe.videourl.match(/(?<=v=|\/)([a-zA-Z0-9_-]{11})/)[1];
		const embedUrl = `https://www.youtube.com/embed/${videoId}`;

		alert("Hi");
		var youtubeUrl = embedUrl;
		console.Log("URL");
				console.Log(youtubeUrl);

		// Get the recipe video div
		const recipeVideoDiv = document.querySelector("[name=recipe-video]");

		// Create an iframe element
		var iframeElement = document.createElement("iframe");
		iframeElement.width = "560";
		iframeElement.height = "315";
		iframeElement.setAttribute("frameborder", "0");
		iframeElement.setAttribute("allow", "autoplay; encrypted-media");
		iframeElement.setAttribute("allowfullscreen", "");

		// Set the src attribute of the iframe element to the YouTube URL
		iframeElement.setAttribute("src", youtubeUrl);

		// Append the iframe element to the recipe video div
		recipeVideoDiv.appendChild(iframeElement);

      ///
      	// set up  you tube url

 		 var irrecipeName =  recipe.Receipe_Name ;

		// encode the recipe name for use in the YouTube search query
		var encodedRecipeName = encodeURIComponent(irrecipeName);


		// create the YouTube URL with the encoded recipe name as the search term
		var youtubeUrl = 'https://www.youtube.com/results?search_query=' + encodedRecipeName;

		// create a div for the YouTube link

		recipeVideosearchdiv.innerHTML += '<h2 style="color: blue; font-size: 24px;">YouTube Link:</h2><span style="font-size: 18px;color: black;"><a href="' + youtubeUrl + '" target="_blank">' + recipe.Receipe_Name + ' on YouTube</a></span>';




      ///

				}		 // array one loop

	       

				

 }); // end json 

		

} // end f1



 function sethiddenvalue(recipeId)
 {		
 	alert("Function 2" + recipeId);
        document.getElementById("hf1").value = recipeId;
         //showcomments(recipeId);
         loadComments(recipeId,1);
        // loadComments(recipeId);

 }



 
		 function loadComments (recipeId, page) 
	{

 alert("Load comments called");

		var commentsPerPage = 10;
		var startIndex = (page - 1) * commentsPerPage;
		var comment_list = document.getElementById("comment-list");

  		var xhr = new XMLHttpRequest();
  		xhr.open("GET", "viewcomments.php?recipe_id=" + recipeId);

		  	xhr.onreadystatechange = function() 
		  	{
			    	if (xhr.readyState == 4 && xhr.status == 200) {
			        try {
			            var comments = JSON.parse(xhr.responseText);
			            for (var i = 0; i < comments.length; i++) 
			            {
			                var comment = comments[i];
			                var li = document.createElement("li");
			                var span = document.createElement("span");
			                span.style.width = "600px";
											span.textContent = comment.FirstName + ":";
											li.appendChild(span);

											li.innerHTML += "<br>" + comment.Comments;

									//		li.innerHTML = '<span style="width: 100px;">' + comment.FirstName + ':</span><br>' + comment.Comments;
			                comment_list.appendChild(li);
			            }
			        } catch (e) {
			            console.error("Error parsing JSON response:", e);
			        }
			    } else if (xhr.readyState == 4) {
			        console.error("Error loading comments. Status:", xhr.status);
			    }
			};


  xhr.send();
}


/*
function replyComment(event) {
  var timestamp = event.target.getAttribute("data-timestamp");
  var li = event.target.closest("li");
  
  // Check if a reply form already exists for this comment
  var existingReplyForm = li.querySelector('.reply-form');
  if (existingReplyForm) {
    existingReplyForm.querySelector('#reply-comment').focus();
    return;
  }
  
  
}
*/

/*  -------------------------------------------------------------------------------  */

// function for like button  

$(function() 

{
    // Set initial like count to 0
    var likeCount = 0;

    // Initialize variable to track whether user has liked the recipe
    var hasLiked = false;

    // Add event listener for like button
    $('.like-button').click(function() {
        // Check if user has already liked the recipe
        if (!hasLiked) {
            likeCount++;
            $('.like-count').text(likeCount + ' likes');

            // add your insert code  for like  

            hasLiked = true; // Set variable to true to indicate user has liked the recipe
        }
    });

    // Add event listener for dislike button
    $('.dislike-button').click(function() {
        likeCount--;
        $('.like-count').text(likeCount + ' likes');
        hasLiked = false; // Set variable to false to indicate user has unliked the recipe
    });

    
});

