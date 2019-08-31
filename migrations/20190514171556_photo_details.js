
exports.up = (knex, Promise) => {
  return knex.schema.createTable('photo_details', table => {
      table.increments('id').primary()
      table.integer('photo_id')
      table.integer('language_id')
      table.integer('gallery_id')
      table.string('title')
      table.string('description')
      table.string('location')
      table.string('category')
      table.string('favourite')
  })
}

exports.down = function(knex, Promise) {
  
}
