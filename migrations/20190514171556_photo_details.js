
exports.up = (knex, Promise) => {
  return knex.schema.createTable('photo_details', table => {
      table.increments('id').primary()
      table.integer('photo_id')
      table.integer('language_id')
      table.string('title')
      table.string('description')
  })
}

exports.down = function(knex, Promise) {
  
}
