const ShortUrlModel = require('./database/model')

class ShortUrlRepository {
  static create(dto) {
    return new ShortUrlModel(dto).save()
  }

  static findByCode(code) {
    return ShortUrlModel.findOne({ code })
  }
}

module.exports = ShortUrlRepository
