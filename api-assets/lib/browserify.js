const browserify = require('browserify')
const babelify = require('babelify')
const watchify = require('watchify')
const kw = require('koa-watchify')
const envify = require('envify')
const path = require('path')
const fs = require('fs')

const root = path.dirname(require.main.filename)

var bopts = {
  entries: [path.join(root, 'client.js')],
  debug: process.env.NODE_ENV !== 'production',
  fullPaths: true,
  packageCache: {},
  cache: {}
}

module.exports = createBundle

// create a browserify bundle
// @return {Function*}
function createBundle() {
  var bundle = browserify(bopts)
    .transform('brfs')
    // .transform(envify({NODE_ENV:  process.env.NODE_ENV || 'development'}))
    // .transform(babelify)

  if (process.env.NODE_ENV !== 'production') bundle = watchify(bundle)
  return kw(bundle)
}
