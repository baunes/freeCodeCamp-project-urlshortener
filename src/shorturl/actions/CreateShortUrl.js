const Repository = require('../repository')
const ParameterRepository = require('../../parameters/repository')
const { isValidURL } = require('../../utils/urls')

const PARAMETER_LAST_CODE_USED = 'shorturl.code.lastused'

function createShortUrl(code, url) {
  return {
    code,
    url,
    created_on: new Date().valueOf(),
  }
}

class ShortUrl {
  static do(url) {
    if (!url || !isValidURL(url)) {
      return Promise.resolve({ error: 'invalid URL' })
    }

    return ParameterRepository.findAndIncrement(PARAMETER_LAST_CODE_USED)
      .then((parameter) => parameter.valueN)
      .then((code) => Repository.create(createShortUrl(code, url)))
      .then((document) => ({
        original_url: document.url,
        short_url: document.code,
      }))
      .catch((err) => {
        console.log('Error saving shorten url', err)
        return { error: 'Error generating short url' }
      })
  }
}

module.exports = ShortUrl
