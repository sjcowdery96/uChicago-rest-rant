const router = require('express').Router()

//need to fetch new places before we get existing places
router.get('/new', (req, res) => {
    res.render('places/new')
})


// GET /places
router.get('/', (req, res) => {
    let places = [
        {
            name: "Coding Cat Cafe",
            city: "Phoenix",
            state: "AZ",
            cuisines: "Coffee, Bakery",
            pic: "/images/r1.jpg"
        },
        {
            name: "The Flying Pig",
            city: "New York City",
            state: "NY",
            cuisines: "Mediterranean, Fusion",
            pic: "/images/r2.jpg"
        },
        {
            name: "The Dragon's Lair",
            city: "Los Angeles",
            state: "CA",
            cuisines: "Chinese, Sichuan",
            pic: "/images/r3.jpg"
        },
        {
            name: "The Enchanted Forest",
            city: "San Francisco",
            state: "CA",
            cuisines: "Vegetarian, Vegan",
            pic: "/images/r4.jpg"
        },
        {
            name: "The Windy City Diner",
            city: "Chicago",
            state: "IL",
            cuisines: "American, Classic",
            pic: "/images/r5.jpg"
        },
        {
            name: "The Lone Star BBQ",
            city: "Austin",
            state: "TX",
            cuisines: "BBQ, Tex-Mex",
            pic: "/images/r6.jpg"
        }
    ]
    res.render('places/index', { places })
})

//sends our exports
module.exports = router


