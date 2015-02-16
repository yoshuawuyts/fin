const server = require('@finfin/core-server')

server.get('/balance', function * () {
  const log = this.log('balance')
  log.info('balance got hit')
})
