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
$(document).ready(function(){
    
});

// Load Twit
window.onload = function() {
    var ajax_load            = "<img class='twit-loader' src='img/loading.gif' alt='Loading...'>",
        twitter_preferences  = {
            count    : [5],
            username : '[samrocksc]'
            retweets : [false, true],
            replies  : [false, true]
        },
        twitterUrl = 'http://twitter.com/statuses/user_timeline.json?screen_name=' + twitter_preferences.username + '&callback=twitterCallback&count=' + twitter_preferences.count + '&include_rts=' + twitter_preferences.retweets + '&exclude_replies=' + twitter_preferences.replies;
        script     = document.createElement('script');

    $("#twitter_feed").html(ajax_load);

    script.setAttribute('src', twitterUrl);
    script.setAttribute('async', true);

    document.body.appendChild(script);
};