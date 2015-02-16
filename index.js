const server = require('@finfin/core-server')
const summary = require('server-summary')
const log = require('@finfin/ctx-log')

log.output({
  level: 'info',
  stream: process.stdout
})

require('@finfin/api-balance')

const env  = process.env.NODE_ENV || 'development'
const port = process.env.port || 1337

server.get('/hello', function *() {
  const log = this.log('hello');
  log.info('hello world')
})

module.exports = server

// Start listening.
if (!module.parent) server.listen(port, summary)
