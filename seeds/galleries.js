
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('galleries').del()
    .then(function () {
      // Inserts seed entries
      return knex('galleries').insert([
        {id: 1, name: 'Landscapes', cover_image: '/images/maraetai.jpg'},
        {id: 2, name: 'Astro', cover_image: '/images/pakiri-astro.jpg'},
        {id: 3, name: 'Cityscapes', cover_image: '/images/sydney-cbd.jpg'}
      ]);
    });
};
