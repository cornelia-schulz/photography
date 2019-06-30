
const express = require('express')

const db = require('../photos')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAll()
    .then(photos => {
      res.json(photos)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Unable to read from database.')
    })
})

router.get('/favourites', (req, res) => {
  db.getFavourites()
    .then(photos => {
      res.json(photos)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Unable to get favourites from database')
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getOne(id)
    .then(photo => {
      res.json(photo)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Unable to read from database.')
    })
})

router.post('/', (req, res) => {
  const newPhoto = {
    name: req.body.name,
    age: req.body.age
  }
  db.createNew(newPhoto)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Unable to write to the database.')
    })
})

router.put('/', (req, res) => {
  const updatedPhoto = {
    id: req.body.id,
    name: req.body.name,
    age: req.body.age
  }
  db.updateOne(updatedPhoto)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Unable to write to the database.')
    })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteOne(id)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Unable to write to the database.')
    })
})

module.exports = router