const { register } = require('waterpump')()

const ignore = new Proxy(() => {}, {
  get: () => ignore,
  apply: () => ignore
})

const callback = (err, ...params) => (...a) => a[a.length-1](err, ...params)

global.register = register

global.mock = {
  ignore,
  callback
}
