/// <reference types="cypress" />

require('dotenv').config()

module.exports = (on, config) => {
  // copy any needed variables from process.env to config.env
  config.env.AUTHORIZATION = process.env.AUTHORIZATION

  // do not forget to return the changed config object!
  return config
}
