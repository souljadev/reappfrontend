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
  this.reset()
  return false
}

const onUpdateClient = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  clientAPI.updateClient(data)
    .then(clientUI.onUpdateClientSuccess)
    .catch(clientUI.onUpdateClientFailure)
  // this.reset()
  // return false
}

const showClient = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  clientAPI.showClients(data)
    .then(clientUI.showClientSuccess)
    .catch(clientUI.showClientFailure)
  return data
}

const deleteClient = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  clientAPI.deleteClient(data)
    .then(clientUI.deleteSuccess)
    .catch(clientUI.deleteFailure)
}

const addHandlers = function () {
  $('#show-client').on('submit', showClient)
  $('#update-client').on('submit', onUpdateClient)
  $('#create-client').on('submit', onCreate)
  $('#delete-client').on('submit', deleteClient)
}

module.exports = {
  addHandlers
}
