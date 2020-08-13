const express = require('express')

const router = express.Router()

router.post('/api/shorturl/new', (req, res) => {
  res.json({ greeting: 'hello API' })
})

module.exports = router
