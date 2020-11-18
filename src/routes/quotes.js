const controller = require('../controllers/quotesController')

const quotes = [
  {
    method: 'GET',
    url: '/quote/random',
    handler: controller.getRandomQuote
  },
  {
    method: 'GET',
    url: '/timezone/:area',
    handler: controller.getTimezone
  },
  {
    method: 'GET',
    url: '/timezone/:area/:location',
    handler: controller.getTimezone
  }
]

module.exports = quotes
