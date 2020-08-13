const Repository = require('../repository')

class GetShortUrl {
  static do(code) {
    return Repository.findByCode(code)
      .then((document) => document)
      .catch((err) => {
        console.log('Error retrieving shorten url', err)
        return { error: 'Error retrieving short url' }
      })
  }
}

module.exports = GetShortUrl
