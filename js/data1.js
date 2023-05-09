$(document).ready(function() {
  var data = [];

  // Load XML data using AJAX
  $.ajax({
    url: "data.xml",
    dataType: "xml",
    success: function(xml) {
      // Parse the XML document and store the data in an array
      $(xml).find("group").each(function() {
        var name = $(this).find("name").text();
        var description = $(this).find("description").text();
        var htmlContentPath = $(this).find("htmlContentPath").text();
        data.push({
          name: name,
          description: description,
          htmlContentPath: htmlContentPath
        });
      });
    }
  });

  // Function to load recipe content from XML and display it
  function loadRecipe(recipeId) {
    // Load XML data using AJAX
    $.ajax({
      url: "data1.xml",
      dataType: "xml",
      success: function(xml) {
        // Find the recipe with the matching id
        $(xml).find("recipe[id='" + recipeId + "']").each(function() {
          // Get the recipe data
          var name = $(this).find("name").text();
          var ingredient = $(this).find("ingredient").text();
          var imageContentPath = $(this).find("imageContentPath").text();

          // Create the HTML for the recipe
          var html = "";
          html += "<div class='recipe' align='center'>";
          html += "<h3>" + name + "</h3>";
          html += "<p>" + ingredient + "</p>";
          html += "<img src='" + imageContentPath + "' style='height: 150 px; width: 150 px;'>";
          html += "</div>";

          // Display the recipe in the #webcom div
          $("#webcom").html(html);
        });
      }
    });
  }

  // Add event listener to search box
  $("#search-box").on("keyup", function() {
    var input = $(this).val().toLowerCase();
    var results = [];

    // Perform a search and store the results in an array
    if (input !== "") {
      for (var i = 0; i < data.length; i++) {
        if (data[i].name.toLowerCase().startsWith(input)) {
          results.push(data[i]);
        }
      }
    }

    // Display the results in the search results div
    var html = "";
    for (var i = 0; i < results.length; i++) {
      html += "<div class='result' align='center'>";
      html += "<h3>" + results[i].name + "</h3>";
      html += "<p>" + results[i].description + "</p>";
      html += "<a href='" + results[i].htmlContentPath + "' class='learn-more' id='" + results[i].name + "'>Learn More</a>";
      html += "</div>";
    }
    $("#webcom").html(html);
  });

  // Load recipe content when "Learn More" link is clicked
  $("#webcom").on("click", ".learn-more", function(e) {
    e.preventDefault();
    var recipeId = $(this).attr("id");
    loadRecipe(recipeId);
  });

  // Clear search results when search bar is empty
  $("#search-box").on("change keyup", function() {
    if ($(this).val() === "") {
      $("#webcom").empty();
    }
  });
});
