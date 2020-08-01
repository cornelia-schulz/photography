const knex = require('knex')
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const db = knex(config)

module.exports = {
    getAll,
    getGallery,
    getGalleryImages,
    getLanguage
}

function getLanguage(locale) {
    return db('languages')
    .where('code', locale)
    .select()
}

function getAll(language) {
    return db('gallery_details')
    .leftJoin('galleries', 'gallery_details.gallery_id', 'galleries.id')
    .where('language_id', language)
    .select()
}

function getGallery(gallery) {
    return db('galleries')
    .leftJoin('gallery_details', 'galleries.id', 'gallery_details.gallery_id')
    .where('name', gallery)
    .select()
}

function getGalleryImages(id, locale) {
    return db('photo_details')
    .leftJoin('photos', 'photos.id', 'photo_details.photo_id')
    .where('gallery_id', id)
    .andWhere('language_id', locale)
    .select()
}