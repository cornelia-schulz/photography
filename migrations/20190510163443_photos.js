
exports.up = (knex, Promise) => {
    return knex.schema.createTable('photos', table => {
        table.increments('id').primary()
        table.integer('gallery_id')
        table.string('src')
        table.string('location')
        table.string('category')
        table.string('favourite')
        table.integer('width')
        table.integer('height')
    })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('photos')
};
