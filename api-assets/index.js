// const log = require('@finfin/core-log')('assets')
const server = require('@finfin/core-server')
const browserify = require('browserify')
// const babelify = require('babelify')
const watchify = require('watchify')
const kw = require('koa-watchify')
// const envify = require('envify')
const rework = require('rework')
const send = require('koa-send')
const km = require('koa-myth')
const path = require('path')
const myth = require('myth')
const fs = require('fs')

const root = path.dirname(require.main.filename)

// index.html
server.get('/', function *() {
  yield send(this, path.join(root, 'index.html'))
})

// CSS styles
const styles = fs.readFileSync(path.join(root, 'style.css'), 'utf8')
server.get('/style.css', km(rework(styles).use(myth())))

// JS bundle
var bopts = {}
bopts.entries = [path.join(root, 'client.js')]
bopts.debug = process.env.NODE_ENV !== 'production'
bopts.fullPaths = true
bopts.packageCache = {}
bopts.cache = {}

var bundle = browserify(bopts)
  // .transform(envify({NODE_ENV:  process.env.NODE_ENV || 'development'}))
  // .transform(babelify)
  // .transform('brfs')

if (process.env.NODE_ENV !== 'production') bundle = watchify(bundle)
server.get('/bundle.js', kw(bundle))
