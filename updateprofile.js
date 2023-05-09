
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


	showupdatedata();

	});




	function redirectToHomePage() {
  // Check user type using cookie
	
	 var userid = getCookie("user_id");
		 var userType = getCookie("subscription_type");
		 


if (userid === "" || userid === undefined)
	{
		window.location.href = "login.html";
	}
	else
	{

	alert(userType);
		alert(userid);
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
	
		
	
function showupdatedata() {
	  var userid = getCookie("user_id");
      if (userid === "" || userid === undefined)
	{
		window.location.href = "login.html";
	}
	else
	{
		    alert("U" + userid);

    $.ajax({
        type: "GET",
        url: "showupdatedataunpaid.php?user_Id=" + userid,
        dataType: "json",
        success: function(data) {
            // check if form already exists
         

           	alert("Hi");
                // create the form and append it to the page


           	 for (var i = 0; i < data.length; i++)
           	  {	
           	  	

									
									


									
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
									

										var cityInput = document.createElement('input');
										cityInput.type = "text";
										cityInput.id = "city";
										cityInput.name = "city";
										cityInput.value = data[i].City;
									
					
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

										var zipInput = document.createElement('input');
										zipInput.type = "text";
										zipInput.id = "zipcode";
										zipInput.name = "zipcode";
										zipInput.value = data[i].ZipCode;

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
										contactLabel.textContent = 'Contact:(require format -XXX-XXX-XXXX) ';
										

										var contactInput = document.createElement('input');
										contactInput.type = 'text';
										contactInput.id = 'contact';
										contactInput.name = 'contact';
								//		var contactNumber = data[i].Mobile.toString(); // convert to string if it's a number
								//		var formattedContactNumber = contactNumber.substring(0,3) + '-' + contactNumber.substring(3,6) + '-' + contactNumber.substring(6);
								//		contactInput.value = formattedContactNumber;

								//		var contactNumber = String(data[i].Mobile); // convert to string
//var formattedContactNumber = contactNumber.substring(0,3) + '-' + contactNumber.substring(3,6) + '-' + contactNumber.substring(6);
//contactInput.value = formattedContactNumber;

var contactNumber = data[i].Mobile.toString(); // convert to string if it's a number
var formattedContactNumber = contactNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
contactInput.value = formattedContactNumber;

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
									

									// create the form and append it to the page

									// create the form element
									var formElem = document.createElement('form');
									formElem.id = "myForm" + i;
									formElem.method = "post";
									formElem.action = "updateprofile.php";


									formElem.appendChild(tableElem);


									  // Attach an event listener to the form's submit event
									 formElem.addEventListener('submit', function(event) {
										  event.preventDefault();
										  if (validateupdatedata()) {
										  	    window.location.href = 'updateprofile.php';

										    formElem.submit();
										  }
										  else
										  {
										  	alert("Error");
										  }
										});
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


function validateupdatedata()
{
              	  const errorDiv = document.querySelector('.error-messages');

errorDiv.innerHTML = ''; // Clear the error messages from the errorDiv element

var jfname = document.getElementById('firstname').value;
var jlname = document.getElementById('lastname').value;
var jemail = document.getElementById('email').value;
var jpass = document.getElementById('password').value;
var jsecurityquestion = document.getElementById('securityquestion').value;
var janswersq = document.getElementById('answer').value;
var jcity = document.getElementById('city').value;
var jzip = document.getElementById('zipcode').value;
var jcon = document.getElementById('contact').value;

/*

alert("Name"+jfname);
alert("lastname"+jlname);
alert("email"+jemail);
alert("password"+jpass);
alert("securityquestion"+jsecurityquestion);
alert("janswersq"+janswersq);
alert("jcity"+jcity);
alert("jzip"+jzip);
alert("contact"+jcon);



const isValidFirstName = ValidateFirstName(jfname);
  const isValidLastName = ValidateLastName(jlname);
  const isValidEmail = ValidateEmail(jemail);
  const isValidPassword = ValidatePassword(jpass);
  const isValidSecurityQuestionAnswer = ValidateSecurityQuestionAnswer(janswersq);
  const isValidZipCode = validateZipCode(jzip);
  const isValidCity = validatecity(jcity);
  const isValidPhoneNumber = validatePhoneNumber(jcon);

if (isValidFirstName &&  isValidLastName &&  isValidEmail && isValidPassword 
	&&  isValidSecurityQuestionAnswer &&  isValidZipCode && isValidCity && isValidPhoneNumber)
	 {
	 	return true;
           

  } else 
  {
       alert("Please fill all the fields with valid data.");
           return false;


  }*/
		return true;
}

       function   ValidateFirstName(jfname)
              {
              	  const errorDiv = document.querySelector('.error-messages');
                  const alphaOnlyRegex = /^[a-zA-Z ]+$/;

                // Validate recipe name
                  if (jfname === "")
                  {
                    rname=false;
                    const errorMessage = "Please enter a valid First  name .";
                    const errorNode = document.createElement('p');
                    errorNode.innerText = errorMessage;
   					 errorDiv.appendChild(errorNode);
                  }
                   if (!alphaOnlyRegex.test(jfname))
                   {
                    rname=false;
                    const errorMessage = "For First Name only alphabets allowed";
                    const errorNode = document.createElement('p');
                    errorNode.innerText = errorMessage;
   					errorDiv.appendChild(errorNode);
                  } 
                  else
                  {
                      rname  = true;
                  }
                   return rname ;
              }

  function   ValidateLastName(jlname)
                         {
                         	  const errorDiv = document.querySelector('.error-messages');
                             const alphaOnlyRegex = /^[a-zA-Z ]+$/;

                           // Validate recipe name
                             if (jlname === "")
                             {
                               rname=false;
                               const errorMessage = "Please enter a valid Last  name .";
                               const errorNode = document.createElement('p');
                               errorNode.innerText = errorMessage;
              				   errorDiv.appendChild(errorNode);
                             }
                              if (!alphaOnlyRegex.test(jlname))
                              {
                               rname=false;
                               const errorMessage = "For Last Name only alphabets allowed";
                               const errorNode = document.createElement('p');
                               errorNode.innerText = errorMessage;
              					errorDiv.appendChild(errorNode);
                             } 
                             else
                             {
                                 rname  = true;
                             }
                              return rname ;
                         }


function ValidateEmail(jemail)
{              	  const errorDiv = document.querySelector('.error-messages');

   	if (jemail == "")
    {
             rname=false;
        	 const errorMessage = "Please enter a valid Email .";
             const errorNode = document.createElement('p');
             errorNode.innerText = errorMessage;
             errorDiv.appendChild(errorNode);
    }
    else
    {
    	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		    if(jemail.match(mailformat))
		    {
		        rname = true;
		    }
		    else
		    {
		     const errorMessage = "Email format is not valid .";
             const errorNode = document.createElement('p');
             errorNode.innerText = errorMessage;
             errorDiv.appendChild(errorNode);
		     rname=false;
		    }
    }
	
    	  return rname ;
}

function ValidatePassword(jpass) 
{ 
              	  const errorDiv = document.querySelector('.error-messages');

	alert("Hi Pass fun");
		if (jpass == "")
    {
    		
    	     rname=false;
        	 const errorMessage = "Enter Password .";
             const errorNode = document.createElement('p');
             errorNode.innerText = errorMessage;
             errorDiv.appendChild(errorNode);
    }
    else
    {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
		    if(jpass.match(passwordRegex))
		    {
		        rname=true;
		    }
		    else
		    {
		       
		     rname=false;
        	 const errorMessage = "password minimum 6 characters at least one number, one lowercase and one uppercase letter.";
             const errorNode = document.createElement('p');
             errorNode.innerText = errorMessage;
             errorDiv.appendChild(errorNode);

		    }
    }
	return rname ;
}

function ValidateSecurityQuestionAnswer(janswersq)
{
	              	  const errorDiv = document.querySelector('.error-messages');

    if (janswersq == "")
    {
    		
        	 rname=false;
        	 const errorMessage = "Enter Answer for  Security Question.";
             const errorNode = document.createElement('p');
             errorNode.innerText = errorMessage;
             errorDiv.appendChild(errorNode);
    }
    else
    {
    	var letters = /^[A-Za-z]+$/;
	    if(janswersq.match(letters))
	    {
	        rname = true;
	    }
	    else
	    {
	       
	         rname=false;
        	 const errorMessage = "Answers must have alphabet characters only.";
             const errorNode = document.createElement('p');
             errorNode.innerText = errorMessage;
             errorDiv.appendChild(errorNode);
    }

	    }
    
  return rname ;
}

function validatecity(cityName)
{	
	              	  const errorDiv = document.querySelector('.error-messages');

	const cityRegex = /^[a-zA-Z]+(?:[\s-'][a-zA-Z]+)*$/;
		if (cityName == "")
	    {
	    	rname=false;
	    	 const errorMessage = "Enter City.";
	    	 const errorNode = document.createElement('p');
             errorNode.innerText = errorMessage;
             errorDiv.appendChild(errorNode);
	    		
	    }
	      if (cityName.match(cityRegex))
		    {
		      rname = true;
	    	}
	    	else
	    	{
	    	 rname=false;
	    	 const errorMessage = "Invalid City.";
	    	 const errorNode = document.createElement('p');
             errorNode.innerText = errorMessage;
             errorDiv.appendChild(errorNode);
	    	}
	    //cityName =jcity;

	    	$.ajax({
  url: "checkcity.php?cityName=" + cityName,
  type: 'GET',
  dataType: 'json',
  success: function(data) 
  {
    if (data.exists) {
    	
    	
    		      rname = true;

    
      // result.textContent = `${cityName} exists.`;
    	
    } else {
      // result.textContent = `${cityName} does not exist.`;
      rname = false;
      const errorMessage = "City does not exist.";
      const errorNode = document.createElement('p');
      errorNode.innerText = errorMessage;
      errorDiv.appendChild(errorNode);
    }
  },
  error: function(xhr, status, error) {
    //onsole.error('Error fetching data:', error);
    const errorMessage = xhr.responseText;
    const errorNode = document.createElement('p');
    errorNode.innerText = errorMessage;
    errorDiv.appendChild(errorNode);
          rname = false;

  }
});

  return rname ;


}  // end


function validateZipCode(jzip)
 {
 	              	  const errorDiv = document.querySelector('.error-messages');

 	if (jzip == "")
	    {
	         rname=false;
             const errorMessage = "Enter Zipcode.";
	    	 const errorNode = document.createElement('p');
             errorNode.innerText = errorMessage;
             errorDiv.appendChild(errorNode);
	    }
	else
	{ 

	// Regular expression to check if the ZIP code is valid
	  const zipCodeRegex = /^\d{5}(?:[-\s]\d{4})?$/;
	  
	  if(jzip.match(zipCodeRegex))
		    {
		        rname = true;
		    }
		    else
		    {
		      
		     rname=false;
             const errorMessage = "Invalid Zipcode.";
	    	 const errorNode = document.createElement('p');
             errorNode.innerText = errorMessage;
             errorDiv.appendChild(errorNode);

		    }

	}
   return rname;

}


function validatePhoneNumber(jcon) 

{
	              	  const errorDiv = document.querySelector('.error-messages');


	if (jcon == "")
	    {
	    	 rname=false;
             const errorMessage = "Enter Contact number.";
	    	 const errorNode = document.createElement('p');
             errorNode.innerText = errorMessage;
             errorDiv.appendChild(errorNode);
	    }
	 else
	 {
	 	  const phoneNumberRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{3}/;


	 	if(jcon.match(phoneNumberRegex))
		    {
		        rname = true;
		    }
		    else
		    {
		       
	    	 rname=false;
		     const errorMessage = "Invalid Contact Number.";
	    	 const errorNode = document.createElement('p');
             errorNode.innerText = errorMessage;
             errorDiv.appendChild(errorNode);

		    }

	 }

     return rname;

}
