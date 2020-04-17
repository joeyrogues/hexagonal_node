const { register } = require('waterpump')()

register('uuid', () => require('uuid'))
register('redis', require('../adapters/redis.js'))
const logger = register('logger', require('../adapters/logger.js'))
const userService = register('userService', require('../adapters/userService.js'))

userService.create({
  firstname: 'Alex',
  lastname: 'McNode'
}, (err, userId) => logger.log(userId))

userService.create({
  firstname: 'Sam',
  lastname: 'McNode'
}, (err, userId) => logger.log(userId))

userService.create({
  firstname: 'Aiden',
  lastname: 'McNode'
}, (err, userId) => logger.log(userId))
