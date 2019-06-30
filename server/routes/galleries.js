const express = require('express')

const db = require('../galleries.js')

const router = express.Router()

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