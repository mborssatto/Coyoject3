const express = require('express')

const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: `Mariana's project on Coyotiv's Express + Mongo starter Template` })
})

module.exports = router
