const mongoose = require('mongoose')

const ParameterSchema = new mongoose.Schema(
  {
    parameter: { type: String, unique: true },
    valueS: { type: String },
    valueN: { type: Number },
  },
  { collection: 'parameters' }
)

module.exports = ParameterSchema
