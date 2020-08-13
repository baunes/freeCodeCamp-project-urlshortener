const ShortUrl = require('./ShortUrl')
const GetShortUrl = require('./GetShortUrl')

const ACTIONS = {
  shortUrl: ShortUrl,
  getShortUrl: GetShortUrl,
}

Object.freeze(ACTIONS)

module.exports = ACTIONS
