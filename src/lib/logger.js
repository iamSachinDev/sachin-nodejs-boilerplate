import pino from 'pino'
import pinoHttp from 'pino-http'

import { SERVER_CONFIG } from '../config/env.js'

const pretty = { colorize: true, translateTime: 'dd-mm-yyyy HH:MM:ss TT Z' }
const app = pino({
  name: SERVER_CONFIG.APP_NAME,
  level: 'debug',
  transport: { target: 'pino-pretty', options: pretty }
})
const http = pinoHttp({
  transport: { target: 'pino-pretty', options: pretty }
})
export const Logger = { app, http }
