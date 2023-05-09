
$(document).ready(function() {
 

  // use the variables to populate HTML elements or make other decisions
   // alert("HI");
   showallApetizers();
   showallMainDish();
   showallBread();
   showallSalad();
 // showallSoups();
 // showallSnacks();
});


function searchRecipes() {
  const searchTerm = document.getElementById("search-box").value.toLowerCase();
  const resultsContainer = document.getElementById("search-results");
  const recipeDiv = document.createElement("div");

  // Clear previous search results
  resultsContainer.innerHTML = "";

  // Make an AJAX request to the server-side script with the search term as a parameter
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `search_recipes.php?searchTerm=${searchTerm}`);
  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);

        if (response.Status == "No")
        {
                  resultsContainer.innerHTML = response.data;

        }
        else
        {

        const isLoggedIn = checkLoginStatus();
        response.data.forEach(recipe => {
          recipeDiv.classList.add("list-group-item");

          const recipeImage = document.createElement("img");
          recipeImage.classList.add("img-thumbnail");
          recipeImage.setAttribute("src", recipe.imagepath); // Add recipe URL as a data attribute to the image
          recipeImage.addEventListener("click", () => {
            if (isLoggedIn) {
              window.location.href = 'ViewReceipe.html?recipe_id=' + recipe.Receipe_Id;
            } else {
              window.location.href = "Sign-up.html"; // Redirect to sign up page if user is not logged in
            }
          });
          recipeDiv.appendChild(recipeImage);

          const recipeName = document.createElement("h5");
          recipeName.classList.add("mb-1");
          recipeName.textContent = recipe.Receipe_Name;
          recipeDiv.appendChild(recipeName);

          const recipeLikes = document.createElement("p");
          recipeLikes.classList.add("mb-0");
          recipeLikes.textContent = `Likes: ${recipe.like_count}`;
          recipeDiv.appendChild(recipeLikes);

          resultsContainer.appendChild(recipeDiv);
        });
      }
    } else {
      console.error(`Error: ${xhr.status} ${xhr.statusText}`);
      resultsContainer.innerHTML = "<p>No matching recipes found.</p>";
    }
  };
  xhr.send();
}



function checkLoginStatus() {

   var user_type = getCookie('user_type');
    var user_id = getCookie('user_id');

    if (user_type && user_id)
    {
      return true;
    }
    else
    {
      return false;
    }
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
  return "";
}




function showallApetizers()
 {
 


  // AJAX request to retrieve image URLs from a database
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "showallApetizers.php");
  xhr.responseType = "json";
  xhr.onload = function() {
    if (xhr.status === 200) {  


      var category1 = document.getElementById('category1');
        category1.style.display = 'block';


      var container = document.querySelector('.category-container-apetisers');
      
      // Create the Last View Recipes heading element and append it to the container
     


    // Create the images container div and append it to the container
      var imagesContainer = document.createElement('div');

       var h4 = document.createElement('h4');
      h4.textContent = 'Recipes For Appetizer';
      h4.style.marginTop = '20px'; // Add some margin to the top of the h4 element
      h4.style.textAlign = 'left'; // Center the text within the h4 element
      h4.style.color = 'blue'; // Set the text color of the h4 element to blue
        h4.style.fontSize = '32px'; // Set the font size of the h4 element to 32px
        h4.style.fontWeight = 'bold'; // Set the font weight of the h4 element to bold


      imagesContainer.appendChild(h4);


      imagesContainer.setAttribute('class', 'images-container');
      container.appendChild(imagesContainer);

    // Loop through the retrieved image URLs and create recipe elements
        var recipeList = document.createElement('div');
        recipeList.setAttribute('id', 'recipe-carousel');
        recipeList.setAttribute('class', 'carousel slide');
        recipeList.setAttribute('data-ride', 'carousel');
        imagesContainer.appendChild(recipeList);


    // Create the carousel indicators
        var indicators = document.createElement('ol');
        indicators.setAttribute('class', 'carousel-indicators');
        for (var i = 0; i < xhr.response.length; i++) {
          var indicator = document.createElement('li');
          indicator.setAttribute('data-target', '#recipe-carousel');
          indicator.setAttribute('data-slide-to', i);
          if (i === 0) {
            indicator.setAttribute('class', 'active');
          }
          indicators.appendChild(indicator);
        }
        recipeList.appendChild(indicators);

        // Create the carousel items
        var carouselInner = document.createElement('div');
        carouselInner.setAttribute('class', 'carousel-inner');
        for (var i = 0; i < xhr.response.length; i++) {
          var item = document.createElement('div');
          item.setAttribute('class', 'item');
          if (i === 0) {
            item.setAttribute('class', 'item active');
          }

                    const isLoggedIn = checkLoginStatus();



          var recipe = document.createElement('a');
        //  recipe.setAttribute('href', 'ViewReceipe.html?recipe_id=' + xhr.response[i].Receipe_Id);
          recipe.setAttribute('class', 'recipe');
          recipe.setAttribute('data-recipe-id', xhr.response[i].Receipe_Id); // add the recipe ID as a data attribute

            var Receipe_Id = xhr.response[i].Receipe_Id;
            console.log("Rep"+Receipe_Id);

          var img = document.createElement('img');
        //  img.setAttribute('src', xhr.response[i].imagepath);
          img.setAttribute('src', xhr.response[i].imagepath); // Add recipe URL as a data attribute to the image
             img.addEventListener("click", () => {
            if (isLoggedIn) {
              window.location.href = 'ViewReceipe.html?recipe_id=' + Receipe_Id;
            } else {
              alert("Please Sign-up");
              window.location.href = "Sign-up.html"; // Redirect to sign up page if user is not logged in
            }
          });


          img.setAttribute('class', 'img-responsive');
          img.setAttribute('alt', '');


          recipe.appendChild(img);
          item.appendChild(recipe);
          var caption = document.createElement('div');
          caption.setAttribute('class', 'carousel-caption');
          var recipeTitle = document.createElement('h3');
          recipeTitle.textContent = xhr.response[i].Receipe_Name;
          caption.appendChild(recipeTitle);
          item.appendChild(caption);
          carouselInner.appendChild(item);
    }
            recipeList.appendChild(carouselInner);

        // Create the carousel controls
        var prev = document.createElement('a');
        prev.setAttribute('class', 'left carousel-control');
        prev.setAttribute('href', '#recipe-carousel');
        prev.setAttribute('role', 'button');
        prev.setAttribute('data-slide', 'prev');
        var prevIcon = document.createElement('span');
        prevIcon.setAttribute('class', 'glyphicon glyphicon-chevron-left');
        prevIcon.setAttribute('aria-hidden', 'true');
        var prevLabel = document.createElement('span');
        prevLabel.setAttribute('class', 'sr-only');
        prevLabel.textContent = 'Previous';
        prev.appendChild(prevIcon);
        prev.appendChild(prevLabel);
        recipeList.appendChild(prev);
        var next = document.createElement('a');
        next.setAttribute('class', 'right carousel-control');
        next.setAttribute('href', '#recipe-carousel');
        next.setAttribute('role', 'button');
        next.setAttribute('data-slide', 'next');
        var nextIcon = document.createElement('span');
        nextIcon.setAttribute('class', 'glyphicon glyphicon-chevron-right');

          container.appendChild(recipeList);

    } 
    else {
      console.error("Failed to retrieve image URLs: " + xhr.statusText);
    }
  };
  xhr.send();
}

//  new function 


function showallMainDish()
 {
 


  // AJAX request to retrieve image URLs from a database
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "showallMainDish.php");
  xhr.responseType = "json";
  xhr.onload = function() {
    if (xhr.status === 200) {  


      var category1 = document.getElementById('category2');
        category2.style.display = 'block';


      var container = document.querySelector('.category-container-Main-Dish');
      
      // Create the Last View Recipes heading element and append it to the container
     


    // Create the images container div and append it to the container
      var imagesContainer = document.createElement('div');

       var h4 = document.createElement('h4');
      h4.textContent = 'Recipes For Main-Dish';
      h4.style.marginTop = '20px'; // Add some margin to the top of the h4 element
      h4.style.textAlign = 'left'; // Center the text within the h4 element
      h4.style.color = 'blue'; // Set the text color of the h4 element to blue
        h4.style.fontSize = '32px'; // Set the font size of the h4 element to 32px
        h4.style.fontWeight = 'bold'; // Set the font weight of the h4 element to bold


      imagesContainer.appendChild(h4);


      imagesContainer.setAttribute('class', 'images-container');
      container.appendChild(imagesContainer);

    // Loop through the retrieved image URLs and create recipe elements
        var recipeList = document.createElement('div');
        recipeList.setAttribute('id', 'recipe-carousel');
        recipeList.setAttribute('class', 'carousel slide');
        recipeList.setAttribute('data-ride', 'carousel');
        imagesContainer.appendChild(recipeList);


    // Create the carousel indicators
        var indicators = document.createElement('ol');
        indicators.setAttribute('class', 'carousel-indicators');
        for (var i = 0; i < xhr.response.length; i++) {
          var indicator = document.createElement('li');
          indicator.setAttribute('data-target', '#recipe-carousel');
          indicator.setAttribute('data-slide-to', i);
          if (i === 0) {
            indicator.setAttribute('class', 'active');
          }
          indicators.appendChild(indicator);
        }
        recipeList.appendChild(indicators);

        // Create the carousel items
        var carouselInner = document.createElement('div');
        carouselInner.setAttribute('class', 'carousel-inner');
        for (var i = 0; i < xhr.response.length; i++) {
          var item = document.createElement('div');
          item.setAttribute('class', 'item');
          if (i === 0) {
            item.setAttribute('class', 'item active');
          }

                    const isLoggedIn = checkLoginStatus();



          var recipe = document.createElement('a');
        //  recipe.setAttribute('href', 'ViewReceipe.html?recipe_id=' + xhr.response[i].Receipe_Id);
          recipe.setAttribute('class', 'recipe');
          recipe.setAttribute('data-recipe-id', xhr.response[i].Receipe_Id); // add the recipe ID as a data attribute

            var Receipe_Id = xhr.response[i].Receipe_Id;
            console.log("Rep"+Receipe_Id);

          var img = document.createElement('img');
        //  img.setAttribute('src', xhr.response[i].imagepath);
          img.setAttribute('src', xhr.response[i].imagepath); // Add recipe URL as a data attribute to the image
             img.addEventListener("click", () => {
            if (isLoggedIn) {
              window.location.href = 'ViewReceipe.html?recipe_id=' + Receipe_Id;
            } else {
              alert("Please Sign-up");
              window.location.href = "Sign-up.html"; // Redirect to sign up page if user is not logged in
            }
          });


          img.setAttribute('class', 'img-responsive');
          img.setAttribute('alt', '');


          recipe.appendChild(img);
          item.appendChild(recipe);
          var caption = document.createElement('div');
          caption.setAttribute('class', 'carousel-caption');
          var recipeTitle = document.createElement('h3');
          recipeTitle.textContent = xhr.response[i].Receipe_Name;
          caption.appendChild(recipeTitle);
          item.appendChild(caption);
          carouselInner.appendChild(item);
    }
            recipeList.appendChild(carouselInner);

        // Create the carousel controls
        var prev = document.createElement('a');
        prev.setAttribute('class', 'left carousel-control');
        prev.setAttribute('href', '#recipe-carousel');
        prev.setAttribute('role', 'button');
        prev.setAttribute('data-slide', 'prev');
        var prevIcon = document.createElement('span');
        prevIcon.setAttribute('class', 'glyphicon glyphicon-chevron-left');
        prevIcon.setAttribute('aria-hidden', 'true');
        var prevLabel = document.createElement('span');
        prevLabel.setAttribute('class', 'sr-only');
        prevLabel.textContent = 'Previous';
        prev.appendChild(prevIcon);
        prev.appendChild(prevLabel);
        recipeList.appendChild(prev);
        var next = document.createElement('a');
        next.setAttribute('class', 'right carousel-control');
        next.setAttribute('href', '#recipe-carousel');
        next.setAttribute('role', 'button');
        next.setAttribute('data-slide', 'next');
        var nextIcon = document.createElement('span');
        nextIcon.setAttribute('class', 'glyphicon glyphicon-chevron-right');

          container.appendChild(recipeList);

    } 
    else {
      console.error("Failed to retrieve image URLs: " + xhr.statusText);
    }
  };
  xhr.send();
}

// new function 

function showallBread()
 {
 


  // AJAX request to retrieve image URLs from a database
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "showallBread.php");
  xhr.responseType = "json";
  xhr.onload = function() {
    if (xhr.status === 200) {  


      var category3 = document.getElementById('category3');
        category3.style.display = 'block';


      var container = document.querySelector('.category-container-Bread');
      
      // Create the Last View Recipes heading element and append it to the container
     


    // Create the images container div and append it to the container
      var imagesContainer = document.createElement('div');

       var h4 = document.createElement('h4');
      h4.textContent = 'Recipes For Bread';
      h4.style.marginTop = '20px'; // Add some margin to the top of the h4 element
      h4.style.textAlign = 'left'; // Center the text within the h4 element
      h4.style.color = 'blue'; // Set the text color of the h4 element to blue
        h4.style.fontSize = '32px'; // Set the font size of the h4 element to 32px
        h4.style.fontWeight = 'bold'; // Set the font weight of the h4 element to bold


      imagesContainer.appendChild(h4);


      imagesContainer.setAttribute('class', 'images-container');
      container.appendChild(imagesContainer);

    // Loop through the retrieved image URLs and create recipe elements
        var recipeList = document.createElement('div');
        recipeList.setAttribute('id', 'recipe-carousel');
        recipeList.setAttribute('class', 'carousel slide');
        recipeList.setAttribute('data-ride', 'carousel');
        imagesContainer.appendChild(recipeList);


    // Create the carousel indicators
        var indicators = document.createElement('ol');
        indicators.setAttribute('class', 'carousel-indicators');
        for (var i = 0; i < xhr.response.length; i++) {
          var indicator = document.createElement('li');
          indicator.setAttribute('data-target', '#recipe-carousel');
          indicator.setAttribute('data-slide-to', i);
          if (i === 0) {
            indicator.setAttribute('class', 'active');
          }
          indicators.appendChild(indicator);
        }
        recipeList.appendChild(indicators);

        // Create the carousel items
        var carouselInner = document.createElement('div');
        carouselInner.setAttribute('class', 'carousel-inner');
        for (var i = 0; i < xhr.response.length; i++) {
          var item = document.createElement('div');
          item.setAttribute('class', 'item');
          if (i === 0) {
            item.setAttribute('class', 'item active');
          }

                    const isLoggedIn = checkLoginStatus();



          var recipe = document.createElement('a');
        //  recipe.setAttribute('href', 'ViewReceipe.html?recipe_id=' + xhr.response[i].Receipe_Id);
          recipe.setAttribute('class', 'recipe');
          recipe.setAttribute('data-recipe-id', xhr.response[i].Receipe_Id); // add the recipe ID as a data attribute

            var Receipe_Id = xhr.response[i].Receipe_Id;
            console.log("Rep"+Receipe_Id);

          var img = document.createElement('img');
        //  img.setAttribute('src', xhr.response[i].imagepath);
          img.setAttribute('src', xhr.response[i].imagepath); // Add recipe URL as a data attribute to the image
             img.addEventListener("click", () => {
            if (isLoggedIn) {
              window.location.href = 'ViewReceipe.html?recipe_id=' + Receipe_Id;
            } else {
              alert("Please Sign-up");
              window.location.href = "Sign-up.html"; // Redirect to sign up page if user is not logged in
            }
          });


          img.setAttribute('class', 'img-responsive');
          img.setAttribute('alt', '');


          recipe.appendChild(img);
          item.appendChild(recipe);
          var caption = document.createElement('div');
          caption.setAttribute('class', 'carousel-caption');
          var recipeTitle = document.createElement('h3');
          recipeTitle.textContent = xhr.response[i].Receipe_Name;
          caption.appendChild(recipeTitle);
          item.appendChild(caption);
          carouselInner.appendChild(item);
    }
            recipeList.appendChild(carouselInner);

        // Create the carousel controls
        var prev = document.createElement('a');
        prev.setAttribute('class', 'left carousel-control');
        prev.setAttribute('href', '#recipe-carousel');
        prev.setAttribute('role', 'button');
        prev.setAttribute('data-slide', 'prev');
        var prevIcon = document.createElement('span');
        prevIcon.setAttribute('class', 'glyphicon glyphicon-chevron-left');
        prevIcon.setAttribute('aria-hidden', 'true');
        var prevLabel = document.createElement('span');
        prevLabel.setAttribute('class', 'sr-only');
        prevLabel.textContent = 'Previous';
        prev.appendChild(prevIcon);
        prev.appendChild(prevLabel);
        recipeList.appendChild(prev);
        var next = document.createElement('a');
        next.setAttribute('class', 'right carousel-control');
        next.setAttribute('href', '#recipe-carousel');
        next.setAttribute('role', 'button');
        next.setAttribute('data-slide', 'next');
        var nextIcon = document.createElement('span');
        nextIcon.setAttribute('class', 'glyphicon glyphicon-chevron-right');

          container.appendChild(recipeList);

    } 
    else {
      console.error("Failed to retrieve image URLs: " + xhr.statusText);
    }
  };
  xhr.send();
}

// new function 

function showallSalad()
 {
 


  // AJAX request to retrieve image URLs from a database
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "showallSalad.php");
  xhr.responseType = "json";
  xhr.onload = function() {
    if (xhr.status === 200) {  


      var category4 = document.getElementById('category4');
        category4.style.display = 'block';


      var container = document.querySelector('.category-container-Salad');
      
      // Create the Last View Recipes heading element and append it to the container
     


    // Create the images container div and append it to the container
      var imagesContainer = document.createElement('div');

       var h4 = document.createElement('h4');
      h4.textContent = 'Recipes For Salad';
      h4.style.marginTop = '20px'; // Add some margin to the top of the h4 element
      h4.style.textAlign = 'left'; // Center the text within the h4 element
      h4.style.color = 'blue'; // Set the text color of the h4 element to blue
        h4.style.fontSize = '32px'; // Set the font size of the h4 element to 32px
        h4.style.fontWeight = 'bold'; // Set the font weight of the h4 element to bold


      imagesContainer.appendChild(h4);


      imagesContainer.setAttribute('class', 'images-container');
      container.appendChild(imagesContainer);

    // Loop through the retrieved image URLs and create recipe elements
        var recipeList = document.createElement('div');
        recipeList.setAttribute('id', 'recipe-carousel');
        recipeList.setAttribute('class', 'carousel slide');
        recipeList.setAttribute('data-ride', 'carousel');
        imagesContainer.appendChild(recipeList);


    // Create the carousel indicators
        var indicators = document.createElement('ol');
        indicators.setAttribute('class', 'carousel-indicators');
        for (var i = 0; i < xhr.response.length; i++) {
          var indicator = document.createElement('li');
          indicator.setAttribute('data-target', '#recipe-carousel');
          indicator.setAttribute('data-slide-to', i);
          if (i === 0) {
            indicator.setAttribute('class', 'active');
          }
          indicators.appendChild(indicator);
        }
        recipeList.appendChild(indicators);

        // Create the carousel items
        var carouselInner = document.createElement('div');
        carouselInner.setAttribute('class', 'carousel-inner');
        for (var i = 0; i < xhr.response.length; i++) {
          var item = document.createElement('div');
          item.setAttribute('class', 'item');
          if (i === 0) {
            item.setAttribute('class', 'item active');
          }

                    const isLoggedIn = checkLoginStatus();



          var recipe = document.createElement('a');
        //  recipe.setAttribute('href', 'ViewReceipe.html?recipe_id=' + xhr.response[i].Receipe_Id);
          recipe.setAttribute('class', 'recipe');
          recipe.setAttribute('data-recipe-id', xhr.response[i].Receipe_Id); // add the recipe ID as a data attribute

            var Receipe_Id = xhr.response[i].Receipe_Id;
            console.log("Rep"+Receipe_Id);

          var img = document.createElement('img');
        //  img.setAttribute('src', xhr.response[i].imagepath);
          img.setAttribute('src', xhr.response[i].imagepath); // Add recipe URL as a data attribute to the image
             img.addEventListener("click", () => {
            if (isLoggedIn) {
              window.location.href = 'ViewReceipe.html?recipe_id=' + Receipe_Id;
            } else {
              alert("Please Sign-up");
              window.location.href = "Sign-up.html"; // Redirect to sign up page if user is not logged in
            }
          });


          img.setAttribute('class', 'img-responsive');
          img.setAttribute('alt', '');


          recipe.appendChild(img);
          item.appendChild(recipe);
          var caption = document.createElement('div');
          caption.setAttribute('class', 'carousel-caption');
          var recipeTitle = document.createElement('h3');
          recipeTitle.textContent = xhr.response[i].Receipe_Name;
          caption.appendChild(recipeTitle);
          item.appendChild(caption);
          carouselInner.appendChild(item);
    }
            recipeList.appendChild(carouselInner);

        // Create the carousel controls
        var prev = document.createElement('a');
        prev.setAttribute('class', 'left carousel-control');
        prev.setAttribute('href', '#recipe-carousel');
        prev.setAttribute('role', 'button');
        prev.setAttribute('data-slide', 'prev');
        var prevIcon = document.createElement('span');
        prevIcon.setAttribute('class', 'glyphicon glyphicon-chevron-left');
        prevIcon.setAttribute('aria-hidden', 'true');
        var prevLabel = document.createElement('span');
        prevLabel.setAttribute('class', 'sr-only');
        prevLabel.textContent = 'Previous';
        prev.appendChild(prevIcon);
        prev.appendChild(prevLabel);
        recipeList.appendChild(prev);
        var next = document.createElement('a');
        next.setAttribute('class', 'right carousel-control');
        next.setAttribute('href', '#recipe-carousel');
        next.setAttribute('role', 'button');
        next.setAttribute('data-slide', 'next');
        var nextIcon = document.createElement('span');
        nextIcon.setAttribute('class', 'glyphicon glyphicon-chevron-right');

          container.appendChild(recipeList);

    } 
    else {
      console.error("Failed to retrieve image URLs: " + xhr.statusText);
    }
  };
  xhr.send();
}