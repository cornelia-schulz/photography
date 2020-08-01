const express = require('express')

const db = require('../galleries.js')

const router = express.Router()

router.get('/lang/:locale', (req, res) => {
    const language = req.params.locale
    db.getLanguage(language)
        .then(language => {
            db.getAll(language[0].id)
            .then(galleries => {
                res.json(galleries)
            })
            .catch(error => {
                console.error(error)
                res.status(500).send('Unable to get galleries from database.')
            })
        })
})

router.get('/:name/:locale', (req, res) => {
    const gallery = req.params.name
    const language = req.params.locale
    let languageId = 1
    let galleryDetails = {}
    db.getLanguage(language)
        .then(locale => {
            languageId = locale[0].id
            db.getGallery(gallery)
                .then(gallery => {
                    galleryDetails = gallery[0]
                    db.getGalleryImages(gallery[0].gallery_id, languageId)
                        .then(images => {
                            const response = {
                                images: images,
                                galleryDetails: galleryDetails
                            }
                            res.json(response)
                    })
                })
                .catch(error => {
                    console.error(error)
                    res.status(500).send('Unable to get gallery images')
                })
                })
    
})


module.exports = router