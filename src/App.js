import express from 'express'
import { connectDB } from './config/db.js'
import { Logger } from './lib/logger.js'
import { setupSwagger } from './docs/swagger.js'
import routes from './routes/index.js'
import { errorHandler } from './helpers/errorHandler.js'

export async function createServer () {
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
