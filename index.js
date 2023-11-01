require('dotenv').config()
const express = require('express')
const app = express()

//crack open some of that React stuff with those jsx files
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//if we navigate to /places we render our file from ./controllers/places
app.use('/places', require('./controllers/places'))

//our homepage is defined here with the home page jsx file
app.get('/', (req, res) => {
    res.render('home')
})
//the * in this case means...anything else
//so if we get anything other than / (or places) as a path, return 404 jsx file
app.get('*', (req, res) => {
    res.render('error404')
})
//throw that tthaaang on the port
app.listen(process.env.PORT)

