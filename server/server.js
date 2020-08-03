const path = require('path')
const express = require('express')

const photoRoutes = require('./routes/photos.js')
const galleryRoutes = require('./routes/galleries.js')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.set('view engine', 'pug')
server.set('views', path.join(__dirname, './views'))

server.use('/api/v1/photos', photoRoutes)
server.use('/api/v1/galleries', galleryRoutes)

server.get('*', (req, res) => {  
  res.render('index')    
})

module.exports = server