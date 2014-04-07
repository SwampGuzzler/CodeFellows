$(document).ready(function() {
   $('div').click(function() {
       $(this).toggle(500);
   }); 
   $(document).keyup(function() {
       //var toAdd = $("input[name=message]").val();
       var toAdd = $("input").val();
       //$('#messages').append("<p>"+toAdd+"</p>");
       $('#messages').text(toAdd);       
    });
});