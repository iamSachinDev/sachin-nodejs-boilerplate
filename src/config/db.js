import mongoose from 'mongoose'

import { Logger } from '../lib/logger.js'

import { SERVER_CONFIG } from './env.js'

const { MONGO_URI } = SERVER_CONFIG

export async function connectDB () {
  try {
    await mongoose.connect(MONGO_URI)
    Logger.app.info('✅ MongoDB connected successfully')
  } catch (error) {
    Logger.app.error('❌ MongoDB connection failed:', error.message)
    process.exit(1)
  }

  mongoose.connection.on('disconnected', () => {
    Logger.app.warn('⚠️  MongoDB disconnected')
  })
}
