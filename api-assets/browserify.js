const browserify = require('browserify')
const envify = require('envify/custom')
const babelify = require('babelify')
const watchify = require('watchify')
const kw = require('koa-watchify')
const path = require('path')

const root = path.dirname(require.main.filename)

var bopts = {
  // debug: process.env.NODE_ENV !== 'production',
  fullPaths: true,
  packageCache: {},
  cache: {}
}

module.exports = createBundle

// create a browserify bundle
// @return {Function*}
function createBundle () {
  const source = path.join(root, 'client.js')
  var bundle = browserify(source, bopts)
    .transform(envify({NODE_ENV: process.env.NODE_ENV || 'development'}))
    .transform('brfs')
    .transform(babelify)

  if (process.env.NODE_ENV !== 'production') bundle = watchify(bundle)
  return kw(bundle)
}
