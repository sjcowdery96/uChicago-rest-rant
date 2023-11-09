const router = require('express').Router()
const db = require('../models')

//gets places
router.get('/', (req, res) => {
    //goes into Mongo
    db.Place.find()
        //for each place, render it
        .then((places) => {
            res.render('places/index', { places })
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
})


//post method to create new restrant
router.post('/', (req, res) => {
    //creates a new place in mongoDB out of our req body
    db.Place.create(req.body)
        .then(() => {
            //then redirects to homepage
            res.redirect('/places')
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

//gets place by ID
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/show', { place })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})


router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
    res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})


//sends our exports
module.exports = router

/*


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

//EDIT --> RENDER
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
        res.render('places/edit', { place: places[id], id })
    }
})


//PUT --> ensure this is directed to the actual correct path
router.put('/:id', (req, res) => {
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
        // Dig into req.body and make sure data is valid
        if (!req.body.pic) {
            // Default image if one is not provided
            req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }
        // Save the new data into places[id]
        places[id] = req.body
        res.redirect(`/places/${id}`)
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
    db.Place.find()
        .then((places) => {
            res.render('places/index', { places })
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
})

//sends our exports
module.exports = router

*/