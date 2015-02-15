const server = require('@finfin/core-server')
const summary = require('server-summary')

const env  = process.env.NODE_ENV || 'development'
const port = process.env.port || 1337

module.exports = server

// Start listening.
server.listen(port, summary)
