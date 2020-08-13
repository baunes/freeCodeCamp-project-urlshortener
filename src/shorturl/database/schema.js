const mongoose = require('mongoose')

const ShortUrlSchema = new mongoose.Schema(
  {
    code: { type: Number, unique: true },
    url: { type: String },
    created_on: { type: Number },
  },
  { collection: 'shorturls' }
)

module.exports = ShortUrlSchema
