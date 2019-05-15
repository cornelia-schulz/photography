
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('languages').del()
    .then(function () {
      // Inserts seed entries
      return knex('languages').insert([
        {id: 1, name: 'English', code: 'en'},
        {id: 2, name: 'German', code: 'de'}
      ]);
    });
};
