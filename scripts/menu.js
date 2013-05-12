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
/*second menu*/
$(document).ready(function() {
  
  /*Making Links slide*/
  $('div.accordionButton').click(function() {
    $('div.accordionContent').slideUp('normal');  
    $(this).next().slideDown('normal');
  });
  
  /*hiding divs on load*/
  $("div.accordionContent").hide();
  /*Load class for regular links*/
});