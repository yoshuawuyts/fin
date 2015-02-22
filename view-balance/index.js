const header = require('@finfin/x-header')
const path = require('path')
const fs = require('fs')

const template = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8')
var x = process.env.NODE_ENV
module.exports = view

document.body.innerHTML = template
header.render(document.body, {text: 'count is:'})
function view () {
  return () => {'foo'}
}
