const manifests = require('@fin/core-manifests')

exports.transaction = require('./lib/transaction')

// validate the model interface
for (const model of exports) {
  manifests.model(model)
}
