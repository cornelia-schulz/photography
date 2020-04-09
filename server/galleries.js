const knex = require('knex')
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
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
    return db('photo_details')
    .leftJoin('photos', 'photos.id', 'photo_details.photo_id')
    .where('gallery_id', id)
    .andWhere('language_id', '1')
    .select()
}