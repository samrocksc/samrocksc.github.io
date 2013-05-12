        var source = document.getElementById("myTemplate").innerHTML;
        var template = Handlebars.compile(source);
        var data = {
            links: [
            { "class": "accordionLink", "title": "", "content": "<a href='index.html'>Home</a>"},
            { "class": "accordionButton", "title": "", "content": "About"},
            { "class": "accordionContent", "title": "", "content": "<a href='about.html'>Sam</a><br/><a href='resume.html'>Resume</a><br/><a href'businesses.html'>Businesses</a>"},
            { "class": "accordionLink", "title": "", "content": "<a href='blog.html'>Blog</a>"},
            { "class": "accordionButton", "title": "", "content": "Writings"},
            { "class": "accordionContent", "title": "", "content": "<a href='about.html'>Rants</a><br/><a href='resume.html'>Coffee</a><br/><a href'businesses.html'>Fantasy</a>"},
            { "class": "accordionLink", "title": "", "content": "<a href='index.html'>Links</a>"},
            { "class": "accordionLink", "title": "", "content": "<a href='index.html'>Contact</a>"},
            ],
            header: [
            {"name": "s h o u t i n g i n f r e n c h", "href": "index.html"},
            ],
            footer: [ 
            {"content": "<a href='http://www.shoutinginfrench.com'>2012 shoutinginfrench</a> || Sam Clark || <a href='mailto:samrocksc@gmail.com?Subject=shoutinginfrench.com'>samrocksc@gmail.com</a>"}
            ]
        };
        document.getElementById("placeholder").innerHTML = template(data);

$(document).ready(function(){
    $( ".tumblr" ).embedTumblr("http://api.tumblr.com/v2/blog/myblog.tumblr.com/posts?api_key=BLWUwRnzhaCy4zlibEnhQ8qn4BTKiWFnG73oxTUvWgh434jIDM");
})