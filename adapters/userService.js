module.exports = (ports) => ({
  create({ firstname, lastname }, cb) {
    const uuid = ports.uuid.v4()
    const userId = `user:${uuid}`
    ports.logger.log(`Creating user ${userId} ...`)
    ports.redis.client.hset(
      userId,

      'firstname', firstname,
      'lastname', lastname,

      (err) => err && cb(err) || cb(null, userId)
    )
  }
})
