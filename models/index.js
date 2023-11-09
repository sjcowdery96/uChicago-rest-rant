const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//exporting the data from our neighbor file /places
module.exports.Place = require('./places')