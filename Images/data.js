$(document).ready(function() {
    $.ajax({
      type: "GET",
      url: "data.xml",
      dataType: "xml",
      success: function(xml) {
        $(xml).find('group').each(function() {
          var name = $(this).find('name').text();
          var li = '<li id="' + name + '">' + name + '</li>';
          $('#select').append(li);
        });
        $('#select').on('click', 'li', function() {
          var name = $(this).text();
          $.ajax({
            type: "GET",
            url: "data.xml",
            dataType: "xml",
            success: function(xml) {
              $(xml).find('group').each(function() {
                if ($(this).find('name').text() == name) {
                  var description = $(this).find('description').text();
                  var htmlContentPath = $(this).find('htmlContentPath').text();
                  $.ajax({
                    type: "GET",
                    url: htmlContentPath,
                    dataType: "html",
                    success: function(html) {
                      $('#description').text(description);
                      $('#htmlContent').html(html);
                    }
                  });
                }
              });
            }
          });
        });
      }
    });
  });
  