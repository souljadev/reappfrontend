'use strict'
const store = require('../store')
const clientAPI = require('./clientAPI')
const showClientsTemplate = require('../templates/showClientHB.handlebars')

// create Client Success
const onCreateSuccess = function (data) {
  // store.client = data.client
  // store.client.id = data.client.id
  console.log(data.client.id)
  console.log(data.client)
  $('#form-message').text('Created Client')
}
//  create Fail
const onCreateFailure = function () {
  $('#form-message').text('Error on sign up')
}
// Update Client Succesfully
const onUpdateClientSuccess = function (data) {
  console.log(data)
  $('#form-message').text('Updated Client Succesfully')
}
// Update Fail
const onUpdateClientFailure = function () {
  $('#form-message').text('Error on Update')
}
// show Client Successful
const showClientSuccess = function (data) {
  console.log(data)
  $('#form-message').text('show succesfully')
}
// show Client Fail
const showClientFailure = function () {
  $('#form-message').text('Not showing up')
}

// ALL WORKING CODE ABOVE

// CODE FOR HANDLEBAR - CONFIRM IF WORKING THEN UPDATE MSG
const getClientsSuccess = (data) => {
  const showClientsHtml = showClientsTemplate({ clients: data.clients })
  $('.content').append(showClientsHtml)
  // delete client
  const deleteCurrentClient = function (data) {
    store.id = $(event.target).data('id')
    clientAPI.deleteCUClient(data)
      .then(deleteSuccess)
      .catch(deleteFailure)
  }
  $('.delete').on('click', deleteCurrentClient)
}

// delete Successful then refresh client list
const deleteSuccess = function (data) {
  $('#form-message').text('delete succesfully')
  // const showClientsHtml = showClientsTemplate({ clients: data.clients })
  // $('.content').append(showClientsHtml)
}
// delete fail
const deleteFailure = function () {
  $('#form-message').text('Not showing up')
}
// clearClients
const clearClients = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onUpdateClientSuccess,
  onUpdateClientFailure,
  showClientSuccess,
  showClientFailure,
  deleteSuccess,
  deleteFailure,
  clearClients,
  failure,
  getClientsSuccess
}
