const deku = require('deku')
const component = deku.component
const dom = deku.dom

var button = module.exports = component()

button.prototype.initialState = function() {
  return { count: 0 }
}

// render
button.prototype.render = function(props, state) {
  return dom('button', { onClick: onClick }, props.text + ' ' + state.count)
}

// onClick
// @param {Event} e
// @param {Object} props
// @param {Object} state
function onClick (e, props, state) {
  this.setState({ count: state.count + 1 })
}
