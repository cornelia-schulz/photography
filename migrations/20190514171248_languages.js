
exports.up = (knex, Promise) => {
  return knex.schema.createTable('languages', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('code')
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('languages')
};
