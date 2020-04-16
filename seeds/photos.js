
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photos').del()
    .then(() => {
      // Inserts seed entries
      return knex('photos').insert([
        {id: 1, title: 'Sydney Harbour Bridge', src: '/images/harbour-bridge-sydney.jpg', width: 4, height: 2},
        {id: 2, title: 'McLaren Falls', src: '/images/mclaren-falls.jpg', width: 4, height: 2},
        {id: 3, title: 'White Island', src: '/images/white-island.jpg', width: 4, height: 2},
        {id: 4, title: 'New Year fireworks', src: '/images/auckland-new-years.jpg', width: 4, height: 3},
        {id: 5, title: 'Harbour Bridge View', src: '/images/harbour-bridge-sydney1.jpg', width: 4, height: 3},
        {id: 6, title: 'Harbour Bridge', src: '/images/harbour-bridge-sydney2.jpg', width: 4, height: 2},
        {id: 7, title: 'Darling Harbour', src: '/images/darling-harbour.jpg', width: 4, height: 3},
        {id: 8, title: 'Muriwai', src: '/images/muriwai-astro.jpg', width: 4, height: 2},
        {id: 9, title: 'Anawhata', src: '/images/anawhata.jpg', width: 4, height: 3},
        {id: 10, title: 'Milkyway over Bethells', src: '/images/bethells-milkyway.jpg', width: 3, height: 4},
        {id: 11, title: 'Bethells', src: '/images/bethells.jpg', width: 3, height: 4},
        {id: 12, title: 'Pakiri', src: '/images/pakiri.jpg', width: 3, height: 4},
        {id: 13, title: 'Whatipu', src: '/images/whatipu-river.jpg', width: 3, height: 4},
        {id: 14, title: 'Milkyway over Whatipu', src: '/images/whatipu-milkyway.jpg', width: 4, height: 2},
        {id: 15, title: 'Blue Mountains', src: '/images/blue-mountains.jpg', width: 4, height: 3},
        {id: 16, title: 'Good morning, Sydney', src: '/images/morning-bridge.jpg', width: 4, height: 3},
        {id: 17, title: 'Pink Clouds', src: '/images/darling-harbour-in-pink.jpg', width: 4, height: 3},
        {id: 18, title: 'Early Morning', src: '/images/early-morning.jpg', width: 4, height: 2},
        {id: 19, title: 'Milkyway over the Fields of Light', src: '/images/fields-of-light-tree.jpg', width: 3, height: 4},
        {id: 20, title: 'Milkyway over Uluru', src: '/images/fields-of-light.jpg', width: 3, height: 4},
        {id: 21, title: 'Ghostly Tree', src: '/images/kings-canyon-tree.jpg', width: 3, height: 4},
        {id: 22, title: 'Desolate', src: '/images/kings-canyon.jpg', width: 3, height: 4},
        {id: 23, title: 'Harbour Bridge', src: '/images/early-morning-bridge.jpg', width: 4, height: 2},
        {id: 24, title: 'City Views', src: '/images/mrs-macquaries-chair.jpg', width: 4, height: 1},
        {id: 25, title: 'Natural Fireworks', src: '/images/natural-fireworks.jpg', width: 4, height: 1},
        {id: 26, title: 'Bridge View', src: '/images/sydney-cbd-bw.jpg', width: 3, height: 4},
        {id: 27, title: 'Sails', src: '/images/sydney-sails.jpg', width: 4, height: 2},
        {id: 28, title: 'Rainbow Parikeet', src: '/images/rainbow-parikeet.jpg', width: 4, height: 3}
      ]);
    });
};
