'use strict'
const store = require('../store')

const onCreateSuccess = function (data) {
  store.client = data.client
  store.client.id = data.client.id
  $('#form-message').text('Created Client')
}

const onCreateFailure = function () {
  $('#form-message').text('Error on sign up')
}
const showClientsSuccess = function (data) {
  console.log(data)
  $('#form-message').text('show succesfully')
  $('#form-message').text('Client Data: ' + data.client)
}

const showClientsFailure = function () {
  $('#form-message').text('Not showing up')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  showClientsSuccess,
  showClientsFailure
}
