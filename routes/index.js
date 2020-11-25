const router = require('express').Router()

router.use('/api', require('./reservations.js'))

module.exports = router
