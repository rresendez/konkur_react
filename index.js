'use strict'

const http = require('http')
const https = require('https')
const path = require('path')
const express = require('express')

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

const httpServer = http.createServer(app)
const httpsServer = https.createServer(app)

httpsServer.listen(8081, () => {
  console.log('working https server instance')
})

httpServer.listen(8080, () => {
  console.log('working http server instance')
})
