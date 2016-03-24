$(document).ready(function() {

  $("form#aform").submit(function(event){
    var height = $("input#rides").val();
    event.preventDefault();
    if (height >= 48) {
      $('#roller').addClass("highlight");
    } else {
      $('#roller').addClass("bluebkgd");
    }
  });

});
