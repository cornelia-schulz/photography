
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photos').del()
    .then(() => {
      // Inserts seed entries
      return knex('photos').insert([
        {id: 1, title: 'Sydney Harbour Bridge', Link: '/images/harbour-bridge-sydney.jpg'},
        {id: 2, title: 'McLaren Falls', Link: '/images/mclaren-falls.jpg'},
        {id: 3, title: 'White Island', Link: '/images/white-island.jpg'},
        {id: 4, title: 'New Year fireworks', Link: '/images/auckland-new-years.jpg'},
        {id: 5, title: 'Harbour Bridge View', Link: '/images/harbour-bridge-sydney1.jpg'},
        {id: 6, title: 'Harbour Bridge', Link: '/images/harbour-bridge-sydney2.jpg'},
        {id: 7, title: 'Darling Harbour', Link: '/images/darling-harbour.jpg'},
        {id: 8, title: 'Muriwai', Link: '/images/muriwai-astro.jpg'},
        {id: 9, title: 'Anawhata', Link: '/images/anawhata.jpg'},
        {id: 10, title: 'Milkyway over Bethells', Link: '/images/bethells-milkyway.jpg'},
        {id: 11, title: 'Bethells', Link: '/images/bethells.jpg'},
        {id: 12, title: 'Pakiri', Link: '/images/pakiri.jpg'},
        {id: 13, title: 'Whatipu', Link: '/images/whatipu-river.jpg'},
        {id: 14, title: 'Milkyway over Whatipu', Link: '/images/whatipu-milkyway.jpg'},
        {id: 15, title: 'Blue Mountains', Link: '/images/blue-mountains.jpg'},
        {id: 16, title: 'Good morning, Sydney', Link: '/images/morning-bridge.jpg'},
        {id: 17, title: 'Pink Clouds', Link: '/images/darling-harbour-in-pink.jpg'},
        {id: 18, title: 'Early Morning', Link: '/images/early-morning.jpg'},
        {id: 19, title: 'Milkyway over the Fields of Light', Link: '/images/fields-of-light-tree.jpg'},
        {id: 20, title: 'Milkyway over Uluru', Link: '/images/fields-of-light.jpg'},
        {id: 21, title: 'Ghostly Tree', Link: '/images/kings-canyon-tree.jpg'},
        {id: 22, title: 'Desolate', Link: '/images/kings-canyon.jpg'},
        {id: 23, title: 'Harbour Bridge', Link: '/images/early-morning-bridge.jpg'},
        {id: 24, title: 'City Views', Link: '/images/mrs-macquaries-chair.jpg'},
        {id: 25, title: 'Natural Fireworks', Link: '/images/natural-fireworks.jpg'},
        {id: 26, title: 'Bridge View', Link: '/images/sydney-cbd-bw.jpg'},
        {id: 27, title: 'Sails', Link: '/images/sydneysails.jpg'}
      ]);
    });
};
