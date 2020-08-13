const CreateShortUrl = require('./CreateShortUrl')
const GetShortUrl = require('./GetShortUrl')

const ACTIONS = {
  createShortUrl: CreateShortUrl,
  getShortUrl: GetShortUrl,
}

Object.freeze(ACTIONS)

module.exports = ACTIONS
