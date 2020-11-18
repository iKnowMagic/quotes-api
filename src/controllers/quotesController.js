// Get Data Models
const Model = require('../models/inspirationModel')
const got = require('got')

exports.getRandomQuote = async (req, reply) => {
  try {
    const count = await Model.countDocuments()
    const random = Math.floor(Math.random() * count)
    const result = await Model.findOne().skip(random)
    return result
  } catch (err) {
    throw new Error(err)
  }
}

exports.getTimezone = async (req, reply) => {
  try {
    let response
    if (req.params.location) {
      response = await got(
        `http://worldtimeapi.org/api/timezone/${req.params.area}/${req.params.location}`
      )
    } else {
      response = await got(
        `http://worldtimeapi.org/api/timezone/${req.params.area}`
      )
    }
    return response.body
  } catch (err) {
    throw new Error(err)
  }
}
