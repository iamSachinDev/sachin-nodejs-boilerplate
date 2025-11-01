import express from 'express'

import { connectDB } from './config/db.js'
import { setupSwagger } from './docs/swagger.js'
import { errorHandler } from './helpers/errorHandler.js'
import { Logger } from './lib/logger.js'
import routes from './routes/index.js'

const createServer = async () => {
  const app = express()
  await connectDB()
  app.use(Logger.http)
  app.use(express.json())
  app.use('/api', routes)
  setupSwagger(app)
  app.get('/health', (req, res) => res.json({ status: 'ok' }))
  app.use(errorHandler)
  return app
}

export { createServer }
