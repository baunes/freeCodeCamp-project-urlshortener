/* eslint-disable no-console */
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const Database = require('./database')
const Routes = require('./routes')

const app = express()

// Basic Configuration
const port = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: 'false' }))
app.use(bodyParser.json())

app.use('/public', express.static(`${process.cwd()}/public`))

app.get('/', (req, res) => {
  res.sendFile(`${process.cwd()}/views/index.html`)
})

app.use(Routes)

// Basic Configuration
new Database(process.env.MONGO_URI)
  .connect()
  .then(() => {
    console.log('Connected to Mongo')
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Node.js listening on port ${port}...`)
    })
  })
