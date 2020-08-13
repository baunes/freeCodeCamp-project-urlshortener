const express = require('express')
const ShortUrlRouter = require('./shorturl/http/routes')

const router = express.Router()

router.use(ShortUrlRouter)

module.exports = router
