const rework = require('rework')
const km = require('koa-myth')
const path = require('path')
const myth = require('myth')
const fs = require('fs')

const root = path.dirname(require.main.filename)
const styles = fs.readFileSync(path.join(root, 'style.css'), 'utf8')

module.exports = createStyles

// return styles middleware
// @return {Function*}
function createStyles () {
  return km(rework(styles).use(myth()))
}
