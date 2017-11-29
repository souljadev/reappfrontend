'use strict'
const getFormFields = require(`../../../lib/get-form-fields`)

const clientAPI = require('./clientAPI')
const clientUI = require('./clientUI')

const onCreate = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  clientAPI.createClient(data)
    .then(clientUI.onCreateSuccess)
    .catch(clientUI.onCreateFailure)
  // this.reset()
  // return false
}

const showClient = function (event) {
  const data = getFormFields(this)
  clientAPI.showClients(data)
  console.log(data)
  event.preventDefault()
    .then(clientUI.showClientSuccess)
    .catch(clientUI.showClientFailure)
}

const addHandlers = function () {
  $('#show-client').on('submit', showClient)
  $('#create-client').on('submit', onCreate)
}

module.exports = {
  addHandlers
}
