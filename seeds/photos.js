
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photos').del()
    .then(() => {
      // Inserts seed entries
      return knex('photos').insert([
        {id: 1, title: 'Sydney Harbour Bridge', link: '/images/harbour-bridge-sydney.jpg'},
        {id: 2, title: 'McLaren Falls', link: '/images/mclaren-falls.jpg'},
        {id: 3, title: 'White Island', link: '/images/white-island.jpg'},
        {id: 4, title: 'New Year fireworks', link: '/images/auckland-new-years.jpg'},
        {id: 5, title: 'Harbour Bridge View', Link: '/images/harbour-bridge-sydney1.jpg'},
        {id: 6, title: 'Harbour Bridge', Link: '/images/harbour-bridge-sydney2.jpg'}
      ]);
    });
};
