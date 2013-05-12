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
            ]
        };
        document.getElementById("placeholder").innerHTML = template(data);