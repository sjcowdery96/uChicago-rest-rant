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

//SHOW
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/show', { place: places[id], id })
    }
})

//EDIT
router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    //check for silly entries that are not numbers
    if (isNaN(id)) {
        res.render('error404')
    }
    //check for values outside the array
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        //else render our edit places with the parsed param id
        res.render('places/edit', { place: places[id] })
    }
})

//DELETE
router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        places.splice(id, 1)
        res.redirect('/places')
    }
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


