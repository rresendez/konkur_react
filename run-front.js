const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'front-builded')))

app.get('/sezzh', function (req, res) {
  res.json({
    message: 'working endpoint'
  })
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'front-builded', 'index.html'))
})

app.listen(8080)
