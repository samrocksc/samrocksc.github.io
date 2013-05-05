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