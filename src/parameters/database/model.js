const mongoose = require('mongoose')
const ParameterSchema = require('./schema')

const ParameterModel = mongoose.model('Parameter', ParameterSchema)

module.exports = ParameterModel
