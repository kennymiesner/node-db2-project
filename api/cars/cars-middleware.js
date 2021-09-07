const Car = require('./cars-model')
const db = require('../../data/db-config')
const vinValidator = require('vin-validator')

const checkCarId = async (req, res, next) => {
  try {
    const car = await Car.getById(req.params.id)
    if (!car) {
      next({
        status: 404,
        message: `car with id ${req.params.id} is not found`
      })
    } else {
      req.car = car
      next()
    }
  } catch (err) {
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  const error = { status: 400 }
  const { vin, make, model, mileage } = req.body
  if (vin === undefined) {
    error.message = `${vin} is missing`
  } else if (make === undefined) {
    error.message = `${make} is missing`
  } else if (model === undefined) {
    error.message = `${model} is missing`
  } else if (mileage === undefined) {
    error.message = `${mileage} is missing`
  }

  if (error.message) {
    next(error)
  } else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  const isValidVin = vinValidator.validate(req.body.vin)
  if (!isValidVin) {
    next({
      status: 400,
      message: `vin ${isValidVin} is invalid`
    })
  } else {
    req.body.vin = isValidVin
    next()
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  try {
    const existing = await db('cars')
      .where('vin', req.body.vin.trim())
      .first()

    if (existing) {
      next({
        status: 400,
        message: `vin ${req.body.vin} already exists`
      })
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}