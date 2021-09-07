const express = require('express')
const Car = require('./cars-model')

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const cars = await Car.getAll()
    res.json(cars)
  } catch (err) {
    next(err)
  }
})

module.exports = router
