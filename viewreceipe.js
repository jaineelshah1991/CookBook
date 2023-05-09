

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
    window.recipeId = recipeId;

  // alert('Recipe ID first time: ' + recipeId);

getSessionValues(function(sessionValues) {
  var user_id = sessionValues.user_id;
  var subscription_type = sessionValues.subscription_type;
  var user_type = sessionValues.user_type;

  console.log(user_id); // prints the user ID
  console.log(subscription_type); // prints the subscription type
  console.log(user_type); // prints the user type
 // alert ("S1" + user_id);
 // alert ("S2" + subscription_type);
  //  alert ("S3" + user_type);

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

    	getallcountforcomments (recipeId);

  	getallcountforlikes (recipeId);

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
 
   //	alert("Session call ");


  $.ajax({
  url: 'getsessionvalues.php',
  type: 'POST',
  success: function(data) {
    var sessionValues = JSON.parse(data);

    	//	alert("Session call Sucess 1 ");

     if (sessionValues.hasOwnProperty('error')) {
     		alert("Please login");
        console.log(sessionValues.error);
      } else {
      	    //		alert("Session call Sucess 2 ");

      	      callback(sessionValues);
      }

  },
  error: function(xhr, textStatus, error) {
  	// alert("Session call Faild");
    console.log(xhr.statusText);
    console.log(textStatus);
    console.log(error);
  }
});

}

 function generateRecipe(recipeId) 
{	//  f 1

							 //    alert('Recipe ID first function: ' + recipeId);
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

				  


				  			// create a new image element and set its source to the imagepath value from the firstArray object
						const recipeImageEl = document.createElement('img');
						recipeImageEl.src = firstArray.imagepath;

						// append the image element to the image container element
						imageContainerEl.appendChild(recipeImageEl);



						// update the contents of the HTML elements with data from the firstArray object

				  		// Receipe Name 
			//			recipeNameEl.textContent = `Receipe Name: ${firstArray.Receipe_Name}`;
					recipeNameEl.innerHTML = `<span style="color: blue; font-size: 24px;">Receipe Name:</span> ${firstArray.Receipe_Name}`;

							// Receipe Author
										recipeAuthorEl.innerHTML = `<span style="color: blue; font-size: 24px;">Receipe Author:</span> -`;
					recipeAuthorEl.innerHTML = `<span style="color: blue; font-size: 24px;">Receipe Author:</span> ${firstArray.Author}`;


							// Rece Description 
						//	recipeDescEl.innerHTML = `<span style="color: blue; font-size: 24px;">Receipe Description:</span> ${firstArray.Receipe_Dec}`;
					recipeDescEl.innerHTML = `<span style="color: blue; font-size: 24px;">Receipe Description:</span> <ul><li>${firstArray.Receipe_Dec.split('\n').join('</li><li>')}</li></ul>`;


/*
								// create a new paragraph element for the ingredients
						const recipeIngredientsParagraph = document.createElement('p');
			//			recipeIngredientsParagraph.textContent = 'Ingridents Details :- ';
						recipeIngredientsParagraph.innerHTML = `<span style="color: blue; font-size: 24px;">Ingridents Details:</span> -`;
						recipeIngredientsEl.appendChild(recipeIngredientsParagraph);

			// Loop through the secondArray and create a new paragraph element for each ingredient


					secondArray.forEach(ingredient => {
					  // Create a new paragraph element
					  const recipeIngredient = document.createElement('p');
					  // Add a bullet point to the beginning of the ingredient name
					  recipeIngredient.innerHTML = `&bull; ${ingredient.Ing_details}`;
					  // Append the paragraph element to a container element called "recipeIngredientsEl"
					  recipeIngredientsEl.appendChild(recipeIngredient);
					});*/

					// Create a new span element for the ingredients
					const recipeIngredientsSpan = document.createElement('span');
					recipeIngredientsSpan.innerHTML = `<br><span style="color: blue; font-size: 24px;">Ingredients:</span>`;

					// Loop through the secondArray and append each ingredient to the recipeIngredientsEl span element
					secondArray.forEach(ingredient => {
					  // Add a bullet point to the beginning of the ingredient name
					  recipeIngredientsSpan.innerHTML += `<br>&bull; ${ingredient.Ing_details}`;
					});

					// Append the recipeIngredientsSpan element to the recipeIngredientsEl container
					recipeIngredientsEl.appendChild(recipeIngredientsSpan);


								// Instrutions
			// 		recipeInstructionsEl.textContent = `Instructions: ${firstArray.Receipe_Ins}`;

						recipeInstructionsEl.innerHTML = `<span style="color: blue; font-size: 24px;">Receipe Instructions:</span> -`;

					// Split the instructions into an array of separate instructions
							const instructionsArray = firstArray.Receipe_Ins.split('\n');
							// Loop through the instructionsArray and create a new paragraph element for each instruction
							instructionsArray.forEach(instruction => {
							  // Create a new paragraph element
							  const recipeInstruction = document.createElement('p');
							  // Add a bullet point to the beginning of the instruction
							  recipeInstruction.innerHTML = `&bull; ${instruction}`;
							  // Append the paragraph element to a container element called "recipeInstructionsEl"
							  recipeInstructionsEl.appendChild(recipeInstruction);
						});


			 			
						// Set up the YouTube URL

							 const recipeVideoDiv = document.querySelector("[name=recipe-search]");


								const videoId = firstArray.videourl.match(/(?<=v=|\/)([a-zA-Z0-9_-]{11})/)[1];
								const embedUrl = `https://www.youtube.com/embed/${videoId}`;

					//			alert("Hi");
								var youtubeUrl = embedUrl;
							
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

						 		 var irrecipeName =  firstArray.Receipe_Name ;

								// encode the recipe name for use in the YouTube search query
								var encodedRecipeName = encodeURIComponent(irrecipeName);


								// create the YouTube URL with the encoded recipe name as the search term
								var youtubeUrl = 'https://www.youtube.com/results?search_query=' + encodedRecipeName;

								// create a div for the YouTube link
							const recipeyoutubesearch = document.querySelector("[name=recipeyoutubesearch]");

								recipeyoutubesearch.innerHTML += '<h2 style="color: blue; font-size: 24px;">YouTube Link:</h2><span style="font-size: 18px;color: black;"><a href="' + youtubeUrl + '" target="_blank">' + firstArray.Receipe_Name + ' on YouTube</a></span>';
								//recipeyoutubesearch.textContent += '<h2 style="color: blue; font-size: 24px;">YouTube Link:</h2><span style="font-size: 18px;color: black;"><a href="' + youtubeUrl + '" target="_blank">' + firstArray.Receipe_Name + ' on YouTube</a></span>';

									 		
});


}

		

 function sethiddenvalue(recipeId)
 {		
 	// alert("Function 2" + recipeId);
        document.getElementById("hf1").value = recipeId;
         //showcomments(recipeId);
         loadComments(recipeId,1);
        // loadComments(recipeId);

 }



 
		 function loadComments (recipeId, page) 
	{

// alert("Load comments called");

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
/*
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

*/


function getallcountforcomments (Receipe_Id)
{
		//alert("C1");
		// Send AJAX request to server to retrieve the like and dislike counts
$.ajax({
    method: 'POST',
    url: 'getallstats.php', // Replace with the actual URL to your server-side script
    data: {task: 'getallcommentscount', recipeId: Receipe_Id}

}).done(function(response) {
		//	alert("C2");

				if (response.status === 'success') 

			{
									// Parse the response JSON to get the like and dislike counts
				   // var counts = JSON.parse(response);
				    var sumcount = response.totalcount;
				    console.log(sumcount);
				    // Update the like and dislike counts on the page
				   $('.comment-count').text(' Total Comments' + ' ' + sumcount );
				 //   $('.comment-count').text(sumcount);


			}
			else
			{
						//	alert("C4");
							console.log('Error recording count: ' + response.message);

			}
   

}).fail(function(jqXHR, textStatus, errorThrown) {
	//		alert("C3");

    // Error callback
    console.log('AJAX error: ' + textStatus + ' ' + errorThrown);
});

}


function getallcountforlikes (Receipe_Id)
{
		// alert("C1");
		// Send AJAX request to server to retrieve the like and dislike counts
$.ajax({
    method: 'POST',
    url: 'getallstats.php', // Replace with the actual URL to your server-side script
    data: {task: 'getalllikecount', recipeId: Receipe_Id}

}).done(function(response) {
		//	alert("C2");

				if (response.status === 'success') 

			{
									// Parse the response JSON to get the like and dislike counts
				   // var counts = JSON.parse(response);
				    var sumcount = response.totalcount;
				    console.log(sumcount);
				    // Update the like and dislike counts on the page
				    $('.total-like-count').text(' Total Count' + sumcount );


			}
			else
			{
							// alert("C4");
							console.log('Error recording count: ' + response.message);

			}
   

}).fail(function(jqXHR, textStatus, errorThrown) {
		//	alert("C3");

    // Error callback
    console.log('AJAX error: ' + textStatus + ' ' + errorThrown);
});

}


$(function() {

	// $('.like-button').prop('disabled', false);
//	 $('.dislike-button').prop('disabled', false);

    // Retrieve recipe ID from the URL or any other source
   // var recipeId = '123'; // Replace with your own logic to get recipe ID

  var urlParams = new URLSearchParams(window.location.search);
  var recipeId = urlParams.get('recipe_id');

  //  alert("Like Receipe ID" + recipeId);

    // Set initial like count to 0
    var likeCount = 0;

    // Initialize variable to track whether user has liked the recipe
    var hasLiked = false;

    // Add event listener for like button
    $('.like-button').click(function() {
    //	alert ("L1");

        // Check if user has already liked or disliked the recipe
        if (!hasLiked) {
        	    //	alert ("L2");

            likeCount++;
            $('.like-count').text(likeCount + ' likes');
            $(this).prop('disabled', false); // Disable the button

            // add your insert code for like
             $('.dislike-button').prop('disabled', true); // Disable the opposite button

            // Send AJAX request to server to record the user's like
            $.ajax({
                method: 'POST',
                url: 'recordlike.php', // Replace with the actual URL to your server-side script
                data: {recipeId: recipeId, likeType: 'like'}
             //   dataType: 'text' // Set the dataType parameter to 'text'

            }).done(function(response) {
            										console.log(response);
            							//			const status = response.status; // "success"

												   
																	//	if (jsonResponse.hasOwnProperty('status') && jsonResponse.status === 'success') {

																			if (response.status === 'success') {
												            // Perform action if server indicates success
												            console.log('Like recorded successfully!');
												            $('.dislike-button').prop('disabled', false); // Disable the opposite button
												        } else {
												            // Handle error if server indicates failure
												            console.log('Error recording like: ' + response.message);
												        }
												    
            		
            }).fail(function(jqXHR, textStatus, errorThrown) {
							    // Error callback
							    console.log('AJAX error: ' + textStatus + ' ' + errorThrown);
							});

            hasLiked = false; // Set variable to true to indicate user has liked the recipe
        }
    });




    // Add event listener for dislike button
// Add event listener for dislike button
$('.dislike-button').click(function() {

	// alert("D1");
    // Check if user has already liked or disliked the recipe
    if (hasLiked == false) {
   // 		alert("D2");

        likeCount = 0; // Reset like count to 0
        $('.like-count').text(likeCount + ' likes');
        $(this).prop('disabled', false); // Disable the button
        $('.like-button').prop('disabled', true); // Enable the like button

        // add your insert code for unlike

        // Send AJAX request to server to record the user's dislike
        $.ajax({
            method: 'POST',
            url: 'recordlike.php', // Replace with the actual URL to your server-side script
            data: {recipeId: recipeId, likeType: 'dislike'}
         //   dataType: 'text' // Set the dataType parameter to 'text'

        }).done(function(response) {

							            			if (response.status === 'success') {
							        // Perform action if server indicates success
							        console.log('Unlike recorded successfully!');
							                $('.like-button').prop('disabled', false); // Enable the like button
							                 hasLiked = false;
							    } else {
							        // Handle error if server indicates failure
							        console.log('Error recording Unlike: ' + response.message);
							    }

            		
            }).fail(function(jqXHR, textStatus, errorThrown) {
							    // Error callback
							    console.log('AJAX error: ' + textStatus + ' ' + errorThrown);
							});

        hasLiked = false; // Set variable to false to indicate user has unliked the recipe
    }
});

});