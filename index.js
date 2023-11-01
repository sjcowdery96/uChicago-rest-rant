require('dotenv').config()
const express = require('express')
const app = express()


//crack open some of that React stuff with those jsx files
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//if we navigate to /places we render our file from ./controllers/places
app.use('/places', require('./controllers/places'))

//our homepage is defined here with the base path /
app.get('/', (req, res) => {
    res.render('home')
})
//the * in this case means...anything else
//so if we get anything other than / (or places) as a path, return 404
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)

