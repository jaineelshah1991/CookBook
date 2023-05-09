

$(document).ready(function() {


const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get('recipe_id');

console.log("Query string:", window.location.search);
console.log("Recipe ID:", recipeId);


var user_type = getCookie('user_type');
var subscription_type = getCookie('subscription_type');
var user_id = getCookie('user_id');

// If recipeId is null or undefined, redirect to login page
if (!recipeId) {
  alert("Receipe ID not found");
 // window.location.href = 'login.html';
}
else
{
      showupdateingrident(recipeId);

}



  });


function showupdateingrident(recipeId)
{ 

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'showupdateingridentdata.php?recipe_id=' + recipeId);

    xhr.onload = function() {

        if (xhr.status === 200) {

            if (xhr.responseText === '') 
            {
                console.log("No data JSOn");
            } 
            else
            { 
                console.log(xhr.responseText)
                const data = JSON.parse(xhr.responseText);
                const formContainer = document.getElementById('form-container');
                const form = createForm(data);
                formContainer.appendChild(form);
            }   
        } 
        else {
          console.log('Error: ' + xhr.status);
        }
    };
    xhr.send();
} // end function 


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


function createNewRow(index, table) {

  console.log(index);
  console.log(table);
  let i;
  const tr = document.createElement('tr');
  i =index;
    console.log(i); // add this line


 // Hidden ID field
      const idTd = document.createElement('td');
const idInput = document.createElement('input');
idInput.type = 'hidden';
idInput.name = `id[${i}]`;
idInput.value = '';
idTd.style.display = 'none';

idTd.appendChild(idInput);

// Add the td elements to the row
tr.appendChild(idTd);


  // Ingredient Name input
  const ingredientTd = document.createElement('td');
  const ingredientInput = document.createElement('input');
  ingredientInput.type = 'text';
  //ingredientInput.name = `ingredient-${index}`;
 // ingredientInput.name = `ingredient[${index}]`;
  ingredientInput.name = `ingredient[${i}]`;
  console.log(ingredientInput.name); // add this line

  ingredientInput.value = '';
  ingredientTd.appendChild(ingredientInput);
  tr.appendChild(ingredientTd);

  // Quantity input
  const quantityTd = document.createElement('td');
  const quantityInput = document.createElement('input');
  quantityInput.type = 'text';
  //quantityInput.name = `quantity-${index}`;
 // quantityInput.name = `quantity[${index}]`;
  quantityInput.name = `quantity[${i}]`;

  quantityInput.value = '';
  quantityTd.appendChild(quantityInput);
  tr.appendChild(quantityTd);

  // Measure select
  const measureTd = document.createElement('td');
  const measureSelect = document.createElement('select');
 // measureSelect.name = `measure-${index}`;
 //   measureSelect.name = `measure[${index}]`;
    measureSelect.name = `measure[${i}]`;

  const measureOptions = [
    {value: 'LBS', label: 'LBS'},
    {value: 'TBSP', label: 'TBSP'},
    {value: 'TSP', label: 'TSP'},
    {value: 'CUP', label: 'CUP'},
    {value: 'Ounce', label: 'Ounce'},
    {value: 'None', label: 'None'}
  ];
  measureOptions.forEach(option => {
    const measureOption = document.createElement('option');
    measureOption.value = option.value;
    measureOption.textContent = option.label;
    measureSelect.appendChild(measureOption);
  });
  measureTd.appendChild(measureSelect);
  tr.appendChild(measureTd);

  // Remove button
  const removeButtonTd = document.createElement('td');
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Delete';
  removeButton.classList.add('button');

  removeButton.addEventListener('click', () => {
    table.removeChild(tr);
  });

  removeButtonTd.appendChild(removeButton);
  tr.appendChild(removeButtonTd);

  return tr;


}




function createForm(data) {

  // Create the form element
  const form = document.createElement('form');
  form.action = 'editingridents.php';
  form.method = 'POST';
  form.classList.add('recipe-form');

  // Create the table element
  const table = document.createElement('table');
    table.classList.add('my-table-class');

  // Create the table headers
  const headers = ['Ingredient Name', 'Quantity', 'Measure', 'Actions'];

  //const headers = [' ','Ingredient Name', 'Quantity', 'Measure', 'Actions'];
  const headerRow = document.createElement('tr');
  headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  // Create the table rows
  data.forEach((ingredient, i) => {
    const tr = document.createElement('tr');


    // Hidden ID field
      const idTd = document.createElement('td');
const idInput = document.createElement('input');
idInput.type = 'hidden';
idInput.name = `id[${i}]`;
idInput.value = ingredient.Rep_ingId;
idTd.style.display = 'none';

idTd.appendChild(idInput);

// Add the td elements to the row
tr.appendChild(idTd);


    // Ingredient Name input
    const ingredientTd = document.createElement('td');
    const ingredientInput = document.createElement('input');
    ingredientInput.type = 'text';
    ingredientInput.name = `ingredient[${i}]`;
    ingredientInput.value = ingredient.Ingridients_Name;
    ingredientTd.appendChild(ingredientInput);
    tr.appendChild(ingredientTd);

    // Quantity input
    const quantityTd = document.createElement('td');
    const quantityInput = document.createElement('input');
    quantityInput.type = 'text';
    quantityInput.name = `quantity[${i}]`;
    quantityInput.value = ingredient.Quantity;
    quantityTd.appendChild(quantityInput);
    tr.appendChild(quantityTd);

    // Measure select
    const measureTd = document.createElement('td');
    const measureSelect = document.createElement('select');
    measureSelect.name = `measure[${i}]`;
    const measureOptions = [
      {value: 'LBS', label: 'LBS'},
      {value: 'TBSP', label: 'TBSP'},
      {value: 'TSP', label: 'TSP'},
      {value: 'CUP', label: 'CUP'},
      {value: 'Ounce', label: 'Ounce'},
      {value: 'None', label: 'None'}
    ];
    measureOptions.forEach(option => {
      const measureOption = document.createElement('option');
      measureOption.value = option.value;
      measureOption.textContent = option.label;
      if (option.value === ingredient.Measure) {
        measureOption.selected = true;
      }
      measureSelect.appendChild(measureOption);
    });
    measureTd.appendChild(measureSelect);
    tr.appendChild(measureTd);

    // Delete button
    const deleteButtonTd = document.createElement('td');
    deleteButtonTd.style.textAlign = 'center'; // Add this line to center the delete button

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('button');


    deleteButton.addEventListener('click', () => {
      const rowIndex = tr.rowIndex;
      const totalRows = table.rows.length;

      // Get the value of the hidden ID input field in the same row
  const hiddenInput = tr.querySelector('input[type="hidden"]');
  const idValue = hiddenInput.value;
  console.log(idValue);

      // Remove row from the table
      tr.remove();

          // Make an AJAX request to delete the record from the database
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'deleteingridents.php');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onload = function() {
        // Handle response from the server
        console.log(xhr.responseText);
      };
      xhr.send(`id=${idValue}`);



      // Update index of rows after the deleted row
      for (let i = rowIndex; i < totalRows - 1; i++) {
        const row = table.rows[i];
        const inputs = row.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
          const inputName = input.name.replace(/\d+/, i);
          input.name = inputName;
        });
      }
    }); // delete button event 


    deleteButtonTd.appendChild(deleteButton);
    tr.appendChild(deleteButtonTd);

    table.appendChild(tr);
  });  // end loop data

    

           // Add row button
         const buttonTd = document.createElement('td');
         buttonTd.style.border = 'none';

         const buttonDiv = document.createElement('div');
         buttonDiv.style.display = 'flex';
         buttonDiv.style.justifyContent = 'space-between';

    const addRowButton = document.createElement('submit');
    addRowButton.textContent = 'Add Ingredient';
    addRowButton.type = 'button';
   // addRowButton.classList.add('button', 'button--primary');
    addRowButton.classList.add('button');


    addRowButton.addEventListener('click', () => {

console.log("New code over");
  const numRows = table.rows.length; // Get the total number of rows in the table
    console.log("no" +numRows);



  const lastRow = numRows - 1;
  console .log("Last row" + lastRow);
  const newRow = createNewRow(lastRow, table);
  
    table.appendChild(newRow);



});

    // Add Ingredient button container
 //   const addIngredientContainer = document.createElement('div');
 //   addIngredientContainer.appendChild(addRowButton);

  buttonDiv.appendChild(addRowButton);
    buttonTd.appendChild(buttonDiv);

    table.appendChild(buttonTd);
             
     // Submit button
const submitButton = document.createElement('button');
submitButton.type = 'button';
submitButton.textContent = 'Submit';
submitButton.classList.add('button');

//submitButton.classList.add('button', 'button--secondary', 'ml-4'); // add ml-4 for left margin
//addIngredientContainer.appendChild(submitButton);

buttonDiv.appendChild(submitButton);
buttonTd.appendChild(buttonDiv);


// Add click event listener to submit button
submitButton.addEventListener('click', () => {

  if(validateForm())
  {
      form.submit();

  }
  else
  {
    console.log("False");
  }
  // Manually trigger form submission
});

     // Form submit event listener
        form.addEventListener('submit', (event) => {
         event.preventDefault();
         console.log('Form submitted');
  // Add your code here to submit the form data to the PHP page
     
           window.location.href = 'editingridents.php';

         });

const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get('recipe_id');

console.log("Query string:", window.location.search);
console.log("Recipe ID:", recipeId);

// Create a new hidden input field
const newField = document.createElement("input");
newField.setAttribute("type", "hidden");
newField.setAttribute("name", "hf1");
newField.setAttribute("value", recipeId);


// Append the new field to the form
form.appendChild(newField);


          // Append elements to the form
                        form.appendChild(table);

            form.appendChild(buttonTd);


    return form;

}

function validateForm()
{
    let isValid = false; // Initialize isValid to true

  const table = document.querySelector('table');
  const total = table.rows.length; // Get the total number of rows in the table

 
           
for (i = 0; i < total; i++) {
  const ingredientElements = document.getElementsByName(`ingredient[${i}]`);
  const quantityElements = document.getElementsByName(`quantity[${i}]`);

  if (ingredientElements.length > 0 && quantityElements.length > 0) {
    const ingredient = ingredientElements[0].value.trim();
    const quantity = quantityElements[0].value.trim();

    const ring = validateFieldsING(ingredient, i);
    const rquantity = validateFieldsQuantity(quantity, i);

    console.log(ingredient);
    console.log(quantity);

    if (!ring || !rquantity)
    {
        isValid = false;
    } 
    else
    {
        isValid = true;
    }
  }
}
  
    return isValid; // Return the value of isValid

}

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
            console.log("Please enter an ingredient name for Row");
          
           }
           else if (!ingredientRegex.test(ingredient)) 
           {
            isValid = false;
            alert("ingredient name  should be in Alphabets for Row " + "."+ a);
            console.log("Please enter an ingredient name for Row" + "."+ a);

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