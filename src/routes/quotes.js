const controller = require('../controllers/inspirationController')

const quotes = [
  {
    method: 'GET',
    url: '/quote/random',
    handler: controller.getRandomQuote
  }
]

module.exports = quotes
