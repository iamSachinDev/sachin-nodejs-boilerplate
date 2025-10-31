import { createServer } from './App.js'
import { SERVER_CONFIG } from './config/env.js'
import { Logger } from './lib/logger.js'
const app = await createServer()
app.listen(SERVER_CONFIG.PORT, () =>
  Logger.app.info(`🚀 Server running on http://localhost:${SERVER_CONFIG.PORT}`)
)
