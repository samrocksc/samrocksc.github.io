$(function(){
 
  $('#menu > li > ul')
    .hide()
    .click(function(e){
      e.stopPropagation();
    });
 
  $('#menu > li').on( 'click', function(e){
    $(this).find('ul').slideToggle();
    e.preventDefault();
  });
});
/*loading resume function*/
$(document).ready(function(){
  $(".resume").click(function(){
    $("#content").load("testdata.html");
  });
});