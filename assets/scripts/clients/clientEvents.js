'use strict'
const getFormFields = require(`../../../lib/get-form-fields`)

const clientAPI = require('./clientAPI')
const clientUI = require('./clientUI')

// hide nav and show client on load
// hide section
$(document).ready(function () {
  $('section').hide()
  $('nav').hide()
  $('footer').hide()
  $('#chngpw').hide()
  $('#so-sec').hide()
})

// create client
const onCreate = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  clientAPI.createClient(data)
    .then(clientUI.onCreateSuccess)
    .catch(clientUI.onCreateFailure)
  this.reset()
  return false
}
// update client
const onUpdateClient = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  clientAPI.updateClient(data)
    .then(clientUI.onUpdateClientSuccess)
    .catch(clientUI.onUpdateClientFailure)
  this.reset()
  return false
}
// show client
const showClient = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  clientAPI.showClients(data)
    .then(clientUI.showClientSuccess)
    .catch(clientUI.showClientFailure)
  return data
}
// delete client
const deleteClient = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log("We're about to delete client with id: ", data.client.id)
  clientAPI.deleteClient(data)
    .then(clientUI.deleteSuccess)
    .catch(clientUI.deleteFailure)
}

// ALL WORKING CODE ABOVE

//

//

// HANDLEBAR CODE BELOW

const onGetClients = (event) => {
  clientUI.clearClients()
  event.preventDefault()
  clientAPI.showClients()
    .then(clientUI.getClientsSuccess)
    .catch(clientUI.failure)
}

const onGetNames = (event) => {
  event.preventDefault()
  clientAPI.showClients()
    .done(clientUI.getNamesSuccess)
    .fail(clientUI.failure)
}

const onClearClients = (event) => {
  event.preventDefault()
  clientUI.clearClients()
}

const addHandlers = function () {
  $('#show-client').on('submit', showClient)
  $('#update-client').on('submit', onUpdateClient)
  $('#create-client').on('submit', onCreate)
  $('#delete-client1').on('submit', deleteClient)
  $('#getClientsButton').on('click', onGetClients)
  $('#getNamesButton').on('click', onGetNames)
  $('#clearClientsButton').on('click', onClearClients)
}

module.exports = {
  addHandlers
}
