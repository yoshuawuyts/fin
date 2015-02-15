const server = require('@finfin/core-server')

server.get('/', function * () {
  this.log('balance got hit')
})
