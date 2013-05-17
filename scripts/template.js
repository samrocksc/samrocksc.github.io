        var source = document.getElementById("myTemplate").innerHTML;
        var template = Handlebars.compile(source);
        var data = {
            "index": "index.html",
            "titletext":"/ s h o u t i n g f r e n c h /",
            "headerimg":"header.png",
            "copyright":"shoutinginfrench 2013",
            "email":"samrocksc@gmail.com",
            "showemail":"samrocksc at gmail.com",
            "authorname":"Sam Clark",
            
            
                
            links: [
            { "class": "accordionLink", "title": "", "content": "<a href='index.html'>Home</a>"},
            { "class": "accordionButton", "title": "", "content": "About"},
            { "class": "accordionContent", "title": "", "content": "<a href='about.html'>Sam</a><br/><a href='resume.html'>Resume</a><br/><a href='businesses.html'>Businesses</a>"},
            { "class": "accordionLink", "title": "", "content": "<a href='blog.html'>Blog</a>"},
            { "class": "accordionButton", "title": "", "content": "Writings"},
            { "class": "accordionContent", "title": "", "content": "<a href='code'>Code</a><br/><a href='rants.html'>Rants</a><br/><a href='coffee.html'>Coffee</a><br/><a href='fantasy.html'>Fantasy</a>"},
            { "class": "accordionLink", "title": "", "content": "<a href='links.html'>Links</a>"},
            { "class": "accordionLink", "title": "", "content": "<a href='mailto:samrocksc@gmail.com?Subject=shoutinginfrench.com'>Contact</a>"},
            ],
            links2: [
            
            ],
            header: [
            {"content": "<a href='index.html'><h1>/ s h o u t i n g i n f r e n c h /<img src='images/header.png'/></h1></a>"}
            ],
            footer: [ 
            {"content": "<a href='index.html'>2012 shoutinginfrench</a> || Sam Clark || <a href='mailto:samrocksc@gmail.com?Subject=shoutinginfrench.com'>samrocksc@gmail.com</a>"}
            ],
            social: [
            { "link": "http://www.digg.com/submit", "img": "digg.png"},
            { "link": "https://www.facebook.com/shoutinginfrench", "img": "fb.png"},
            { "link": "https://plus.google.com/106446413448645055166/posts", "img": "gplus.png"},
            { "link": "http://shoutinginfrench.tumblr.com", "img": "tumblr.png"},
            { "link": "https://twitter.com/samrocksc", "img": "twitter.png"},
            ]
        };
        document.getElementById("placeholder").innerHTML = template(data);

