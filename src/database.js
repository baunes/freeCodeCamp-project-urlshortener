const mongoose = require('mongoose')

class Database {
  constructor(connection, db) {
    this.connection = connection
    this.options = {
      dbName: db,
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  }

  connect() {
    return mongoose.connect(this.connection, this.options)
  }
}

module.exports = Database
