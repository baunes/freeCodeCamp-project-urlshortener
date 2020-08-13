const mongoose = require('mongoose')
const ShortUrlSchema = require('./schema')

const ShortUrlModel = mongoose.model('ShortUrl', ShortUrlSchema)

module.exports = ShortUrlModel
