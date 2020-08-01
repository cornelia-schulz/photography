
exports.up = (knex, Promise) => {
  return knex.schema.createTable('gallery_details', table => {
    table.increments('id').primary()
    table.integer('gallery_id')
    table.integer('language_id')
    table.string('name')
  })
};

exports.down = (knex, Promise) => {
  
};
