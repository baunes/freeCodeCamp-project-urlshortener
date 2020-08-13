const express = require('express')
const ACTIONS = require('../actions')

const router = express.Router()

router.post('/api/shorturl/new', (req, res) => {
  ACTIONS.createShortUrl
    .do(req.body.url)
    .then((response) => res.json(response))
    .catch((error) => res.json(error))
})

router.get('/api/shorturl/:code', (req, res) => {
  ACTIONS.getShortUrl
    .do(req.params.code)
    .then((response) => res.redirect(response.url))
    .catch(() => res.status(404).send('Not found'))
})

module.exports = router
