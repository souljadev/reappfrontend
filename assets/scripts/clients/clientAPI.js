'use strict'
const config = require('../config')
const store = require('../store')

const createClient = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/clients',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showClients = function (data) {
  data = JSON.stringify(data)
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/clients',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    contentType: 'application/json',
    data
  })
}

module.exports = {
  showClients,
  createClient
}
