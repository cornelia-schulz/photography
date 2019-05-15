
exports.up = (knex, Promise) => {
    return knex.schema.createTable('photos', table => {
        table.increments('id').primary()
        table.string('link')
    })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('photos')
};
