const redis = require('redis')

const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379'

const client = redis.createClient(REDIS_URL)

module.exports = () => ({
  client
})
