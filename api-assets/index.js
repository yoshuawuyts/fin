const log = require('@finfin/core-log')('assets')
const server = require('@finfin/core-server')
const browserify = require('browserify')
const watchify = require('watchify')
const kw = require('koa-watchify')
const rework = require('rework')
const km = require('koa-myth')
const path = require('path')
const myth = require('myth')
const fs = require('fs')

const root = path.dirname(require.main.filename)

// CSS styles
const styles = fs.readFileSync(path.join(root, 'styles.css'), 'utf8')
server.get('/styles.css', km(rework(styles).use(myth())))

// JS bundle
var bundle = browserify({
  entries: [path.join(root, 'client.js')],
  fullPaths: true,
  packageCache: {},
  cache: {}
})
if (process.env.NODE_ENV == 'development') bundle = watchify(bundle)
server.get('/bundle.js', kw(bundle))
