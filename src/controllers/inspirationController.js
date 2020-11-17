// Get Data Models
const Model = require('../models/inspirationModel')

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
