
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
                  const cookTime = document.getElementById("recipe_cook_time").value;
                  const servingSize = document.getElementById("recipe_serving_size").value;
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
                rcook =  ValidateCookTime(cookTime);
                rser= ValidateServingSize(servingSize);

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

       

          if (rname && rauthor && rdesc && rins && rimg && rprep && rcook && rser && ring && rquantity)
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
            alert("Please enter an quantity for Row " + "."+ i);
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
                // Validate recipe name
                  if (recipeName === "" || !alphaOnlyRegex.test(recipeName))
                   {
                    alert("Please enter a valid recipe name (only alphabets allowed).");
                    rname=false;
                    
                  } 
                  else
                  {
                      rname  = true;
                  }
                   return rname ;

              }

  // Validate recipe author
          function ValidateReceipeAuthor(recipeAuthor)
          {
                const alphaOnlyRegex = /^[a-zA-Z ]+$/;

              if (recipeAuthor.trim() === "" || !alphaOnlyRegex.test(recipeAuthor)) 
              {
                alert("Please enter a valid Recipe Author. Only alphabets and spaces are allowed.");
                 rauthor  = false;
              } 
              else
                  {
                      rauthor  = true;
                  }
               return rauthor ;

          }
  
    // Validate recipe description
   function ValidateReceipeDesc(recipeDesc)
   {
          const alphaOnlyRegex = /^[a-zA-Z ]+$/;

          if (recipeDesc.trim() === "" || !alphaOnlyRegex.test(recipeDesc)) 
      {
      alert("Please enter a valid Recipe Description. Only alphabets and spaces are allowed.");
       rdesc   = false;
        } 
              else
                  {
                      rdesc   = true;
                  }
    return rdesc ;


   }

       function ValidateReceipeIns(instructions)
    {
       // const alphaOnlyRegex = /^[a-zA-Z ]+$/;
         if (instructions.trim() === "" )
       {
        alert("Please enter a valid set of instructions..");
        rins = false;
        } 
              else
                  {
                      rins   = true;
                  }
         return rins  ;

    }

    function ValidateImage(recipeImage)
    {
      const imageTypeRegex = /^.*\.(jpg|JPG|jpeg|JPEG|gif|GIF|png|PNG)$/;

        if (!imageTypeRegex.test(recipeImage))
       {
        alert("Please select a valid image file for the Recipe Image field.");
        rimg   = false;
       } 
        else
       {
         rimg   = true;
        }
       return rimg  ;

    }

                 
 function ValidatePrepTime(prepTime)
    {

    const numericOnlyRegex = /^[0-9]+$/;

  // Validate preparation time
      if (prepTime.trim() === "" || !numericOnlyRegex.test(prepTime)) 
      {
        alert("Please enter a valid Preparation Time. Only numeric values are allowed.");
        rprep   = false;
      } 
              else
                  {
                      rprep   = true;
                  }
      return rprep;

   }   
 
   function ValidateCookTime(cookTime)
    {

          const numericOnlyRegex = /^[0-9]+$/;

  // Validate cook time
          if (cookTime.trim() === "" || !numericOnlyRegex.test(cookTime))
           {
            alert("Please enter a valid Cook Time. Only numeric values are allowed.");
            rcook   = false;
            return rcook;
          }
          else
          {
                rcook   = true;
          }
         return rcook;

  }
    
    
     function ValidateServingSize(servingSize)
     {


       const numericOnlyRegex = /^[0-9]+$/;

  // Validate serving size
        if (servingSize.trim() === "" || !numericOnlyRegex.test(servingSize)) 
        {
          alert("Please enter a valid Serving Size. Only numeric values are allowed.");
            rser    = false;
            return rser ;
        }
        else
          {
                rser    = true;
          }
         return rser ;
     }




          } // end main function  
          
 