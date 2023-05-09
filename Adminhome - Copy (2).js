$(document).ready(function() {

  // code to be executed when the DOM is ready

 // showpendingapprovereceipes();
  showrejectedreceipes ();
  showrapprovedreceipes ();

});



function  showpendingapprovereceipes()
{

// AJAX request to retrieve recipe data from the server
var xhr = new XMLHttpRequest();
//xhr.open("GET", "get_receipes.php");
xhr.open("GET", "showallpendingreceipes.php?status=pending");

xhr.responseType = "json";
xhr.onload = function() {
  if (xhr.status === 200) 
  {   
      if (xhr.response === null) 
      {
          // Redirect to login page
         // window.location.href = "login.html";
        console.log("Null Response");
      }


      else if (xhr.response.status === "pending")
      {
 //   var container = document.querySelector('.receipecontainer');
                    var container = document.getElementById('table1');

          var paginationContainer = document.createElement('div');


    // Create a table to hold the recipe data
    var table = document.createElement('table');

   
    // Define the number of recipes to show per page
    var recipesPerPage = 10;

    // Add rows to the table for each recipe
    var recipes = xhr.response.data;
    var numPages = Math.ceil(recipes.length / recipesPerPage);
    var currentPage = 1;

    function showPage(page) {
      // Clear the table body
      table.innerHTML = '';

      // Calculate the start and end index of the recipes to show on the current page
      var startIndex = (page - 1) * recipesPerPage;
      var endIndex = Math.min(startIndex + recipesPerPage, recipes.length);

       // Add a header row to the table
            var headerRow = document.createElement('tr');
            var numberHeader = document.createElement('th');
            var nameHeader = document.createElement('th');
            var dateHeader = document.createElement('th');
            var statusheader = document.createElement('th');
            var editHeader = document.createElement('th');
            var deleteHeader = document.createElement('th');

            numberHeader.textContent = 'Number';
            nameHeader.textContent = 'Recipe Name';
            dateHeader.textContent = 'Created Date';
            statusheader.textContent = 'Status';
            editHeader.textContent = 'Edit';
            deleteHeader.textContent = 'Delete';

            headerRow.appendChild(numberHeader);
            headerRow.appendChild(nameHeader);
            headerRow.appendChild(dateHeader);
            headerRow.appendChild(statusheader);
            headerRow.appendChild(editHeader);
            headerRow.appendChild(deleteHeader);

                table.appendChild(headerRow);

      // Add rows to the table for the recipes on the current page
      for (var i = startIndex; i < endIndex; i++) {
        var recipe = recipes[i];
        var row = document.createElement('tr');
        var numberCell = document.createElement('td');
        var nameCell = document.createElement('td');
        var dateCell = document.createElement('td');
        var statusCell = document.createElement('td');
        var editCell = document.createElement('td');
        var deleteCell = document.createElement('td');

        numberCell.textContent = i + 1;
        nameCell.textContent = recipe.Receipe_Name;
        dateCell.textContent = recipe.CreatedDate;
        if (recipe.Status === "Pending") {
          statusCell.textContent = recipe.Status;
          statusCell.style.color = "red"; // set color to red for pending status
        } else {
          statusCell.textContent = recipe.Status;
        }

        editCell.innerHTML = '<button onclick="editRecipe(' + recipe.Receipe_Id + ')">Edit</button>';
        deleteCell.innerHTML = '<button onclick="deleteRecipe(' + recipe.Receipe_Id + ')">Delete</button>';

        row.appendChild(numberCell);
        row.appendChild(nameCell);
        row.appendChild(dateCell);
        row.appendChild(statusCell);
        row.appendChild(editCell);
        row.appendChild(deleteCell);
        table.appendChild(row);
      }

        // Clear the pagination container
  paginationContainer.innerHTML = '';

            // Add pagination links to the pagination container
for (var i = 1; i <= numPages; i++) {
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

            } // end show page  


                   container.appendChild(paginationContainer);
      }
    else
    {
      console.log("Other status");
    }
        } // end if 200
  else {
    console.error("Failed to retrieve recipe data 200 error: " + xhr.statusText);
   //   window.location.href = 'login.html';

  }
      // Show the first page of recipes

container.appendChild(table);
          showPage(currentPage);

};
xhr.send();

}




function  showrejectedreceipes()
{

// AJAX request to retrieve recipe data from the server
var xhr = new XMLHttpRequest();
//xhr.open("GET", "get_receipes.php");
xhr.open("GET", "showallpendingreceipes.php?status=rejected");

xhr.responseType = "json";
xhr.onload = function() {
  if (xhr.status === 200) 
  {   
      if (xhr.response === null) 
      {
          // Redirect to login page
         // window.location.href = "login.html";
        console.log("Null Response");
      }


      else if (xhr.response.status === "rejected")
      {
 //   var container = document.querySelector('.receipecontainer');
                    var container = document.getElementById('table3');

          var paginationContainer = document.createElement('div');


    // Create a table to hold the recipe data
    var table = document.createElement('table');

   
    // Define the number of recipes to show per page
    var recipesPerPage = 10;

    // Add rows to the table for each recipe
    var recipes = xhr.response.data;
    var numPages = Math.ceil(recipes.length / recipesPerPage);
    var currentPage = 1;

    function showPage(page) {
      // Clear the table body
      table.innerHTML = '';

      // Calculate the start and end index of the recipes to show on the current page
      var startIndex = (page - 1) * recipesPerPage;
      var endIndex = Math.min(startIndex + recipesPerPage, recipes.length);

       // Add a header row to the table
            var headerRow = document.createElement('tr');
            var numberHeader = document.createElement('th');
            var nameHeader = document.createElement('th');
            var dateHeader = document.createElement('th');
            var statusheader = document.createElement('th');
            var editHeader = document.createElement('th');
            var deleteHeader = document.createElement('th');

            numberHeader.textContent = 'Number';
            nameHeader.textContent = 'Recipe Name';
            dateHeader.textContent = 'Created Date';
            statusheader.textContent = 'Status';
            editHeader.textContent = 'Edit';
            deleteHeader.textContent = 'Delete';

            headerRow.appendChild(numberHeader);
            headerRow.appendChild(nameHeader);
            headerRow.appendChild(dateHeader);
            headerRow.appendChild(statusheader);
            headerRow.appendChild(editHeader);
            headerRow.appendChild(deleteHeader);

                table.appendChild(headerRow);

      // Add rows to the table for the recipes on the current page
      for (var i = startIndex; i < endIndex; i++) {
        var recipe = recipes[i];
        var row = document.createElement('tr');
        var numberCell = document.createElement('td');
        var nameCell = document.createElement('td');
        var dateCell = document.createElement('td');
        var statusCell = document.createElement('td');
        var editCell = document.createElement('td');
        var deleteCell = document.createElement('td');

        numberCell.textContent = i + 1;
        nameCell.textContent = recipe.Receipe_Name;
        dateCell.textContent = recipe.CreatedDate;
        if (recipe.Status === "Pending") {
          statusCell.textContent = recipe.Status;
          statusCell.style.color = "red"; // set color to red for pending status
        } else {
          statusCell.textContent = recipe.Status;
        }

        editCell.innerHTML = '<button onclick="editRecipe(' + recipe.Receipe_Id + ')">Edit</button>';
        deleteCell.innerHTML = '<button onclick="deleteRecipe(' + recipe.Receipe_Id + ')">Delete</button>';

        row.appendChild(numberCell);
        row.appendChild(nameCell);
        row.appendChild(dateCell);
        row.appendChild(statusCell);
        row.appendChild(editCell);
        row.appendChild(deleteCell);
        table.appendChild(row);
      }

        // Clear the pagination container
  paginationContainer.innerHTML = '';

            // Add pagination links to the pagination container
for (var i = 1; i <= numPages; i++) {
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

            } // end show page  


                   container.appendChild(paginationContainer);
      }
    else
    {
      console.log("Other status");
    }
        } // end if 200
  else {
    console.error("Failed to retrieve recipe data 200 error: " + xhr.statusText);
   //   window.location.href = 'login.html';

  }
      // Show the first page of recipes

container.appendChild(table);
          showPage(currentPage);

};
xhr.send();

}



function  showrapprovedreceipes()
{

// AJAX request to retrieve recipe data from the server
var xhr = new XMLHttpRequest();
//xhr.open("GET", "get_receipes.php");
xhr.open("GET", "showallpendingreceipes.php?status=Approved");

xhr.responseType = "json";
xhr.onload = function() {
  if (xhr.status === 200) 
  {   
      if (xhr.response === null) 
      {
          // Redirect to login page
         // window.location.href = "login.html";
        console.log("Null Response");
      }


      else if (xhr.response.status === "Approved")
      {
 //   var container = document.querySelector('.receipecontainer');
                    var container = document.getElementById('table2');

          var paginationContainer = document.createElement('div');


    // Create a table to hold the recipe data
    var table = document.createElement('table');

   
    // Define the number of recipes to show per page
    var recipesPerPage = 10;

    // Add rows to the table for each recipe
    var recipes = xhr.response.data;
    var numPages = Math.ceil(recipes.length / recipesPerPage);
    var currentPage = 1;

    function showPage(page) {
      // Clear the table body
      table.innerHTML = '';

      // Calculate the start and end index of the recipes to show on the current page
      var startIndex = (page - 1) * recipesPerPage;
      var endIndex = Math.min(startIndex + recipesPerPage, recipes.length);

       // Add a header row to the table
            var headerRow = document.createElement('tr');
            var numberHeader = document.createElement('th');
            var nameHeader = document.createElement('th');
            var dateHeader = document.createElement('th');
            var statusheader = document.createElement('th');
            var editHeader = document.createElement('th');
            var deleteHeader = document.createElement('th');

            numberHeader.textContent = 'Number';
            nameHeader.textContent = 'Recipe Name';
            dateHeader.textContent = 'Created Date';
            statusheader.textContent = 'Status';
            editHeader.textContent = 'Edit';
            deleteHeader.textContent = 'Delete';

            headerRow.appendChild(numberHeader);
            headerRow.appendChild(nameHeader);
            headerRow.appendChild(dateHeader);
            headerRow.appendChild(statusheader);
            headerRow.appendChild(editHeader);
            headerRow.appendChild(deleteHeader);

                table.appendChild(headerRow);

      // Add rows to the table for the recipes on the current page
      for (var i = startIndex; i < endIndex; i++) {
        var recipe = recipes[i];
        var row = document.createElement('tr');
        var numberCell = document.createElement('td');
        var nameCell = document.createElement('td');
        var dateCell = document.createElement('td');
        var statusCell = document.createElement('td');
        var editCell = document.createElement('td');
        var deleteCell = document.createElement('td');

        numberCell.textContent = i + 1;
        nameCell.textContent = recipe.Receipe_Name;
        dateCell.textContent = recipe.CreatedDate;
        if (recipe.Status === "Pending") {
          statusCell.textContent = recipe.Status;
          statusCell.style.color = "red"; // set color to red for pending status
        } else {
          statusCell.textContent = recipe.Status;
        }

        editCell.innerHTML = '<button onclick="editRecipe(' + recipe.Receipe_Id + ')">Edit</button>';
        deleteCell.innerHTML = '<button onclick="deleteRecipe(' + recipe.Receipe_Id + ')">Delete</button>';

        row.appendChild(numberCell);
        row.appendChild(nameCell);
        row.appendChild(dateCell);
        row.appendChild(statusCell);
        row.appendChild(editCell);
        row.appendChild(deleteCell);
        table.appendChild(row);
      }

        // Clear the pagination container
  paginationContainer.innerHTML = '';

            // Add pagination links to the pagination container
for (var i = 1; i <= numPages; i++) {
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

            } // end show page  


                   container.appendChild(paginationContainer);
      }
    else
    {
      console.log("Other status");
    }
        } // end if 200
  else {
    console.error("Failed to retrieve recipe data 200 error: " + xhr.statusText);
   //   window.location.href = 'login.html';

  }
      // Show the first page of recipes

container.appendChild(table);
          showPage(currentPage);

};
xhr.send();

}

function viewRecipe(recipeId) {
  window.location.href = 'Showpendingreceipe.html?recipe_id=' + recipeId;
}
