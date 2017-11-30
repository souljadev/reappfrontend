'use strict'
const store = require('../store')

const onCreateSuccess = function (data) {
  store.client = data.client
  store.client.id = data.client.id
  console.log(data.client.id)
  console.log(data.client)
  $('#form-message').text('Created Client')
}

const onCreateFailure = function () {
  $('#form-message').text('Error on sign up')
}

const onUpdateClientSuccess = function (data) {
  console.log(data)
  $('#form-message').text('Updated Client Succesfully')
}

const onUpdateClientFailure = function () {
  $('#form-message').text('Error on Update')
}
const showClientSuccess = function (data) {
  console.log(data)
  $('#form-message').text('show succesfully')
}

const showClientFailure = function () {
  $('#form-message').text('Not showing up')
}

const deleteSuccess = function () {
  $('#form-message').text('delete succesfully')
}

const deleteFailure = function () {
  $('#form-message').text('Not showing up')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onUpdateClientSuccess,
  onUpdateClientFailure,
  showClientSuccess,
  showClientFailure,
  deleteSuccess,
  deleteFailure
}
