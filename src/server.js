/* eslint-disable no-console */
const express = require('express')
const cors = require('cors')
const Database = require('./database')

const app = express()

// Basic Configuration
const port = process.env.PORT || 3000

/** this project needs a db !! * */

// mongoose.connect(process.env.DB_URI);

app.use(cors())

/** this project needs to parse POST bodies * */
// you should mount the body-parser here

app.use('/public', express.static(`${process.cwd()}/public`))

app.get('/', function (req, res) {
  res.sendFile(`${process.cwd()}/views/index.html`)
})

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' })
})

// Basic Configuration
new Database(process.env.MONGO_URI)
  .connect()
  .then(() => {
    console.log('Connected to Mongo')
  })
  .then(() => {
    app.listen(port, () => {
      console.log('Node.js listening ...')
    })
  })
