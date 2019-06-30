
exports.up = (knex, Promise) => {
  return knex.schema.createTable('galleries', table => {
      table.increments('id').primary()
      table.string('name')
      table.string('cover_image')
  })
}

exports.down = (knex, Promise) => {
  
}
