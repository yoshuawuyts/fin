const header = require('@finfin/x-header')
// const path = require('path')
// const fs = require('fs')

// const template = fs.readFileSync(path.join(__dirname, '/index.html'), 'utf8')

module.exports = view

header.render(document.body, {text: 'count is:'})
function view () {
}
