const mongoose = require('mongoose')

module.exports = class Database {
  constructor(connection) {
    this.connection = connection
    this.options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  }

  connect() {
    return mongoose.connect(this.connection, this.options)
  }
}
