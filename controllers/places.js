const router = require('express').Router()
const places = require("../models/places.js")

//post method to create new
router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    //logic checks for missing data in the body
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})


//need to fetch new places before we GET existing places
router.get('/new', (req, res) => {
    res.render('places/new')
})

// GET /places
router.get('/', (req, res) => {
    res.render('places/index', { places })
})

//sends our exports
module.exports = router


