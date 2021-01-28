'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  WINKELZOEKER_API_URL: '"https://run.mocky.io/v3/8bd5bc4b-4cd7-43d4-8e1f-1b5f4bbd2b08"'
})