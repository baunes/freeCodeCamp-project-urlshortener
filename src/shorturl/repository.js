const ShortUrlModel = require('./database/model')

class ShortUrlRepository {
  static findLastCode() {
    return ShortUrlModel.findOne()
      .sort({ code: -1 })
      .limit(1)
      .then((doc) => (doc ? doc.code : 0))
  }

  static create(dto) {
    return new ShortUrlModel(dto).save()
  }
}

module.exports = ShortUrlRepository
