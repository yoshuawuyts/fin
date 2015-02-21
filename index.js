const log = require('@finfin/core-log')('index')
const server = require('@finfin/core-server')
const summary = require('server-summary')

const env  = process.env.NODE_ENV || 'development'
const port = process.env.port || 1337

module.exports = server

// routes
require('@finfin/api-balance')
require('@finfin/api-assets')


// Start listening.
if (!module.parent) server.listen(port, summary)
