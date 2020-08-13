const ParameterModel = require('./database/model')

class ParameterRepository {
  static findAndIncrement(parameter) {
    return ParameterModel.findOneAndUpdate(
      { parameter },
      { $inc: { valueN: 1 } },
      { new: true, upsert: true }
    )
  }
}

module.exports = ParameterRepository
