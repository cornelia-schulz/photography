const knex = require('knex')
const config = require('../knexfile').development
const db = knex(config)

module.exports = {
    getAll,
    getGallery,
    getGalleryImages
}

function getAll() {
    return db('galleries')
    .select()
}

function getGallery(gallery) {
    return db('galleries')
    .where('name', gallery)
    .select()
}

function getGalleryImages(id) {
    return db('photos')
    .where('id', id)
    .select()
}