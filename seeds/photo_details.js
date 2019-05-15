
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photo_details').del()
    .then(function () {
      // Inserts seed entries
      return knex('photo_details').insert([
        {id: 1, photo_id: 1, language_id: 1, title: 'Habour Bridge in Sydney', description: '', location: 'Australia', category: 'cityscape'},
        {id: 2, photo_id: 1, language_id: 2, title: 'Habour Bridge in Sydney', description: '', location: 'Australia', category: 'cityscape'},
        {id: 3, photo_id: 2, language_id: 1, title: 'McLaren Falls', description: '', location: 'New Zealand', category: 'landscape'},
        {id: 4, photo_id: 2, language_id: 2, title: 'McLaren Falls', description: '', location: 'New Zealand', category: 'landscape'},
        {id: 5, photo_id: 3, language_id: 1, title: 'White Island', description: '', location: 'New Zealand', category: 'landscape'},
        {id: 6, photo_id: 3, language_id: 2, title: 'White Island', description: '', location: 'New Zealand', category: 'landscape'}
      ]);
    });
};
