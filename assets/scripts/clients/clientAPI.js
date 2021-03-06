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

const updateClient = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/clients/' + data.client.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// handlebar function
const showClients = function (data) {
  // data = JSON.stringify(data)
  return $.ajax({
    url: config.apiOrigin + '/clients',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // ,
    // contentType: 'application/json',
    // data
  })
}

const deleteCUClient = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/clients/' + store.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    store
  })
}
module.exports = {
  showClients,
  updateClient,
  createClient,
  deleteCUClient
}
