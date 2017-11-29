'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./auth/events')
const clientEvents = require('./clients/clientEvents')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  events.addHandlers()
  clientEvents.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
