const express = require('express')
const Event = require('../models/event')

const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: `Mariana's project for Coyotiv's Software Engineering course` })
})

router.get('/initialize', async (req, res) => {
  const eventOne = await Event.create({
    name: 'Festival One',
    artists: ['Maria Bethânia', 'Caetano Veloso'],
    date: '2022-11-01',
    venue: 'HKW',
    city: 'Berlin',
  })
  const eventTwo = await Event.create({
    name: 'Festival Two',
    artists: ['Mulatu Astatke'],
    date: '2022-12-01',
    venue: 'HKW',
    city: 'Berlin',
  })
  const eventThree = await Event.create({
    name: 'Festival Three',
    artists: ['Gal Costa'],
    date: '2023-10-01',
    venue: 'Teatro Central',
    city: 'São Paulo',
  })

  // MOCK User input
  const dateRangeStart = '2022-11-01'
  const dateRangeEnd = '2022-12-08'
  const city = 'Berlin'

  console.log(eventOne.detail)
  console.log(eventTwo)

  res.sendStatus(200)
})

module.exports = router
