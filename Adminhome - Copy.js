$(document).ready(function() {

  // code to be executed when the DOM is ready

  showpendingapprovereceipes();

});

function  showpendingapprovereceipes()
{

// AJAX request to retrieve recipe data from the server
var xhr = new XMLHttpRequest();
xhr.open("GET", "showallpendingreceipes.php?status=pending");
xhr.responseType = "json";
xhr.onload = function() {
    if (xhr.response === null) {

      console.log("Null Response");
      // Redirect to login page
      // window.location.href = "login.html";
    } 
    else 
    {
      // check the JSON return outcome 
      var status = xhr.response.status;

      console.log("CHecking");
      console.log(status);
      if (status === "pending") 
      {
        // display data in a table  

        console.log("Pending");

                console.log(xhr.response.data);

                // show  your data

                //    var container = document.querySelector('.receipecontainerfirst');
                    var container = document.getElementById('table1');

                    var paginationContainer = document.createElement('div');

                     // Create a table to hold the recipe data
                      var table = document.createElement('table');
                      // Set margin of table to 0
                      table.style.margin = '0';


                      // Define the number of recipes to show per page
                      var recipesPerPage = 10;

                      // Add rows to the table for each recipe
                      var recipes = xhr.response.data;
                      console.log("Receip");
                      console.log(recipes);
                      var numPages = Math.ceil(recipes.length / recipesPerPage);
                      console.log("numpages");
                      console.log(numPages);
                      var currentPage = 1;

                         function showPage(page)
                           {

                               var recipes = xhr.response.data;
                      console.log("Receip");
                      console.log(recipes);
                      var numPages = Math.ceil(recipes.length / recipesPerPage);
                      console.log("numpages");
                      console.log(numPages);
                      var currentPage = 1;

                        // Clear the table body
                       // table.innerHTML = '';
                              console.log("Showpage calling");
                // Calculate the start and end index of the recipes to show on the current page
                var startIndex = (page - 1) * recipesPerPage;
                console.log("Start Index");
                console.log(startIndex);

                var endIndex = Math.min(startIndex + recipesPerPage, recipes.length);
                 console.log("end Index ");
                console.log(endIndex);

               // Add a header row to the table
                    var headerRow = document.createElement('tr');
                    var numberHeader = document.createElement('th');
                    var nameHeader = document.createElement('th');
                    var dateHeader = document.createElement('th');
                    var statusheader = document.createElement('th');
                    var createdbyheader = document.createElement('th');
                    var editHeader = document.createElement('th');
                    var deleteHeader = document.createElement('th');

                    numberHeader.textContent = 'Number';
                    nameHeader.textContent = 'Recipe Name';
                    dateHeader.textContent = 'Created Date';
                    statusheader.textContent = 'Status';
                    createdbyheader.textContent ='Created By';
                    editHeader.textContent = 'Check';
                    deleteHeader.textContent = 'Delete';

                    headerRow.appendChild(numberHeader);
                    headerRow.appendChild(nameHeader);
                    headerRow.appendChild(dateHeader);
                    headerRow.appendChild(statusheader);
                    headerRow.appendChild(createdbyheader);
                    headerRow.appendChild(editHeader);
                    headerRow.appendChild(deleteHeader);

                     table.appendChild(headerRow);

                    // Add rows to the table for the recipes on the current page
                    for (var i = startIndex; i < endIndex; i++) {


                      console.log("For Loop");
                      var recipe = recipes[i];
                      var row = document.createElement('tr');
                      var numberCell = document.createElement('td');
                      var nameCell = document.createElement('td');
                      var dateCell = document.createElement('td');
                      var statusCell = document.createElement('td');
                      var createdbyCell = document.createElement('td');
                      var editCell = document.createElement('td');

                      numberCell.textContent = i + 1;
                      nameCell.textContent = recipe.Receipe_Name;
                      dateCell.textContent = recipe.CreatedDate;

                    if (recipe.Status === "Pending") {
                      statusCell.textContent = recipe.Status;
                      statusCell.style.color = "red"; // set color to red for pending status
                    } else {
                      statusCell.textContent = recipe.Status;
                    }

                  createdbyCell.textContent = recipe.Createdby;
                  editCell.innerHTML = '<button onclick="viewRecipe(' + recipe.Receipe_Id + ')">View</button>';

                  row.appendChild(numberCell);
                  row.appendChild(nameCell);
                  row.appendChild(dateCell);
                  row.appendChild(statusCell);
                  row.appendChild(createdbyCell);
                  row.appendChild(editCell);
                  table.appendChild(row);
              } //  end for 

                    // Clear the pagination container
              paginationContainer.innerHTML = '';
              
                       var recipes = xhr.response.data;
                      console.log("Receip");
                      console.log(recipes);
                      var numPages = Math.ceil(recipes.length / recipesPerPage);
                      console.log("numpages");
                      console.log(numPages);
                      var currentPage = 1;
                                // Add pagination links to the pagination container
                    for (var i = 1; i <= numPages; i++) {
                      console.log("Seconf for Loop");
                      var link = document.createElement('a');
                      link.textContent = i;
                      if (i === page) {
                        link.className = 'active';
                      } else {
                        link.href = '#';
                        link.onclick = (function(i) {
                          return function() {
                            showPage(i);
                          };
                        })(i);
                      }
                      paginationContainer.appendChild(link);
                    }

            } // end show page  function

              container.appendChild(paginationContainer);



                // end your show data 
       
      } else {

        console.log("Main errr");
        // display error message
        //var errorMessage = xhr.response.data;
    //    var errorDiv = document.createElement("div");
     //   errorDiv.innerHTML = errorMessage;
      //  document.body.appendChild(errorDiv);
      }
    }
  
};
xhr.send();



}




function viewRecipe(recipeId) {
  window.location.href = 'Showpendingreceipe.html?recipe_id=' + recipeId;
}
