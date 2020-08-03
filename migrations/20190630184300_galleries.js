
exports.up = (knex, Promise) => {
  return knex.schema.createTable('galleries', table => {
    table.increments('id').primary()
    table.string('cover_image')
    table.string('shop_link')
  })
}

exports.down = (knex, Promise) => {
  
}
