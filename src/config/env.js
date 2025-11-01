export const SERVER_CONFIG = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 7777,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/myProject',
  APP_NAME: process.env.APP_NAME || 'myProject'
}
