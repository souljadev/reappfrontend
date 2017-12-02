'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up succesfully, Please Sign In')
}

const signUpFailure = function () {
  $('#message').text('Error on sign up')
}

const signInSuccess = function (data) {
  store.user = data.user
  // transition to show sections on sign up
  $('section').show(800)
  $('nav').show(500)
  $('header').removeClass('centered')
  // trasition to hide sign up/in
  $('#sign-up-sec').hide(800)
  $('#sign-in-sec').hide(800)
  // trasition to show changePW and Log out
  $('#chngpw').show(800)
  $('#so-sec').show(800)
  $('#message').text('Signed in succesfully')
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
  $('#message').text('Goodbye')
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
