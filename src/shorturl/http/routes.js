const express = require('express')
const ACTIONS = require('../actions')

const router = express.Router()

router.post('/api/shorturl/new', (req, res) => {
  ACTIONS.shortUrl
    .do(req.body.url)
    .then((response) => res.json(response))
    .catch((error) => res.json(error))
})

module.exports = router
