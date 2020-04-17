register('uuid', () => ({ v4: () => 123 }))
register('redis', () => ({ client: { hset: mock.callback() } }))
register('logger', mock.ignore)

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
