module.exports = {
  ENV: process.env.NODE_ENV || 'development',
  PORT: process.ENV.PORT || 3000,
  URL: process.ENV.BASE_URL || 'http://localhost:3000',
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/first_application'
}