const router = require('express').Router()
const db = require('../models')
//const Places = require('../models/places.js')

//gets places
router.get('/', (req, res) => {
    //goes into Mongo
    db.Place.find()
        //for each place, render it
        .then((places) => {
            res.render('places/index', { places })
        })
        .catch(err => {
            console.log("get places Error", err)
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
            console.log('Posr New Place err', err)
            res.render('error404')
        })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

//gets place by ID
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .populate('comments')
        .then(place => {
            res.render('places/show', { place })
        })
        .catch(err => {
            console.log(' find by ID err', err)
            res.render('error404')
        })
})

//COMMENTS
router.post('/:id/comment', (req, res) => {
    //this has to be "on" because the checkbox html element only has "on" and "off" states
    if (req.body.rant === 'on') {
        //set the request body rant boolean to true. That mf is a RANT
        req.body.rant = true
    }
    //sending to database
    db.Place.findById(req.params.id)
        .then(place => {
            db.Comment.create(req.body)
                .then(comment => {
                    place.comments.push(comment.id)
                    place.save()
                        .then(() => {
                            res.redirect(`/places/${req.params.id}`)
                        })
                })
                .catch(err => {
                    res.render('error404')
                })
        })
        .catch(err => {
            res.render('error404')
        })


})
//PUT
router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect(`/places/${req.params.id}`)
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

//DELETE
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then(place => {
            res.redirect('/')
        })
        .catch(err => {
            console.log('Delete err', err)
            res.render('error404')
        })
})

//EDIT
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/edit', { place })
        })
        .catch(err => {
            console.log('Edit Error', err)
            res.render('error404')
        })
})


router.delete('/:id/comment/:commentID', (req, res) => {
    //goes into our commment database 
    db.Comment.findByIdAndDelete(req.params.commentID)
        .then(comment => {
            res.redirect(`/places/${req.params.id}`)
        })
        .catch(err => {
            console.log('Delete Comment err', err)
            res.render('error404')
        })

})


//sends our exports
module.exports = router

/*


*/