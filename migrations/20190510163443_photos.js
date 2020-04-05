
exports.up = (knex, Promise) => {
    return knex.schema.createTable('photos', table => {
        table.increments('id').primary()
        table.string('title')
        table.string('src')
        table.integer('width')
        table.integer('height')
    })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('photos')
};
