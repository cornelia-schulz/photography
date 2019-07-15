const express = require('express')

const db = require('../galleries.js')

const router = express.Router()

router.get('/:name', (req, res) => {
    const gallery = req.params.name
    db.getGallery(gallery)
        .then(gallery => {
            db.getGalleryImages(gallery[0].id)
                .then(images => {
                    res.json(images)
            })
        })
        .catch(error => {
            console.error(error)
            res.status(500).send('Unable to get gallery images')
        })
})

router.get('/', (req, res) => {
    db.getAll()
        .then(galleries => {
            res.json(galleries)
        })
        .catch(error => {
            console.error(error)
            res.status(500).send('Unable to get galleries from database.')
        })
})


module.exports = router