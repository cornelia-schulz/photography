
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photos').del()
    .then(() => {
      // Inserts seed entries
      return knex('photos').insert([
        {id: 1, title: 'Sydney Harbour Bridge', link: ''},
        {id: 2, title: 'McLaren Falls', link: ''},
        {id: 3, title: 'White Island', link: ''}
      ]);
    });
};
