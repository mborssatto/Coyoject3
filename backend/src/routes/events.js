const express = require('express')
const Event = require('../models/event')

const router = express.Router()

/* TO DO REFACTOR GET events listing 
and FILTER by CITY - WORKS with url http://localhost:3000/events?city=Berlin */

router.get('/', async (req, res) => {
  let result

  if (req.query.city) {
    result = await Event.find({ city: req.query.city })
  } else result = await Event.find()

  return res.render('events', { result })
})

router.get('/:id', async (req, res) => {
  const event = await Event.findById(req.params.id)

  if (!event)
    return res.render('error', {
      error: { status: 404 },
      message: `No event with id ${req.params.id} found`,
    })

  return res.render('detail', { event })
})

module.exports = router

// TO DO
/*
function filter(el) {
  return el.date >= dateRangeStart && el.date <= dateRangeEnd && el.city === city
}

const filteredList = events.filter(filter)
*/
