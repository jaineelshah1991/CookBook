

$(document).ready(function() {


const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get('recipe_id');

console.log("Query string:", window.location.search);
console.log("Recipe ID:", recipeId);

/*
var user_type = getCookie('user_type');
var subscription_type = getCookie('subscription_type');
var user_id = getCookie('user_id');

*/



// If recipeId is null or undefined, redirect to login page
if (!recipeId) {
  window.location.href = 'login.html';
}
else
{
      showupdatereceipedata(recipeId);

}



  });

/*


/*
var user_id = getCookie("user_id");
var user_type = getCookie("user_type");
var subscription_type = getCookie("subscription_type");


  
alert ("U ID".user_id);
  alert ("U Type".user_type);*/

/*
      if (user_id === undefined || user_id === ""  )
        {
             window.location.href = "login.html";
         } 

      else
      {
        
      }
*/

      ///



  
function showupdatereceipedata(recipeId)
{  

        $.ajax({
        type: "GET",
        url: "showupdatereceipedata.php?recipeId=" + recipeId,
        dataType: "json",
        success: function(data) {
          
             for (var i = 0; i < data.length; i++)
              { 
                                        
                // create the table element
                var tableElem = document.createElement('table');
                tableElem.className = "my-table";
                tableElem.style.width = "100%";

                        // create the first name row
                        var firstNameRow = document.createElement('tr');
                        var firstNameLabelCell = document.createElement('td');
                        var firstNameInputCell = document.createElement('td');
                        var firstNameValidationCell = document.createElement('td'); // New cell for validation errors
                        var firstNameLabel = document.createElement('label');
                        var firstNameInput = document.createElement('input');
                        var recipeIdInput = document.createElement('input'); // New input element for recipe_Id

                        firstNameInput.style.width = "500px";

                        firstNameLabelCell.textContent = "Recipe Name:";
                        firstNameLabel.htmlFor = "receipename";
                        firstNameInput.type = "text";
                        firstNameInput.id = "receipename";
                        firstNameInput.name = "receipename";
                        firstNameInput.value = data[i].Receipe_Name;

                        recipeIdInput.type = "hidden"; // Set the input type to "hidden"
                        recipeIdInput.id = "recipe_Id";
                        recipeIdInput.name = "recipe_Id";
                        recipeIdInput.value = data[i].Receipe_Id;


                        firstNameLabelCell.appendChild(firstNameLabel);
                        firstNameInputCell.appendChild(firstNameInput);
                        firstNameInputCell.appendChild(recipeIdInput); // Append the recipe_Id input element

                        firstNameRow.appendChild(firstNameLabelCell);
                        firstNameRow.appendChild(firstNameInputCell);
                        firstNameRow.appendChild(firstNameValidationCell); // Add new cell to the row
                        tableElem.appendChild(firstNameRow);

                    
                    // Create the recipe description row
                        var recipeDescRow = document.createElement('tr');
                        var recipeDescLabelCell = document.createElement('td');
                        var recipeDescInputCell = document.createElement('td');
                        var recipeDescValidationCell = document.createElement('td');
                        var recipeDescLabel = document.createElement('label');
                        var recipeDescInput = document.createElement('input');
                        var recipeDescInput = document.createElement('textarea');

                        recipeDescLabelCell.textContent = "Recipe Description:";
                        recipeDescLabel.htmlFor = "recipedesc";
                        recipeDescInput.type = "text";
                        recipeDescInput.id = "recipedesc1";
                        recipeDescInput.name = "recipedesc";
                        recipeDescInput.value = data[i].ReceipeDesc;
                        recipeDescInput.style.width = "500px";
                        recipeDescInput.style.Height = "500px";

                        recipeDescLabelCell.appendChild(recipeDescLabel);
                        recipeDescInputCell.appendChild(recipeDescInput);

                        recipeDescRow.appendChild(recipeDescLabelCell);
                        recipeDescRow.appendChild(recipeDescInputCell);
                        recipeDescRow.appendChild(recipeDescValidationCell);
                        tableElem.appendChild(recipeDescRow);

                // create the third name row (example)
                      // Create the recipe instructions row
                        var recipeInstructionsRow = document.createElement('tr');
                        var recipeInstructionsLabelCell = document.createElement('td');
                        var recipeInstructionsInputCell = document.createElement('td');
                        var recipeInstructionsValidationCell = document.createElement('td');
                        var recipeInstructionsLabel = document.createElement('label');
                        var recipeInstructionsInput = document.createElement('textarea');
                        recipeInstructionsInput.style.width = "500px";
                        recipeInstructionsInput.style.height = "100px";

                        recipeInstructionsLabelCell.textContent = "Recipe Instructions:";
                        recipeInstructionsLabel.htmlFor = "recipeinstructions";
                        recipeInstructionsInput.id = "recipeinstructions";
                        recipeInstructionsInput.name = "recipeinstructions";
                        recipeInstructionsInput.value = data[i].Instructions;

                        recipeInstructionsLabelCell.appendChild(recipeInstructionsLabel);
                        recipeInstructionsInputCell.appendChild(recipeInstructionsInput);

                        recipeInstructionsRow.appendChild(recipeInstructionsLabelCell);
                        recipeInstructionsRow.appendChild(recipeInstructionsInputCell);
                        recipeInstructionsRow.appendChild(recipeInstructionsValidationCell);
                        tableElem.appendChild(recipeInstructionsRow);

                        // Create the course category row

                          var courseCategoryRow = document.createElement('tr');
                          var courseCategoryLabelCell = document.createElement('td');
                          var courseCategoryInputCell = document.createElement('td');
                          var courseCategoryValidationCell = document.createElement('td');
                          var courseCategoryLabel = document.createElement('label');
                          var courseCategoryInput = document.createElement('select');
                          courseCategoryInput.style.width = "500px";

                          // Create options for the select element based on your JSON data
                          var courseCategoryOptions = ["Appetizer", "Bread", "Main Dish", "Salad","Soups", "Snacks"];
                          for (var j = 0; j < courseCategoryOptions.length; j++) {
                            var option = document.createElement("option");
                            option.value = courseCategoryOptions[j];
                            option.text = courseCategoryOptions[j];
                            if (option.value === data[i].Course_Cata) {
                              option.selected = true;
                            }
                            courseCategoryInput.appendChild(option);
                          }

                          courseCategoryLabelCell.textContent = "Course Category:";
                          courseCategoryLabel.htmlFor = "coursecategory";
                          courseCategoryInput.id = "coursecategory";
                          courseCategoryInput.name = "coursecategory";

                          courseCategoryLabelCell.appendChild(courseCategoryLabel);
                          courseCategoryInputCell.appendChild(courseCategoryInput);

                          courseCategoryRow.appendChild(courseCategoryLabelCell);
                          courseCategoryRow.appendChild(courseCategoryInputCell);
                          courseCategoryRow.appendChild(courseCategoryValidationCell);
                          tableElem.appendChild(courseCategoryRow);


                          // Create the cuisine row
                          var cuisineRow = document.createElement('tr');
                          var cuisineLabelCell = document.createElement('td');
                          var cuisineInputCell = document.createElement('td');
                          var cuisineValidationCell = document.createElement('td');
                          var cuisineLabel = document.createElement('label');
                          var cuisineInput = document.createElement('select');
                          cuisineInput.style.width = "500px";

                          // Create options for the select element based on your cuisine options
                          var cuisineOptions = ["Africa and Middle East", "Asia and Pacific Ocean", "Europe", "North and South America", "Others"];
                          for (var j = 0; j < cuisineOptions.length; j++) {
                            var option = document.createElement("option");
                            option.value = cuisineOptions[j];
                            option.text = cuisineOptions[j];
                            if (option.value === data[i].Cusine) {
                              option.selected = true;
                            }
                            cuisineInput.appendChild(option);
                          }

                          cuisineLabelCell.textContent = "Cuisine:";
                          cuisineLabel.htmlFor = "cuisine";
                          cuisineInput.id = "cuisine";
                          cuisineInput.name = "cuisine";

                          cuisineLabelCell.appendChild(cuisineLabel);
                          cuisineInputCell.appendChild(cuisineInput);

                          cuisineRow.appendChild(cuisineLabelCell);
                          cuisineRow.appendChild(cuisineInputCell);
                          cuisineRow.appendChild(cuisineValidationCell);
                          tableElem.appendChild(cuisineRow);

                          // Create the preptime row
                          var prepTimeRow = document.createElement('tr');
                          var prepTimeLabelCell = document.createElement('td');
                          var prepTimeInputCell = document.createElement('td');
                          var prepTimeValidationCell = document.createElement('td');
                          var prepTimeLabel = document.createElement('label');
                          var prepTimeInput = document.createElement('input');

                          prepTimeLabelCell.textContent = "Preparation Time (minutes):";
                          prepTimeLabel.htmlFor = "preptime";
                          prepTimeInput.type = "text";
                          prepTimeInput.id = "preptime";
                          prepTimeInput.name = "preptime";
                          prepTimeInput.value = data[i].Preptime;
                          prepTimeInput.style.width = "500px";

                          prepTimeLabelCell.appendChild(prepTimeLabel);
                          prepTimeInputCell.appendChild(prepTimeInput);

                          prepTimeRow.appendChild(prepTimeLabelCell);
                          prepTimeRow.appendChild(prepTimeInputCell);
                          prepTimeRow.appendChild(prepTimeValidationCell);
                          tableElem.appendChild(prepTimeRow);

                    
                          // Create the size row
                          var sizeRow = document.createElement('tr');
                          var sizeLabelCell = document.createElement('td');
                          var sizeInputCell = document.createElement('td');
                          var sizeValidationCell = document.createElement('td');
                          var sizeLabel = document.createElement('label');
                          var sizeInput = document.createElement('input');

                          sizeLabelCell.textContent = "Recipe Size (servings):";
                          sizeLabel.htmlFor = "recipesize";
                          sizeInput.type = "text";
                          sizeInput.id = "recipesize";
                          sizeInput.name = "recipesize";
                          sizeInput.value = data[i].size;
                          sizeInput.style.width = "500px";


                          sizeLabelCell.appendChild(sizeLabel);
                          sizeInputCell.appendChild(sizeInput);

                          sizeRow.appendChild(sizeLabelCell);
                          sizeRow.appendChild(sizeInputCell);
                          sizeRow.appendChild(sizeValidationCell);
                          tableElem.appendChild(sizeRow);

                               // Create the You Tube video row
                          var videoRow = document.createElement('tr');
                          var videoLabelCell = document.createElement('td');
                          var videoInputCell = document.createElement('td');
                          var videoValidationCell = document.createElement('td');
                          var videoLabel = document.createElement('label');
                          var videoInput = document.createElement('input');

                          videoLabelCell.textContent = "You Tube Video Url:";
                          videoLabel.htmlFor = "videourl";
                          videoInput.type = "text";
                          videoInput.id = "videourlinput";
                          videoInput.name = "videourlinput";
                          videoInput.value = data[i].videourl;
                          videoInput.style.width = "500px";

                          videoLabelCell.appendChild(videoLabel);
                          videoInputCell.appendChild(videoInput);

                          videoRow.appendChild(videoLabelCell);
                          videoRow.appendChild(videoInputCell);
                          videoRow.appendChild(videoValidationCell);
                          tableElem.appendChild(videoRow);

                          // Create the image row
                            var imageRow = document.createElement('tr');
                            var imageLabelCell = document.createElement('td');
                            var imageInputCell = document.createElement('td');
                            var imageLabel = document.createElement('label');
                            var imageInput = document.createElement('input');

                            imageLabelCell.textContent = "Recipe Image:";
                            imageLabel.htmlFor = "recipeimage";
                            imageLabel.textContent = "Choose an image to upload:";
                            imageInput.type = "file";
                            imageInput.id = "recipeimage";
                            imageInput.name = "recipeimage";
                          //  imageInput.value =  data[i].newfilename;

                            imageLabelCell.appendChild(imageLabel);
                            imageInputCell.appendChild(imageInput);

                            imageRow.appendChild(imageLabelCell);
                            imageRow.appendChild(imageInputCell);
                            tableElem.appendChild(imageRow);


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
                formElem.action = "updatereceipe.php";
                formElem.enctype = "multipart/form-data"; // add the enctype attribute
                formElem.appendChild(tableElem);

                  // Set up table styles
                tableElem.style.borderCollapse = "collapse";
                tableElem.style.borderSpacing = "0";

                // Set up cell styles
                var tableCells = tableElem.getElementsByTagName("td");
                for (var j = 0; j < tableCells.length; j++) {
                    tableCells[j].style.padding = "10px";
                    tableCells[j].style.textAlign = "left";
                    tableCells[j].style.verticalAlign = "top";
                }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
                
                // Attach an event listener to the form's submit event
                formElem.addEventListener('submit', function(event) {
                    event.preventDefault();
                    if (validateupdatedata()) {
                        window.location.href = 'updatereceipe.php';
                        formElem.submit();
                    } else {
                          alert("Du-False");
                        
                    }
                });

              
               

                formElem.appendChild(submitBtn);


                    
                    
        }
        
$('.bg-white.px-6.py-8.rounded.shadow-md.text-black.w-full').append(formElem);

        },
        error: function(xhr, status, error) {
           // console.log(xhr.responseText);
            //console.log(data)
          window.location.href = "login.html";
        }
    });
      ///

}

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

function validateupdatedata()
{     

      let functionStatus ="", rname ="",rdesc ="" ,rimg ="" ,rprep="" ,rser ="",rytube =""
                  const errorDiv = document.querySelector(".error-div");
                   errorDiv.innerHTML = "";
             
            

                  const recipeName = document.getElementById("receipename").value;
                  const recipeImage = document.getElementById("recipeimage").value;
                  const preptime = document.getElementById("preptime").value;
                  const servingSize = document.getElementById("recipesize").value;
                  const recipe_videourl = document.getElementById("videourlinput").value;
                  const recipeinstructions = document.getElementById("recipeinstructions").value;
                  const recipedesc = document.getElementById("recipedesc1").value;

                rname= ValidateReceipeName(recipeName);
                console.log(rname);
                rimg= ValidateImage(recipeImage);
                console.log(rimg);
                rprep= ValidatePrepTime(preptime);
                console.log(rprep);
                rser= ValidateServingSize(servingSize);
                console.log(rser);
                rytube = ValidateVideourl(recipe_videourl);
                console.log(rytube);

                rdesc =ValidateReceipeDesc(recipedesc);
                console.log(rdesc);
                rins=  ValidateReceipeIns(recipeinstructions);
                console.log(rins);

                /*


                */

                if(rname && rimg && rprep && rser && rytube && rdesc && rins)
                {
                     return true;
                }
                else
                {
                     return false;
                }

          



}

function   ValidateReceipeName(recipeName)
              {    

                  rname=false;
                console.log("Function recipeName called");

                  //alert ("Function 1 called");

                  const errorDiv = document.querySelector(".error-div");
                  let errorMessage = "";

                   const alphaOnlyRegex = /^[a-zA-Z ]+$/;

                // Validate recipe name
                  if (recipeName === "")
                  {
                    errorMessage += "Please enter a valid recipe name.";
                    console.log(errorMessage);
                  //  rname=false;

                  }
                   if (!alphaOnlyRegex.test(recipeName))
                   {
                    errorMessage += "For Receipe Name only alphabets allowed";
                    console.log(errorMessage);
                  //    rname=false;

                    } 

                  if (errorMessage !== "")
                  {
                      errorDiv.innerHTML += errorMessage + "<br>";
                 //     rname=false;
                    console.log(errorMessage);

                   } 
                  else 
                  {
                    errorDiv.innerHTML = "";
                    rname= true;

                  }
     console.log("rname" +rname);

                   return rname;
           }

  
    // Validate recipe description
   function ValidateReceipeDesc(recipedesc)
   {  

                        rdesc=false;

                 console.log("Function ValidateReceipeDesc called");

                  const errorDiv = document.querySelector(".error-div");
                  let errorMessage = "";
             //   const alphaOnlyRegex = /^[a-zA-Z ,.]+$/;

              
//const alphaOnlyRegex =   /^(?![0-9]+$)[^\[\]\\\^\$\.\|\?\*\+\(\)\{\}\!@#\$%&<>"'`~;:_=\/]+$/
        

          if (recipedesc === "")
          {
                errorMessage += "Receipe Desc Field can not be empty";
                // alert(errorMessage);
                 //   rdesc=false;
                          console.log(errorMessage);

                      }
          /* if (!alphaOnlyRegex.test(recipedesc)) 
           {
            errorMessage += "Please enter a valid Recipe Description. ";
            //  alert(errorMessage);
                  //  rdesc=false;
                          console.log(errorMessage);

           }  */
           
           if (errorMessage !== "")
                  {
                      errorDiv.innerHTML += errorMessage + "<br>";
                    // alert("F2 output1"+errorMessage);
                 //   rdesc=false;
                        console.log(errorMessage);

                   } 
                  else 
                  {
                    errorDiv.innerHTML = "";
                    rdesc=true;

                  }
                  
                    console.log("Fdec" + rdesc);

    return rdesc ;
      

   }

       function ValidateReceipeIns(recipeinstructions)
    { 
                               rins=false;

                            console.log("ValidateReceipeIns");

       // const alphaOnlyRegex = /^[a-zA-Z ]+$/;
     const errorDiv = document.querySelector(".error-div");
        let errorMessage = "";
             if (recipeinstructions.trim() === "" )
               {
                        errorMessage += "Please enter a valid set of instructions..";
                        errorDiv.innerHTML += errorMessage + "<br>";
                            console.log(errorMessage);

               } 

                if (errorMessage !== "")
                  {
                      errorDiv.innerHTML += errorMessage + "<br>";
                    // alert("F2 output1"+errorMessage);
                    //   rins=false;
                        console.log(errorMessage);

                   } 
                  else 
                  {
                    errorDiv.innerHTML = "";
                    rins=true;
                  }
                                   
          console.log("rins" +rins);

         return rins;
          


    }


    function ValidatePrepTime(preptime)
    {
                  rprep   = false;

      console.log("ValidatePrepTime");

    const numericOnlyRegex = /^[0-9]+$/;
    const errorDiv = document.querySelector(".error-div");
    let errorMessage = "";

  // Validate preparation time
        if (preptime.trim() === "")
        {
           // rprep   = false;
          errorMessage += "Please enter a valid Preparation Time.";
              console.log(errorMessage);
        }
        if(!numericOnlyRegex.test(preptime)) 
        {
         // rprep   = false;
          errorMessage +=  "Only numeric values are allowed for Prep Time.";
              console.log(errorMessage);
        } 
       if (errorMessage !== "")
                  {
                      errorDiv.innerHTML += errorMessage + "<br>";
                     //  rprep=false;
                      console.log(errorMessage);

                   } 
                  else 
                  {
                    errorDiv.innerHTML = "";
                    rprep= true;
                  }
                      console.log("rprep"+rprep);

      return rprep;

   }   

     function ValidateServingSize(servingSize)
     {

                    rser   = false;

        console.log("ValidateServingSize");
        const numericOnlyRegex = /^[0-9]+$/;
           const errorDiv = document.querySelector(".error-div");
          let errorMessage = "";
          // Validate serving size

        if (servingSize.trim() === "" )
        {
         //   rser   = false;
             errorMessage +=  "Please enter a valid Serve Size.";
              console.log(errorMessage);

        }
         if(!numericOnlyRegex.test(servingSize)) 
        {
          
        //    rser    = false;
             errorMessage +=  " Only numeric values are allowed for Serving Size.";
            console.log(errorMessage);
        }
         if (errorMessage !== "")
                  {
                      errorDiv.innerHTML += errorMessage + "<br>";
                       //rser=false;
                      console.log(errorMessage);
                   } 
                  else 
                  {
                    errorDiv.innerHTML = "";
                    rser= true;

                  }

                  console.log("rser" +rser);

         return rser ;
     }

     // validate you tube url 
         function ValidateVideourl(videoUrlInput) {

                                 rytube = false;

        console.log("ValidateVideourl");

          var videoUrlInput = document.getElementById('videourlinput');

          const errorDiv = document.querySelector(".error-div");
          let errorMessage = "";

          // Add an event listener to the input to validate the value
          videoUrlInput.addEventListener('blur', () => {
            // Get the value of the input and create a regular expression to match a YouTube URL
            const videoUrl = videoUrlInput.value.trim();
            const youtubeUrlPattern = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;

            // Check if the value matches the pattern
            if (!videoUrl.match(youtubeUrlPattern)) {
              // If the value doesn't match, show the error label and add an error message
              errorMessage += "Please enter a valid YouTube URL.";
                      console.log(errorMessage);


            } else {
              // If the value matches, hide the error label
              errorDiv.innerHTML = "";
            }
          }); 

          if (errorMessage !== "") {
            errorDiv.innerHTML = errorMessage + "<br>";
                     //  rytube = false;
             console.log(errorMessage);

          } else {
           rytube = true;

          }

          console.log(rytube);

         return  rytube;
        }


function ValidateImage(recipeImage)
    { 
                rimg   = false;

        console.log("ValidateImage");

        const errorDiv = document.querySelector(".error-div");
        let errorMessage = "";

      const imageTypeRegex = /^.*\.(jpg|JPG|jpeg|JPEG|gif|GIF|png|PNG)$/;

        if (!imageTypeRegex.test(recipeImage))
         {
          
       //   rimg   = false;
            errorMessage += "Please select a valid image file for the Recipe Image field.";
             console.log(errorMessage);

         } 
         
           if (errorMessage !== "")
                  {
                      errorDiv.innerHTML += errorMessage + "<br>";
                      console.log(errorMessage);
                    //   rimg=false;

                   } 
                  else 
                  {
                    errorDiv.innerHTML = "";
                    rimg= true;
                  }
            console.log("rimg"+rimg);


       return rimg  ;

    }


