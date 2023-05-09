function myFunction() {
  var x = document.getElementById("divsignupfree");
  var y = document.getElementById("divsignuppaid");

  
  if (x.style.display === "none") {
    x.style.display = "block";
	y.style.display = "none";
	btn1.value=10;

  } else {
   x.style.display = "none";
	y.style.display = "none";

  }
}
 
 // below will enable or disable  paid membership form
function myFunction1() {
   var x = document.getElementById("divsignupfree");
  var y = document.getElementById("divsignuppaid");
  
  if (y.style.display === "none") {
	y.style.display = "block";
	x.style.display = "none";
	btn2.value=10;
	
  } else {
    x.style.display = "none";
	y.style.display = "none";

  }
}


function ValidateForm() {


var jfname = document.getElementById('Fname').value;
var jlname = document.getElementById('Lname').value;
var jemail = document.getElementById('email').value;
var jpass = document.getElementById('Password').value;
var jsecurityquestion = document.getElementById('securityquestion').value;
var janswersq = document.getElementById('answersq').value;
var jdob = document.getElementById('dob').value;
var jcity = document.getElementById('City').value;
var jzip = document.getElementById('zip').value;
var jmobile = document.getElementById('mobile').value;



//var query = jfname +jlname +jemail+jpass+janswersq +jdob+jcity+jzip+jmobile+jsecurityquestion;
//alert (query);

// call all small funtions

ValidateFirstName(jfname);
ValidateLastName(jlname);
ValidateEmail(jemail);
ValidatePassword(jpass);
ValidateSecurityQuestionAnswer(janswersq);
validateDateOfBirth(jdob);
validateZipCode(jzip);
validatecity(jcity);
validatePhoneNumber(jmobile);

return false;
	} // end of main function 1


	// function 2 

function ValidateForm2() {


var jfname1 = document.getElementById('Fname1').value;
var jlname1 = document.getElementById('Lname1').value;
var jemail1 = document.getElementById('email1').value;
var jpass1 = document.getElementById('Password1').value;
var jsecurityquestion1 = document.getElementById('securityquestion1').value;
var janswersq1 = document.getElementById('answersq1').value;
var jdob1 = document.getElementById('dob1').value;
var jcity1 = document.getElementById('City1').value;
var jzip1 = document.getElementById('zip1').value;
var jmobile1 = document.getElementById('mobile1').value;

var jcardfullname = document.getElementById('Cardfullname').value;
var jcCardNo = document.getElementById('CardNo').value;
var jCVV = document.getElementById('CVV').value;
var jexpdate = document.getElementById('expdate').value;


//var query = jfname +jlname +jemail+jpass+janswersq +jdob+jcity+jzip+jmobile+jsecurityquestion;
//alert (query);

// call all small funtions

ValidateFirstName(jfname1);
ValidateLastName(jlname1);
ValidateEmail(jemail1);
ValidatePassword(jpass1);
ValidateSecurityQuestionAnswer(janswersq1);
validateDateOfBirth(jdob1);
validateZipCode(jzip1);
validatecity(jcity1);
validatePhoneNumber(jmobile1) ;
ValidateNameOnCard(jcardfullname);
validateCardNumber(jcCardNo);
validateCVV(jCVV);
checkExpDate(jexpdate);

return false;
	} 

	// end of function 2

 // below will check the First Name

function ValidateFirstName(jfname)
{
    if (jfname == "")
    {
    		alert('Enter FirstName ');
    	     event.preventDefault();
        	return false;
    }
    else
    {
    	var letters = /^[A-Za-z]+$/;
	    if(jfname.match(letters))
	    {
	        return true;
	    }
	    else
	    {
	       alert('FirstName must have alphabet characters only');
	       event.preventDefault();
	                	return false;

	    }
    }
  
}

function ValidateLastName(jlname)
{
   if (jlname == "")
    {
    		alert('Enter LastName ');
    	     event.preventDefault();
        	return false;
    }
    else
    {
    	 var letters = /^[A-Za-z]+$/;
	    if(jlname.match(letters))
	    {
	        return true;
	    }
	    else
	    {
	        alert('LastName must have alphabet characters only');
	        event.preventDefault();
	        return false;
	    }
    }
 

}

function ValidateEmail(jemail)
{
   	if (jemail == "")
    {
    		alert('Enter Email');
    	     event.preventDefault();
        	return false;
    }
    else
    {
    	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		    if(jemail.match(mailformat))
		    {
		        return true;
		    }
		    else
		    {
		        alert('Enter Valid Email Address');
		        event.preventDefault();
		        return false;
		    }
    }
	

}
  
function ValidatePassword(jpass) 
{ 
		if (jpass == "")
    {
    		alert('Enter Password');
    	     event.preventDefault();
        	return false;
    }
    else
    {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
		    if(jpass.match(passwordRegex))
		    {
		        return true;
		    }
		    else
		    {
		        alert('Enter Valid Password');
		        event.preventDefault();
		        return false;
		    }
    }
	
}

function ValidateSecurityQuestionAnswer(janswersq)
{
    if (janswersq == "")
    {
    		alert('Enter Answer for  Security Question ');
    	     event.preventDefault();
        	return false;
    }
    else
    {
    	var letters = /^[A-Za-z]+$/;
	    if(janswersq.match(letters))
	    {
	        return true;
	    }
	    else
	    {
	       alert('Answers must have alphabet characters only');
	       event.preventDefault();
	        return false;

	    }
    }
  
}

function validateDateOfBirth(jdob)
{

	if (jdob == "")
	    {
	    		alert('Enter Date of Birth');
	    	     event.preventDefault();
	        	return false;
	    }
	 else
	 {
	 		 // Split the date into its components
	  const dateParts = jdob.split('/');
	  const month = parseInt(dateParts[0]);
	  const day = parseInt(dateParts[1]);
	  const year = parseInt(dateParts[2]);
	  
	  // Create a new date object with the input
	  const dob = new Date(year, month - 1, day);
	  
	  // Check if the date is valid
		  if (isNaN(dob.getTime())) 
		  {
		    
		    alert ('Enter Date in mm/dd/yyyy format');
		    event.preventDefault();
		    return false;

		  } 
		  else
		   {
		    return true;
		  }
	 }
 
}



function validatecity(jcity)
 {
 	if (jcity == "")
	    {
	    		alert('Enter City');
	    	     event.preventDefault();
	        	return false;
	    }
	else
	{ 

	// Regular expression to check if the ZIP code is valid
	    const cityRegex = /^[a-zA-Z]+(?:[\s-'][a-zA-Z]+)*$/;

	  if(jcity.match(cityRegex))
		    {
		        return true;
		    }
		    else
		    {
		       alert('Invalid City');
		       event.preventDefault();
		        return false;

		    }

	}
 


}

function validateZipCode(jzip)
 {
 	if (jzip == "")
	    {
	    		alert('Enter Zipcode');
	    	     event.preventDefault();
	        	return false;
	    }
	else
	{ 

	// Regular expression to check if the ZIP code is valid
	  const zipCodeRegex = /^\d{5}(?:[-\s]\d{4})?$/;
	  
	  if(jzip.match(zipCodeRegex))
		    {
		        return true;
		    }
		    else
		    {
		       alert('Invalid Zipcode');
		       event.preventDefault();
		        return false;

		    }

	}
 
}


function validatePhoneNumber(jmobile) 

{
	if (jmobile == "")
	    {
	    		alert('Enter Contact number');
	    	     event.preventDefault();
	        	return false;
	    }
	 else
	 {
	 	  const phoneNumberRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{3}/;


	 	if(jmobile.match(phoneNumberRegex))
		    {
		        return true;
		    }
		    else
		    {
		       alert('Invalid Contact Number');
		       event.preventDefault();
		        return false;

		    }

	 }

  
}


function ValidateNameOnCard(cardfullname)
{
   if (cardfullname == "")
    {
    		alert('Enter Name Exists on Card');
    	     event.preventDefault();
        	return false;
    }
   /* else
    {
    	 const letters = /^[A-Za-z]+$/;
	    if(cardfullname.match(letters))
	    {
	        return true;
	    }
	    else
	    {
	        alert('Name On Card must have alphabet characters only');
	        event.preventDefault();
	        return false;
	    }
    }*/
 
}


function validateCardNumber(cardNumber) 
{
		if(cardNumber == "")
		{
			alert ('Enter Card Number');
		}
		else
		{

			 const letters = /^[A-Za-z]+$/;
	        if (cardNumber.match(letters))
	          {
	            return false;
	            alert ('Enter Valid Card Number');
	          }
	        else
	          {
	            return true;
	            
	          }
		}
	}
		

function validateCVV(cvv)

 {	
 	if( cvv == "")
 	{
 		alert('Enter CVV');

 	}
 	else
 	{
 		const letters = /^[A-Za-z]+$/;

        if (cvv.match(letters))
          {
            return false;
            alert ('Enter Valid CVV ');

          }
        else
          {
            return true;
          }
	}
}

function checkExpDate(expDate)
 {
 	if(expDate =="")
 	{
 		alert('Enter Card Exp date');
 	}
 	else
 	{
			const letters = /^[A-Za-z]+$/;

			        if (expDate.match(letters))
			          {
			            return false;
            			alert ('Enter Valid Expire Date ');

			          }
			        else
			          {
			            return true;
			          }


 		
      }
   }



