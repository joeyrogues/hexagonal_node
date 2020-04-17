const { register } = require('waterpump')()

const ignore = new Proxy(() => {}, {
  get: () => ignore,
  apply: () => ignore
})

const callback = (err, ...params) => (...a) => a[a.length-1](err, ...params)

register('uuid', () => ({ v4: () => 123 }))
register('redis', () => ({ client: { hset: callback() } }))
register('logger', ignore)
const userService = register('userService', require('../adapters/userService.js'))

test('something', (done) => {
  userService.create({
    firstname: 'Test',
    lastname: 'McTesty'
  }, (err, userId) => {
    expect(userId).toBe('user:123')
    done()
  })
})
