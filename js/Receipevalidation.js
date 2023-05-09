
            function ValidateReceipeForm()
          {

             var functionStatus =rname = rauthor = rdesc = rins = rimg = rprep =rcook = rser =rtable=
  ring=rquantity = a ="";
      //  event.preventDefault();

                      // Get form input elements
                  const recipeName = document.getElementById("Rname").value;
                  const recipeAuthor = document.getElementById("recipe_author").value;
                  const recipeDesc = document.getElementById("recipe_description").value;
                  const instructions = document.getElementById("recipe_instructions").value;
                  const recipeImage = document.getElementById("fileToUpload").value;
                  const prepTime = document.getElementById("recipe_prep_time").value;
               //   const cookTime = document.getElementById("recipe_cook_time").value;
                  const servingSize = document.getElementById("recipe_serving_size").value;
                   const recipe_videourl = document.getElementById("recipe_videourl").value;

               //   const total = document.getElementById("total-rows").value;
                  const total = document.getElementById("total-rows").getAttribute("value");

              //    const  = document.getElementsByName("totalRows").value;
                               
      
                   // now all check 
           
           
           


                rname= ValidateReceipeName(recipeName);
                rauthor= ValidateReceipeAuthor(recipeAuthor);
                rdesc =ValidateReceipeDesc(recipeDesc);
                rins=  ValidateReceipeIns(instructions);
                rimg= ValidateImage(recipeImage);
                rprep= ValidatePrepTime(prepTime);
              //  rcook =  ValidateCookTime(cookTime);
                rser= ValidateServingSize(servingSize);
                ryou= ValidateVideourl(recipe_videourl);

                for (i = 0; i < total; i++)
              {
                const ingredientElements = document.getElementsByName(`ingredients[${i}]`);
                const quantityElements = document.getElementsByName(`quantities[${i}]`);

                const ingredient = ingredientElements[0].value.trim();
                const quantity = quantityElements[0].value.trim();

                 ring = validateFieldsING(ingredient, i);
                 rquantity = validateFieldsQuantity(quantity, i);

                console.log(ingredientElements);
                console.log(quantityElements);
              }
               
 console.log("Validating form...");

       

          if (rname && rauthor && rdesc && rins && rimg && rprep  && rser && ring && rquantity)
           {
               functionStatus = true;
            } 
            else
             {
                functionStatus = false;
            }

               return  functionStatus;

               //


    function validateFieldsING(ingredient,a)
 {
     // your code that may throw an error
       let isValid = true;
       console.log("row :", a);
       
       const ingredientRegex = /^[a-zA-Z\s]+$/; // Allow only letters and spaces in ingredient

           if (ingredient === '') 
           {
            isValid = false;
            alert("Please enter an ingredient name for Row " + "."+ a);
          
           }
           else if (!ingredientRegex.test(ingredient)) 
           {
            isValid = false;
            alert("ingredient name  should be in Alphabets for Row " + "."+ a);
            
           } 
          else
          {
                isValid = true;

          }
      
        return isValid;
     
} 
    


               //

 function validateFieldsQuantity(quantity,a)
 {
     // your code that may throw an error
       let isValid = true;
       console.log("row :", a);

    const quantityRegex = /^[\d*\/]+$/; // Allow only numbers, * and / in quantity

           if (quantity === '') 
           {
            isValid = false;
            alert("Please enter an quantity for Row " + "."+ a);
           }
           else if (!quantityRegex.test(quantity)) 
           {
            isValid = false;
          alert("Quanity should allow Special characters (* and /) and Numbers at row" + "."+ a);
           } 
          else
          {
                isValid = true;

          }
      
        return isValid;
     
} 
    

                   function   ValidateReceipeName(recipeName)
              {
                   const alphaOnlyRegex = /^[a-zA-Z ]+$/;
                  const recipeNameErrorLabel = document.getElementById('recipe_name_error');

                // Validate recipe name
                  if (recipeName === "")
                  {
                    rname=false;
                    const errorMessage = "Please enter a valid recipe name .";
                    recipeNameErrorLabel.innerHTML = errorMessage;
                    recipeNameErrorLabel.classList.remove('hidden');
                  }
                  else if (!alphaOnlyRegex.test(recipeName))
                   {
                    rname=false;
                    const errorMessage = "For Receipe Name only alphabets allowed";
                    recipeNameErrorLabel.innerHTML = errorMessage;
                    recipeNameErrorLabel.classList.remove('hidden');

                  } 
                  else
                  {
                      rname  = true;
                      recipeNameErrorLabel.innerHTML = "";

                  }
                   return rname ;

              }

  // Validate recipe author
          function ValidateReceipeAuthor(recipeAuthor)
          {
                const alphaOnlyRegex = /^[a-zA-Z ]+$/;
                const recipeAuthorErrorLabel = document.getElementById('recipe_author_error');
               
              if (recipeAuthor.trim() === "")
              {
                   rauthor  = false;
                  const errorMessage = "Receipe Author Field can not be empty";
                  recipeAuthorErrorLabel.innerHTML = errorMessage;
                  recipeAuthorErrorLabel.classList.remove('hidden');
              }
              else if (!alphaOnlyRegex.test(recipeAuthor)) 
              {
                rauthor  = false;
                const errorMessage = "Please enter a valid Recipe Author. Only alphabets and spaces are allowed";
                  recipeAuthorErrorLabel.innerHTML = errorMessage;
                  recipeAuthorErrorLabel.classList.remove('hidden');
              } 
              else
                  {
                      rauthor  = true;
                      recipeAuthorErrorLabel.innerHTML = "";
                  }
               return rauthor ;

          }
  
    // Validate recipe description
   function ValidateReceipeDesc(recipeDesc)
   {
          const alphaOnlyRegex = /^[a-zA-Z ]+$/;
          const recipedescErrorLabel = document.getElementById('recipe_description_error');

          if (recipeDesc.trim() === "")
          {
            rdesc   = false;
             const errorMessage = "Receipe Desc Field can not be empty";
             recipedescErrorLabel.innerHTML = errorMessage;
             recipedescErrorLabel.classList.remove('hidden');
          }
          else if (!alphaOnlyRegex.test(recipeDesc)) 
           {
            rdesc   = false;
            const errorMessage = "Please enter a valid Recipe Description. Only alphabets  are allowed";
             recipedescErrorLabel.innerHTML = errorMessage;
             recipedescErrorLabel.classList.remove('hidden');
             
           } 
          else
          {
              rdesc   = true;
              recipedescErrorLabel.innerHTML = "";

          }
    return rdesc ;


   }

       function ValidateReceipeIns(instructions)
    {
       // const alphaOnlyRegex = /^[a-zA-Z ]+$/;
       const recipeinsErrorLabel = document.getElementById('recipe_instructions_error');
             if (instructions.trim() === "" )
           {
            
            rins = false;
            const errorMessage = "Please enter a valid set of instructions..";
            recipeinsErrorLabel.innerHTML = errorMessage;
            recipeinsErrorLabel.classList.remove('hidden');
            } 
              else
                  {
                      rins   = true;
                      recipeinsErrorLabel.innerHTML = "";

                  }
         return rins;

    }

    function ValidateImage(recipeImage)
    {
      const imageTypeRegex = /^.*\.(jpg|JPG|jpeg|JPEG|gif|GIF|png|PNG)$/;
      const recipeimgErrorLabel = document.getElementById('recipe_image_error');

        if (!imageTypeRegex.test(recipeImage))
         {
          
          rimg   = false;
           const errorMessage = "Please select a valid image file for the Recipe Image field.";
          recipeimgErrorLabel.innerHTML = errorMessage;
          recipeimgErrorLabel.classList.remove('hidden');
         } 
        else
       {
         rimg   = true;
          recipeimgErrorLabel.innerHTML = "";
        }
       return rimg  ;

    }

                 
 function ValidatePrepTime(prepTime)
    {

    const numericOnlyRegex = /^[0-9]+$/;
          const recipeprepErrorLabel = document.getElementById('recipe_prep_time_error');


  // Validate preparation time
      if (prepTime.trim() === "")
      {
          rprep   = false;
        const errorMessage = "Please enter a valid Preparation Time.";
          recipeprepErrorLabel.innerHTML = errorMessage;
          recipeprepErrorLabel.classList.remove('hidden');
      }
      else  if(!numericOnlyRegex.test(prepTime)) 
      {
        rprep   = false;
        const errorMessage = "Please enter a valid Preparation Time. Only numeric values are allowed.";
          recipeprepErrorLabel.innerHTML = errorMessage;
          recipeprepErrorLabel.classList.remove('hidden');
      
      } 
              else
                  {
                      rprep   = true;
                      recipeprepErrorLabel.innerHTML = "";

                  }
      return rprep;

   }   
 /*
   function ValidateCookTime(cookTime)
    {

          const numericOnlyRegex = /^[0-9]+$/;
          const recipecookErrorLabel = document.getElementById('recipe_cook_time_error');

  // Validate cook time
          if (cookTime.trim() === "")
          {
            rcook   = false;
            const errorMessage = "Please enter a valid Cook Time.";
            recipecookErrorLabel.innerHTML = errorMessage;
            recipecookErrorLabel.classList.remove('hidden');
          }
          else if  (!numericOnlyRegex.test(cookTime))
           {
             rcook   = false;
            const errorMessage = "Please enter a valid Preparation Time. Only numeric values are allowed.";
          recipecookErrorLabel.innerHTML = errorMessage;
          recipecookErrorLabel.classList.remove('hidden');
          }

          else
          {
                rcook   = true;
                recipecookErrorLabel.innerHTML = "";

          }
         return rcook;

  }*/
    
    
     function ValidateServingSize(servingSize)
     {


       const numericOnlyRegex = /^[0-9]+$/;
   const recipecookserveErrorLabel = document.getElementById('recipe_serving_size_error');
  // Validate serving size
        if (servingSize.trim() === "" )
        {
            rcook   = false;
            const errorMessage = "Please enter a valid Serve Size.";
            recipecookserveErrorLabel.innerHTML = errorMessage;
            recipecookserveErrorLabel.classList.remove('hidden');
        }
        else if(!numericOnlyRegex.test(servingSize)) 
        {
          
            rser    = false;
            const errorMessage = "Please enter a valid Serving Size. Only numeric values are allowed.";
            recipecookserveErrorLabel.innerHTML = errorMessage;
            recipecookserveErrorLabel.classList.remove('hidden');
        }
        else
          {
                rser    = true;
                recipecookserveErrorLabel.innerHTML = "";

          }
         return rser ;
     }


            function ValidateVideourl(recipe_videourl)
            {
                        // Get the input and error label elements
          const videoUrlInput = document.getElementById('recipe_videourl');
          const videoUrlError = document.getElementById('recipe_video_url');

          // Add an event listener to the input to validate the value
          videoUrlInput.addEventListener('blur', () => {
            // Get the value of the input and create a regular expression to match a YouTube URL
            const videoUrl = videoUrlInput.value.trim();
            const youtubeUrlPattern = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;

            // Check if the value matches the pattern
            if (!videoUrl.match(youtubeUrlPattern)) {
              // If the value doesn't match, show the error label and add an error class to the input
              videoUrlError.classList.remove('hidden');
              videoUrlInput.classList.add('border-red-500');
            } else {
              // If the value matches, hide the error label and remove the error class from the input
              videoUrlError.classList.add('hidden');
              videoUrlInput.classList.remove('border-red-500');
            }
});
            }


          } // end main function  
          
 