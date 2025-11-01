import { createServer } from './App.js'
import { SERVER_CONFIG } from './config/env.js'
import { Logger } from './lib/logger.js'

const { PORT } = SERVER_CONFIG

const app = await createServer()
app.listen(PORT, () =>
  Logger.app.info(`🚀 Server running on http://localhost:${PORT}`)
)
