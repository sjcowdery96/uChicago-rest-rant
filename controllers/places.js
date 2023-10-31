//defining our base router
const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /places')
})
//this module has the router to offer to the other files
module.exports = router
