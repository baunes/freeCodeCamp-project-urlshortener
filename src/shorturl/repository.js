const ShortUrlModel = require('./database/model')

class ShortUrlRepository {
  static create(dto) {
    return new ShortUrlModel(dto).save()
  }
}

module.exports = ShortUrlRepository
