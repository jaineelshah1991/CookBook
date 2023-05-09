// Load JSON data using AJAX
$.getJSON("recipes.json", function(data) {
    var uniqueIngredients = new Set();
    
    // Get unique ingredients from all recipes
    data.forEach(function(recipe) {
      recipe.ingredients.forEach(function(ingredient) {
        uniqueIngredients.add(ingredient);
      });
    });
  
    // Create XML document
    var xmlDocument = document.implementation.createDocument(null, "ingredients", null);
    var ingredientsElement = xmlDocument.documentElement;
  
    uniqueIngredients.forEach(function(ingredient) {
      var ingredientElement = xmlDocument.createElement("ingredient");
      var ingredientText = xmlDocument.createTextNode(ingredient);
      ingredientElement.appendChild(ingredientText);
      ingredientsElement.appendChild(ingredientElement);
    });
  
    // Serialize XML document to string
    var xmlSerializer = new XMLSerializer();
    var xmlString = xmlSerializer.serializeToString(xmlDocument);
  
    // Send XML data to server using AJAX and save to file using PHP
    $.ajax({
      url: "save_xml.php",
      method: "POST",
      data: { xmlData: xmlString },
      success: function(response) {
        console.log("XML file saved: " + response);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error saving XML file: " + errorThrown);
      }
    });
  });
  