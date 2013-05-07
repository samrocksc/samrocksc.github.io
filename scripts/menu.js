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
/*Twitter API get*/
$(document).ready(function () {

    var k = "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=samrocksc&include_rts=1&count=5&jsoncallback=";

    $.ajax({
        dataType: 'jsonp',
        url: k,
        success: function (data) {
            console.log(data);
            $.each(data, function (i, item) {
                $("#tweetFeed").append("<div id='tweetText'>" + item.text + "</div>");
            })
        }
    });
});