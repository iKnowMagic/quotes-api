const routes = require('./routes')
const mongoose = require('mongoose')

require('dotenv').config()

// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

fastify.register(require('fastify-cors'), {
  origin: true,
  credentials: true
  // optionsSuccessStatus: 200
})

routes.forEach((route, index) => {
  fastify.route(route)
})

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_SERVER}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
)

// Run the server!
const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000, '0.0.0.0')
    fastify.log.info(`server listening on '0.0.0.0'`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
