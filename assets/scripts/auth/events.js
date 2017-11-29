'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  this.reset()
  return false
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  this.reset()
  return false
}

const onChange = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.onChanges(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  this.reset()
  return false
}

const onSignOut = function (event) {
  event.preventDefault()
  api.onSigningOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChange)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
