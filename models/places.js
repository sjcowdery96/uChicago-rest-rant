const mongoose = require('mongoose')
const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: String,
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    founded: Number
})

module.exports = mongoose.model('Place', placeSchema)

/*

module.exports = [
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

*/