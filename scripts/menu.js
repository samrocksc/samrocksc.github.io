$(document).ready(function(){
 
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
/*loading ajax function*/
$(document).ready(function(){
  $(".resume").click(function(){
    $("#content").load("data/resume.html");
  });
  $(".aboutsam").click(function(){
    $("#content").load("data/about.html"); 
  });
  $(".home").click(function(){
    $("#content").load("data/home.html"); 
  });
  $(".twitter").click(function(){
    $("#content").load("data/twitter.html");
  });
  $(".fantasy").click(function(){
     $('#content').load("data/fantasy.html"); 
  });
});