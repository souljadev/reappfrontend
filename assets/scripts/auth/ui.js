'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up succesfully, welcome to the agency. Please Sign In')
}

const signUpFailure = function () {
  $('#message').text('Error on sign up')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#message').text('Signed in succesfully, hello 007')
}

const signInFailure = function () {
  $('#message').text('Error on sign in')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully')
}

const changePasswordFailure = function () {
  $('#message').text('Error on change passwords')
}

const signOutSuccess = function () {
  $('#message').text('Goodbye 007, please bring back the car in one piece this time.')
  $('#message').text('PLAYER STATUS')
}

const signOutFailure = function () {
  $('#message').text('Error on signing')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess
}
