const knex = require('knex')
const config = require('../knexfile').development
const db = knex(config)

module.exports = {
  getAll,
  getOne,
  createNew,
  updateOne,
  deleteOne
}

function getAll() {
  return db('photos')
  .select()
}

function getOne(id) {
  return db('photos')
  .where('id', id)
  .select()
}

function createNew(newPhoto){
  return db('photos')
  .insert(newPhoto)
}

function updateOne(updatedPhoto){
  return db('photos')
  .update(updatedPhoto)
}

function deleteOne(id){
  return db('photos')
  .where('id', id)
  .delete()
}