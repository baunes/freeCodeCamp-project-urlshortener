const Repository = require('../repository')

function isValidURL(url) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', // fragment locator
    'i'
  )
  return !!pattern.test(url)
}

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

    return Repository.findLastCode()
      .then((code) => code + 1)
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
