const validator = require('is-my-json-valid')
const storage = require('@fin/core-storage')

const validate = validator({
  required: true,
  type: 'object',
  properties: {
    name: {
      required: true,
      type: 'string'
    }
  }
})

// create a transaction
exports.create = function() {

}

// get a transaction
exports.read = function() {

}

// update a transaction
exports.update = function() {

}

// delete a transaction
exports.delete = function() {

}
