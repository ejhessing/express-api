$(document).ready(function()  {
  $.ajax('http://192.168.20.30:3000/ ', {
    success:function (wombats) {

        $(".hack").append('<p>'+ wombats +'</p>')

    },
   error: function (jqxhr) {
      // jqxhr is the XMLHTTPResponse object
      $('#status').text('Error: ' + jqxhr.responseText)
   }
 })
})
