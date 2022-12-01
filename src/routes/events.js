const express = require('express')
const { events } = require('../models')

const router = express.Router()

/* GET events listing 
and FILTER by CITY - WORKS with url http://localhost:3000/events?city=Berlin */

router.get('/', (req, res) => {
  let result = events

  if (req.query.city) {
    result = events.filter(event => event.city === req.query.city)
  }

  return res.render('events', { result })
})

router.get('/:id', (req, res) => {
  const event = events[req.params.id]

  if (!event)
    return res.render('error', {
      error: { status: 404 },
      message: `No event with id ${req.params.id} found`,
    })

  return res.render('detail', { event })
})

module.exports = router
