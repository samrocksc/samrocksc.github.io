        <div id="container">
        {{#header}}<div id="header"><a href="{{href}}">{{name}}</a></div>{{/header}}
        <div id="left-column">
        <ul id="menu">
        {{#links}}
        <li><a href="{{href}}">{{name}}</a>
        <ul>{{#each sublinks}}<li><a href="{{href}}">{{name}}</a> </li>{{/each}}</ul>
        </li>
        {{/links}}
        </ul>
        </div>
        <div id="content">
            <h2>shoutinginfrench.com</h2>
            <p>
                This page is being designed as a self-built website to re-learn web design by Sam Clark.  The goal is to be able to learn how to do all of the web-design involved in the creation of a website.
            </p>
            <p>Emphasis is being placed on the usage of javascript and jQuery to re learn web-design.
            </p>
        </div>
        <div id="footer"><a href="http://www.shoutinginfrench.com">2012 shoutinginfrench</a> || Sam Clark || <a href="mailto:samrocksc@gmail.com?Subject=shoutinginfrench.com">samrocksc@gmail.com</a></div>
        </div>
        </div>