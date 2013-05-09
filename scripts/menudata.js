    <script type="text/javascript">
        var source = document.getElementById("myTemplate").innerHTML;
        var template = Handlebars.compile(source);
        var data = {
            links: [
            { "name": "Home", "href": "index.html"},
            { "name": "About", "href": "#", "sublinks" : [{"name": "Sam", "href": "about.html"}, {"name": "Resume", "href": "resume.html"}, {"name": "Businesses", "href": "businesses.html"}]},
            { "name": "Blog", "href": "blog.html" },
            { "name": "Writings", "href": "#", "sublinks" : [{"name": "Fantasy", "href": "fantasy.html"}, {"name": "Rants", "href": "rants.html"}, {"name": "Coffee", "href": "coffee.html"}] },
            { "name": "Business", "href": "business.html", "sublinks" : [{"name": "Mud Dauber Coffee", "href": "muddauber.html"}, {"name": "Lo Fi Coffee", "href": "lofi.html"}] },
            { "name": "Links", "href": "links.html" },
            { "name": "Contact", "href": "contact.html" },
            ]
        };
        document.getElementById("placeholder").innerHTML = template(data);
    </script>