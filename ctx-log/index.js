const server = require('@finfin/core-server')
const bole = require('bole')

module.exports = bole

server.context.log = bole
