
document.addEventListener("DOMContentLoaded", function(event) {
   
const showNavbar = (toggleId, navId, bodyId, headerId) =>{
const toggle = document.getElementById(toggleId),
nav = document.getElementById(navId),
bodypd = document.getElementById(bodyId),
headerpd = document.getElementById(headerId)

// Validate that all variables exist
if(toggle && nav && bodypd && headerpd){
toggle.addEventListener('click', ()=>{
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

function colorLink(){
if(linkColor){
linkColor.forEach(l=> l.classList.remove('active'))
this.classList.add('active')
}
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

 // Your code to run since DOM is loaded and ready
 
 
});


	$(document).ready(function() {
  var userid = getCookie("user_id");
  var userType = getCookie("subscription_type");

 // alert("Cook" + userid);
  // alert("Cook" + userType);

  if (userid === undefined || userid === "") {
    window.location.href = "login.html";
}
else if(userType === undefined || userType === "")
{
	    window.location.href = "login.html";
}
	else
	{
			displyprofile(userid);

	const myButton = document.querySelector('#myButton1');

myButton.addEventListener('click', () => {
  myButton.disabled = true;
});
	}

	

});




	function redirectToHomePage() {
  // Check user type using cookie
	
	 var userid = getCookie("user_id");
		 var userType = getCookie("subscription_type");
		 
		 

	if (userid === undefined || userid === "") {
    window.location.href = "login.html";
}
else if(userType === undefined || userType === "")
{
	    window.location.href = "login.html";
}
	else
	{
		//	alert(userType);
	//	alert(userid);

			if (userType == "Paid") 
			{
				window.location.href = "HomePage-Paid.html";
			} 
			else 
			{
				window.location.href = "HomePage-Unpaid.html";
			}
	}

  // Redirect user to appropriate page based on user type
  
}

// Function to get cookie value by name
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) {
    return parts.pop().split(";").shift();
  }
}
	
		function displyprofile(userid)
		{
			
			 $.ajax({
			type: "GET",
			url: "displayprofile.php?user_Id=" + userid,
			dataType: "json",
			success: function(data) {
			
					for (var i = 0; i < data.length; i++) 
					{
		    data[i].fullname = data[i].fullname.trim();
		    data[i].City = data[i].City.trim();
		    data[i].ZipCode = data[i].ZipCode.trim();
		    data[i].Mobile = data[i].Mobile.trim();
		    data[i].Email = data[i].Email.trim();
		    data[i].CreatedDate = data[i].CreatedDate.trim();
		    data[i].Subscription_Type = data[i].Subscription_Type.trim();
		    data[i].User_Id = data[i].User_Id.trim();


			

		    document.getElementById('other-about-name').textContent = data[i].fullname;
		    document.getElementById('other-about-location').textContent = data[i].City;
		    document.getElementById('other-about-email').textContent = data[i].Email;
		    document.getElementById('other-about-contact').textContent = data[i].Mobile;
		    document.getElementById('other-about-member-since').textContent = data[i].CreatedDate;
		    document.getElementById('other-about-subscription').textContent = data[i].Subscription_Type;

		    if (data[i].imagepath =" ") 
		    {
		    	 					 document.getElementById('other-profile-image').src = 'Images/img_avatar2.png'; // Or some other default image source
				} 
				else 
				{
 				 					 document.getElementById('other-profile-image').src = data[i].imagepath;

				}


		}
					
			  
			  
			 
			},
			error: function(xhr, status, error) {
			 // console.log(xhr.responseText);
			  //console.log(data); // log the data object to the console

			}
		  });
		  
		}
		
		
		
	
function showupdatedata() {
	  var userid = getCookie("user_id");
	  		 var userType = getCookie("subscription_type");


	if (userid === undefined || userid === "") {
    window.location.href = "login.html";
}
else if(userType === undefined || userType === "")
{
	    window.location.href = "login.html";
}
	else
	{
		   // alert("U" + userid);

		$.ajax({
        type: "GET",
        url: "showupdatedataunpaid.php?user_Id=" + userid,
        dataType: "json",
        success: function(data) {
            // check if form already exists
         

                // create the form and append it to the page


           	 for (var i = 0; i < data.length; i++)
           	  {	
           	  	

									// create the form and append it to the page

									// create the form element
									var formElem = document.createElement('form');
									formElem.id = "myForm" + i;
									formElem.method = "post";
									formElem.action = "updateprofile.php";
									

									
									// create the table element
									var tableElem = document.createElement('table');
									tableElem.className = "my-table";


									// create the first name row
									var firstNameRow = document.createElement('tr');
									var firstNameLabelCell = document.createElement('td');
									var firstNameInputCell = document.createElement('td');
									var firstNameLabel = document.createElement('label');
									var firstNameInput = document.createElement('input');

									firstNameLabelCell.textContent = "First Name:";
									firstNameLabel.htmlFor = "firstname";
									firstNameInput.type = "text";
									firstNameInput.id = "firstname";
									firstNameInput.name = "firstname";
									firstNameInput.value = data[i].FirstName;

									firstNameLabelCell.appendChild(firstNameLabel);
									firstNameInputCell.appendChild(firstNameInput);

									firstNameRow.appendChild(firstNameLabelCell);
									firstNameRow.appendChild(firstNameInputCell);

									// create the last name row
									var lastNameRow = document.createElement('tr');
									var lastNameLabelCell = document.createElement('td');
									var lastNameInputCell = document.createElement('td');
									var lastNameLabel = document.createElement('label');
									var lastNameInput = document.createElement('input');

									lastNameLabelCell.textContent = "Last Name:";
									lastNameLabel.htmlFor = "lastname";
									lastNameInput.type = "text";
									lastNameInput.id = "lastname";
									lastNameInput.name = "lastname";
									lastNameInput.value = data[i].LastName;

									lastNameLabelCell.appendChild(lastNameLabel);
									lastNameInputCell.appendChild(lastNameInput);

									lastNameRow.appendChild(lastNameLabelCell);
									lastNameRow.appendChild(lastNameInputCell);
				
									// append the rows to the table and the table to the form
									tableElem.appendChild(firstNameRow);
									tableElem.appendChild(lastNameRow);

									
									// create the email label and input elements
										var emailLabel = document.createElement('label');
										emailLabel.htmlFor = "email";
										emailLabel.textContent = "Email:";
										var emailInput = document.createElement('input');
										emailInput.type = "email";
										emailInput.id = "email";
										emailInput.name = "email";
										emailInput.value = data[i].Email;
										var emailRow = document.createElement('tr');
										var emailLabelCell = document.createElement('td');
										var emailInputCell = document.createElement('td');
										emailLabelCell.appendChild(emailLabel);
										emailInputCell.appendChild(emailInput);
										emailRow.appendChild(emailLabelCell);
										emailRow.appendChild(emailInputCell);
										tableElem.appendChild(emailRow);
											
									// create the password label and input elements
										var passwordLabel = document.createElement('label');
										passwordLabel.htmlFor = "password";
										passwordLabel.textContent = "Password:";
										var passwordInput = document.createElement('input');
										passwordInput.type = "password";
										passwordInput.id = "password";
										passwordInput.name = "password";
										passwordInput.value = "";
										
										var passwordRow = document.createElement('tr');
										var passwordLabelCell = document.createElement('td');
										var passwordInputCell = document.createElement('td');
										
										passwordLabelCell.appendChild(passwordLabel);
										passwordInputCell.appendChild(passwordInput);
										passwordRow.appendChild(passwordLabelCell);
										passwordRow.appendChild(passwordInputCell);
										tableElem.appendChild(passwordRow);
							
							// create the security question label and dropdown menu elements
								
										var securityquestionRow = document.createElement('tr');
										var securityquestionLabelCell = document.createElement('td');
										var securityquestionInputCell = document.createElement('td');
										
 
										var securityQuestionLabel = document.createElement('label');
										securityQuestionLabel.htmlFor = "securityquestion";
										securityQuestionLabel.textContent = "Security Question:";
										securityquestionLabelCell.appendChild(securityQuestionLabel);
												
										var securityQuestionSelect = document.createElement('select');
										securityQuestionSelect.id = "securityquestion";
										securityQuestionSelect.name = "securityquestion";

										var defaultOption = document.createElement('option');
										defaultOption.value = "";
										defaultOption.disabled = true;
										defaultOption.selected = true;
										defaultOption.hidden = true;
										defaultOption.textContent = "Choose Security Question";
										securityQuestionSelect.appendChild(defaultOption);

										var option1 = document.createElement('option');
										option1.value = "Favourite Actor";
										option1.textContent = "What is your favourite actor?";
										securityQuestionSelect.appendChild(option1);

										var option2 = document.createElement('option');
										option2.value = "First School Name";
										option2.textContent = "What is your first school name?";
										securityQuestionSelect.appendChild(option2);

										var option3 = document.createElement('option');
										option3.value = "Birthplace";
										option3.textContent = "What is your birthplace?";
										securityQuestionSelect.appendChild(option3);

										var option4 = document.createElement('option');
										option4.value = "Favourite Movie";
										option4.textContent = "Which is your favourite movie?";
										securityQuestionSelect.appendChild(option4);
										
							 // find the option that matches the SecurityQuestion field in the JSON data
								for (var j = 0; j < securityQuestionSelect.options.length; j++) 
								{
									if (securityQuestionSelect.options[j].value === data[i].SecurityQuestion) 
									{
										securityQuestionSelect.options[j].selected = true;
										break;
									}
								}

										securityquestionInputCell.appendChild(securityQuestionSelect);

										securityquestionRow.appendChild(securityquestionLabelCell);
										securityquestionRow.appendChild(securityquestionInputCell);
										tableElem.appendChild(securityquestionRow);
																		
										// create the answer label and input elements
										var answerLabel = document.createElement('label');
										answerLabel.htmlFor = "answer";
										answerLabel.textContent = "Answer:";

										var answerInput = document.createElement('input');
										answerInput.type = "text";
										answerInput.id = "answer";
										answerInput.name = "answer";
										answerInput.value = data[i].Answer;
								
										var answerRow = document.createElement('tr');
										var answerLabelCell = document.createElement('td');
										var answerInputCell = document.createElement('td');
										
										answerLabelCell.appendChild(answerLabel);
										answerInputCell.appendChild(answerInput);
										answerRow.appendChild(answerLabelCell);
										answerRow.appendChild(answerInputCell);
										tableElem.appendChild(answerRow);
						
									// Create label and input elements for City field
										var cityLabel = document.createElement('label');
										cityLabel.htmlFor = "city";
										cityLabel.textContent = "City:";
										formElem.appendChild(cityLabel);

										var cityInput = document.createElement('input');
										cityInput.type = "text";
										cityInput.id = "city";
										cityInput.name = "city";
										cityInput.value = data[i].City;
										formElem.appendChild(cityInput);
					
										var cityRow = document.createElement('tr');
										var cityLabelCell = document.createElement('td');
										var cityInputCell = document.createElement('td');
										
										cityLabelCell.appendChild(cityLabel);
										cityInputCell.appendChild(cityInput);
										cityRow.appendChild(cityLabelCell);
										cityRow.appendChild(cityInputCell);
										tableElem.appendChild(cityRow);
										
										
										// Create label and input elements for Zip Code field
										var zipLabel  = document.createElement('label');
										zipLabel .htmlFor = "ZipCode";
										zipLabel .textContent = "Zip Code:";
										formElem.appendChild(zipLabel);

										var zipInput = document.createElement('input');
										zipInput.type = "text";
										zipInput.id = "zipcode";
										zipInput.name = "zipcode";
										zipInput.value = data[i].ZipCode;
										formElem.appendChild(zipInput);

										var zipRow = document.createElement('tr');
										var zipLabelCell = document.createElement('td');
										var zipInputCell = document.createElement('td');
										
										zipLabelCell.appendChild(zipLabel);
										zipInputCell.appendChild(zipInput);
										zipRow.appendChild(zipLabelCell);
										zipRow.appendChild(zipInputCell);
										tableElem.appendChild(zipRow);
									
									// Create label and input elements for Contact field
										var contactLabel = document.createElement('label');
										contactLabel.htmlFor = 'contact';
										contactLabel.textContent = 'Contact: ';
										

										var contactInput = document.createElement('input');
										contactInput.type = 'text';
										contactInput.id = 'contact';
										contactInput.name = 'contact';
										contactInput.value = data[i].Mobile;
										;

										var contactRow = document.createElement('tr');
										var contactLabelCell = document.createElement('td');
										var contactInputCell = document.createElement('td');
										
										contactLabelCell.appendChild(contactLabel);
										contactInputCell.appendChild(contactInput);
										contactRow.appendChild(contactLabelCell);
										contactRow.appendChild(contactInputCell);
										tableElem.appendChild(contactRow);
										
									// Create submit button element
									const submitBtn = document.createElement('button');
									submitBtn.type = 'submit';
									submitBtn.id = 'submitForm';
									submitBtn.textContent = 'Submit';
									submitBtn.setAttribute('class', 'w-full text-center py-3 rounded bg-blue-600 text-white hover:bg-blue-700 focus:outline-none my-1 font-regular');
									
									formElem.appendChild(tableElem);
									formElem.appendChild(submitBtn);
										
									
         		 
				}
				
				$('.text-gray-700').append(formElem);
         
        },
        error: function(xhr, status, error) {
            console.log(xhr.responseText);
        }
    });
	}

    
}
