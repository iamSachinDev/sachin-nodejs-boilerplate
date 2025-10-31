import { Logger } from '../lib/logger.js'
export function errorHandler (err, req, res, next) {
  Logger.app.error(err)
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  })
}
