const router = require('express').Router()
const { reservations } = require('../db')

router.post('/reservations', (req, res) => {
  reservations.push(req.body.tvShow)
  res.sendStatus(200)
})

router.get('/reservations', (req, res) => {
  res.json(reservations)
})

module.exports = router
