
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('galleries').del()
    .then(function () {
      // Inserts seed entries
      return knex('galleries').insert([
        {id: 1, name: 'Landscapes New Zealand', cover_image: '/images/maraetai-pier.jpg'},
        {id: 2, name: 'Astro', cover_image: '/images/pakiri-astro.jpg'},
        {id: 3, name: 'Cityscapes', cover_image: '/images/sydney-cbd.jpg'},
        {id: 4, name: 'Landscapes Australia', cover_image: '/images/gold-coast.jpg'},
        {id: 5, name: 'Wildlife', cover_image: '/images/rainbow-parikeets.jpg'},
        {id: 6, name: 'Monochrome', cover_image: '/images/in-flight-cover.jpg'}
      ]);
    });
};
