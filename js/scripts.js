$(document).ready(function() {

  $("form#aform").submit(function(event){
    event.preventDefault();
    var height = $("#rides").val();
    if (height >= 36) {
      $('#roller').addClass("highlight");
      $('.andUp').addClass("highlight");
    } else {
       $('.andUp').addClass("bluebkgd");
       $('#roller').addClass("bluebkgd");
    }
  });
  });
