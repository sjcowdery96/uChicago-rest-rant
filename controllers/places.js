//defining our places path
const router = require('express').Router()

router.get('/', (req, res) => {
    //gets places
    res.send('GET /places')
})
//sends our exports
module.exports = router
