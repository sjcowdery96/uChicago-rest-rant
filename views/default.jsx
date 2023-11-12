const React = require('react')

function Def(html) {
    return (
        <html>
            <head>
                <title>RestRant</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="/css/style.css"></link>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
            <footer class="footer">
                <span>
                    <p>
                        <time dateTime="{{current_year}}-{{current_month}}-{{current_day}}"> &copy; </time>
                        Sam C -- uChicago Bootcamp
                    </p>
                    <a href="#">Terms of Service</a>
                </span>
            </footer>

        </html>
    )
}


module.exports = Def
