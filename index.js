const server = require('@finfin/core-server')
const summary = require('server-summary')

require('@finfin/ctx-log')

require('@finfin/api-balance')

const env  = process.env.NODE_ENV || 'development'
const port = process.env.port || 1337

module.exports = server

// Start listening.
if (!module.parent) server.listen(port, summary)
