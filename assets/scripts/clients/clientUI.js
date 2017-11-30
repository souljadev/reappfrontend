'use strict'
const store = require('../store')

const showClientsTemplate = require('../templates/showClientHB.handlebars')

// create Client Success
const onCreateSuccess = function (data) {
  store.client = data.client
  store.client.id = data.client.id
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
// delete Successful
const deleteSuccess = function () {
  $('#form-message').text('delete succesfully')
}
// delete fail
const deleteFailure = function () {
  $('#form-message').text('Not showing up')
}

// ALL WORKING CODE ABOVE

// CODE FOR HANDLEBAR - CONFIRM IF WORKING THEN UPDATE MSG
const getClientsSuccess = (data) => {
  console.log(data)
  const showClientsHtml = showClientsTemplate({ clients: data.clients })

  // $("button").on("click", function (e) {
  //   e.preventDefault()
  //   $(e.target).parent().parent().remove()
  // })
  // $("#content").on("click", 'button', function (e) {
  //   e.preventDefault()
  //   $(e.target).parent().parent().remove()
  // })
  $('.content').append(showClientsHtml)

  // $("button").on("click", function (e) {
  //   e.preventDefault()
  //   $(e.target).parent().parent().remove()
  // })
}

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
