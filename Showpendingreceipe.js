

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


  if (getCookie('user_type')  && getCookie('user_id'))
 {
		
	   var user_type = getCookie('user_type');
		var user_id = getCookie('user_id');
		console.log(user_id); // prints the user ID
		console.log(user_type); // prints the user type
		//alert ("S1" + user_id);
		//alert ("S3" + user_type);
		generateRecipe(recipeId);

}				

else
{
	//    // ask the user to login or register
     alert('Please login to access this content');
  		window.location.href = 'login.html'; // redirect to login page
	} 


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



 function generateRecipe(recipeId) 
{	//  f 1

						  //	     alert('Recipe ID first function: ' + recipeId);
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

							  //	alert("Hi");
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

	let isChecked = false;


function checkRecipeFunction() {

	  isChecked = true;

  var urlParams = new URLSearchParams(window.location.search);
  var recipe_id = urlParams.get('recipe_id');
  
  fetch("checkreceipe.php?recipe_id=" + recipe_id)
    .then(response => response.json())
    .then(data => {
      if (data.status == "error") {
        var messageList = "";
        data.message.forEach(item => {
          messageList += "<li>" + item.field + ": " + item.banned_keyword + "</li>";
        });
        var formattedMessage = "Recipe  has the following banned keywords: <ul>" + messageList + "</ul>";
        document.querySelector(".right-div p").innerHTML = formattedMessage;
        document.querySelector(".right-div p").style.color = "red";
      } else {
        document.querySelector(".right-div p").innerHTML = "Recipe validated successfully.";
        document.querySelector(".right-div p").style.color = "green";
      }
    })
    .catch(error => console.error(error));
}


function rejectReceipeFunction() {
 
	if (isChecked) 
	 {

	 					 const modal = document.createElement("div");
		modal.classList.add("modal");

		let isDragging = false;
		let dragOffset = { x: 0, y: 0 };

		modal.addEventListener("mousedown", (e) => {
		  isDragging = true;
		  dragOffset.x = e.offsetX;
		  dragOffset.y = e.offsetY;
		});

		modal.addEventListener("mousemove", (e) => {
		  if (isDragging) {
		    modal.style.left = e.clientX - dragOffset.x + "px";
		    modal.style.top = e.clientY - dragOffset.y + "px";
		  }
		});

		modal.addEventListener("mouseup", () => {
		  isDragging = false;
		});

		modal.addEventListener("mouseleave", () => {
		  isDragging = false;
		});


  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const closeButton = document.createElement("span");
  closeButton.classList.add("close");
  closeButton.innerHTML = "&times;";

  const form = document.createElement("form");
  const commentLabel = document.createElement("label");
  const commentInput = document.createElement("textarea");
  const submitButton = document.createElement("button");

  commentLabel.innerText = "Rejection comments:";
  commentInput.setAttribute("class", "block border border-grey-light w-full p-2 rounded mb-4 font-light");
  submitButton.setAttribute("class", "action-button");
  submitButton.setAttribute("type", "submit");
  submitButton.innerText = "Reject recipe";

  form.appendChild(commentLabel);
  form.appendChild(commentInput);
  form.appendChild(submitButton);

  modalContent.appendChild(closeButton);
  modalContent.appendChild(form);

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  closeButton.addEventListener("click", function() {
    modal.style.display = "none";
  });

  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const comment = commentInput.value;
    const urlParams = new URLSearchParams(window.location.search);
    const recipe_id = urlParams.get('recipe_id');

    console.log("COmment");
     console.log(comment);
    console.log("recipe_id");
    console.log(recipe_id);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: "reject", recipe_id: recipe_id, comment: comment })
    };

    console.log("Request option");
        console.log(requestOptions);

    fetch('updatereceipestatus.php', requestOptions)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    console.log("Action:", data.action);
    console.log("Message:", data.message);
    console.log("Status:", data.status);
    if (data.hasOwnProperty('action') && data.action === "Rejected" && data.hasOwnProperty('message') && data.message === "Recipe is Rejected") {
      alert(data.message);
        window.location.replace("HomePage-Admin.html");

    } else if (data.hasOwnProperty('error')) {
      console.log("An error occurred: " + data.error);
      // TODO: Handle the error in an appropriate way
    } else {
      console.log("Recipe status updated successfully.");
      modal.style.display = "none";
      // TODO: Update UI to show the rejected status
    }
  })
  .catch(error => {
    console.log('Error:', error);
    // TODO: Handle the error in an appropriate way
  });


  });

  // Set the height and width of the modal
  modalContent.style.width = "80%";
  modalContent.style.height = "auto";

  // Position the modal in the center of the screen vertically
  modalContent.style.top = "50%";
  modalContent.style.transform = "translateY(-50%)";

  modal.style.display = "block";

	}
	else
	{
		alert("Please validate the receipe first");
	}

		 
}


function approveReceipeFunction ()
{	

		  if (isChecked) 
		  {
		  		const approveButton = document.getElementById("approveButton");

	 const urlParams = new URLSearchParams(window.location.search);
    const recipe_id = urlParams.get('recipe_id');


     const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: "approve", recipe_id: recipe_id})
    };

        console.log("Request option");
        console.log(requestOptions);

    fetch('updatereceipestatus.php', requestOptions)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    console.log("Action:", data.action);
    console.log("Message:", data.message);
    console.log("Status:", data.status);
    if (data.hasOwnProperty('action') && data.action === "Approved" && data.hasOwnProperty('message') && data.message === "Recipe is approved") {
      alert(data.message);
        window.location.replace("HomePage-Admin.html");

    } else if (data.hasOwnProperty('error')) {
      console.log("An error occurred: " + data.error);
      // TODO: Handle the error in an appropriate way
    } else {
      console.log("Recipe status updated successfully.");
      // TODO: Update UI to show the rejected status
    }
  })
  .catch(error => {
    console.log('Error:', error);
    // TODO: Handle the error in an appropriate way
  });
		  }
		  else
		  {
		  	alert("Please validate receipe first");
		  }

	


}