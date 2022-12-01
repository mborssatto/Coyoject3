const express = require('express')
const User = require('../models/user')

const router = express.Router()

/* GET users listing. */
router.get('/', async (req, res) => {
  const query = {}
  res.send(await User.find(query).catch(error => console.log('Users not found, error: ', error)))
  // OR TRY this code:

  // let result = users

  // if (req.query.name) {
  //   result = users.find(user => user.name === req.query.name)
  // }
  // res.send(result)
})

let users

router.get('/:userID', function (req, res, next) {
  const user = users[req.params.userID]
  if (user) res.send(user)
  else res.sendStatus(404)
})

/* GET initialize */
router.get('/initialize', async (req, res) => {
  const mihri = await User.create({ name: 'mihri', age: 35 })
  const armagan = await User.create({ name: 'armagan', age: 36 })

  const steve = await User.create({ name: 'steve', age: 21 })
  steve.bio = 'An awesome hacker who has seen it all, and now sharing them all with you.'

  steve.greet(mihri)
  steve.greet(armagan)

  console.log(steve)
  res.sendStatus(200)
})

/* POST user */
router.post('/', async (req, res) => {
  const createdUser = await User.create(req.body)
  res.status(201).send(createdUser)
})

module.exports = router
