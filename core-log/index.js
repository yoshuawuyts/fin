const bole = require('bole')

module.exports = bole

// configure `bole`
bole.output({
  level: 'info',
  stream: process.stdout
})
