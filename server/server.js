const path = require('path')
const express = require('express')

const photoRoutes = require('./routes/photos.js')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/photos', photoRoutes)

module.exports = server