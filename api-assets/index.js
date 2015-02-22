const server = require('@finfin/core-server')
const bundle = require('./lib/browserify')
const styles = require('./lib/styles')
const send = require('koa-send')
const path = require('path')

const root = path.dirname(require.main.filename)

// index.html
server.get('/', function * () {
  yield send(this, path.join(root, 'index.html'))
})

// CSS styles
server.get('/style.css', styles())

// JS bundle
server.get('/bundle.js', bundle())
