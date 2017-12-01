'use strict'
const store = require('../store')
const clientAPI = require('./clientAPI')
const showClientsTemplate = require('../templates/showClientHB.handlebars')

// create Client Success, reset show client
const onCreateSuccess = function (data) {
  $('#form-message').text('Created Client')
  $('#getClientsButton').click()
}
//  create Fail
const onCreateFailure = function () {
  $('#form-message').text('Error on sign up')
}
// Update Client Succesfully, reset show client
const onUpdateClientSuccess = function (data) {
  console.log(data)
  $('#form-message').text('Updated Client Succesfully')
  $('#getClientsButton').click()
}
// Update Fail
const onUpdateClientFailure = function () {
  $('#form-message').text('Error on Update')
}
// show Client Successful, reset show client
const showClientSuccess = function (data) {
  console.log(data)
  $('#form-message').text('show succesfully')
}
// show Client Fail
const showClientFailure = function () {
  $('#form-message').text('Not showing up')
}

// CODE FOR HANDLEBAR
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
  $('#getClientsButton').click()
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
