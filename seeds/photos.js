
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photos').del()
    .then(() => {
      // Inserts seed entries
      return knex('photos').insert([
        {id: 1, gallery_id: 3, src: '/images/harbour-bridge-sydney.jpg', location: 'Australia', category: 'cityscape', favourite: 'no', width: 4, height: 2},
        {id: 2, gallery_id: 1, src: '/images/mclaren-falls.jpg', location: 'New Zealand', category: 'landscape', favourite: 'yes', width: 4, height: 2},
        {id: 3, gallery_id: 1, src: '/images/white-island.jpg', location: 'New Zealand', category: 'landscape', favourite: 'no', width: 4, height: 2},
        {id: 4, gallery_id: 3, src: '/images/auckland-new-years.jpg', location: 'New Zealand', category: 'cityscape', favourite: 'no', width: 4, height: 3},
        {id: 5, gallery_id: 3, src: '/images/harbour-bridge-sydney1.jpg', location: 'Australia', category: 'cityscape', favourite: 'no', width: 4, height: 2},
        {id: 6, gallery_id: 3, src: '/images/darling-harbour-fireworks.jpg', location: 'Australia', category: 'cityscape', favourite: 'no', width: 3, height: 4},
        {id: 7, gallery_id: 3, src: '/images/auckland-new-year-fireworks.jpg', location: 'New Zealand', category: 'cityscape', favourite: 'yes', width: 4, height: 3},
        {id: 8, gallery_id: 2, src: '/images/muriwai-astro.jpg', location: 'New Zealand', category: 'landscape', favourite: 'yes', width: 4, height: 2},
        {id: 9, gallery_id: 1, src: '/images/anawhata.jpg', location: 'New Zealand', category: 'landscape', favourite: 'no', width: 4, height: 3},
        {id: 10, gallery_id: 2, src: '/images/bethells-milkyway.jpg', location: 'New Zealand', category: 'landscape', favourite: 'no', width: 3, height: 4},
        {id: 11, gallery_id: 2, src: '/images/bethells.jpg', location: 'New Zealand', category: 'landscape', favourite: 'no', width: 3, height: 4},
        {id: 12, gallery_id: 2, src: '/images/pakiri.jpg', location: 'New Zealand', category: 'landscape', favourite: 'no', width: 3, height: 4},
        {id: 13, gallery_id: 2, src: '/images/whatipu-river.jpg', location: 'New Zealand', category: 'landscape', favourite: 'no', width: 3, height: 4},
        {id: 14, gallery_id: 2, src: '/images/whatipu-milkyway.jpg', location: 'New Zealand', category: 'landscape', favourite: 'no', width: 4, height: 2},
        {id: 15, gallery_id: 4, src: '/images/blue-mountains.jpg', location: 'Australia', category: 'landscape', favourite: 'no', width: 4, height: 3},
        {id: 16, gallery_id: 3, src: '/images/morning-bridge.jpg', location: 'Australia', category: 'cityscape', favourite: 'no', width: 4, height: 3},
        {id: 17, gallery_id: 3, src: '/images/darling-harbour-in-pink.jpg', location: 'Australia', category: 'cityscape', favourite: 'yes', width: 4, height: 3},
        {id: 18, gallery_id: 3, src: '/images/rainy-gold-coast.jpg', location: 'Australia', category: 'cityscape', favourite: 'no', width: 4, height: 3},
        {id: 19, gallery_id: 2, src: '/images/fields-of-light-tree.jpg', location: 'Australia', category: 'landscape', favourite: 'no', width: 3, height: 4},
        {id: 20, gallery_id: 2, src: '/images/fields-of-light.jpg', location: 'Australia', category: 'landscape', favourite: 'no', width: 3, height: 4},
        {id: 21, gallery_id: 4, src: '/images/kings-canyon-tree.jpg', location: 'Australia', category: 'landscape', favourite: 'no', width: 3, height: 4},
        {id: 22, gallery_id: 4, src: '/images/kings-canyon.jpg', location: 'Australia', category: 'landscape', favourite: 'no', width: 3, height: 4},
        {id: 23, gallery_id: 3, src: '/images/early-morning-bridge.jpg', location: 'Australia', category: 'cityscape', favourite: 'no', width: 4, height: 2},
        {id: 24, gallery_id: 3, src: '/images/mrs-macquaries-chair.jpg', location: 'Australia', category: 'cityscape', favourite: 'no', width: 4, height: 1},
        {id: 25, gallery_id: 3, src: '/images/natural-fireworks.jpg', location: 'Australia', category: 'cityscape', favourite: 'no', width: 4, height: 1},
        {id: 26, gallery_id: 6, src: '/images/sydney-cbd-bw.jpg', location: 'Australia', category: 'landscape', favourite: 'no', width: 3, height: 4},
        {id: 27, gallery_id: 3, src: '/images/gold-coast-view.jpg', location: 'Australia', category: 'cityscape', favourite: 'no', width: 4, height: 3},
        {id: 28, gallery_id: 5, src: '/images/rainbow-parikeet.jpg', location: 'Australia', category: 'landscape', favourite: 'no', width: 4, height: 3},
        {id: 29, gallery_id: 3, src: '/images/sydney-harbour.jpg', location: 'Australia', category: 'cityscape', favourite: 'no', width: 4, height: 3},
        {id: 30, gallery_id: 3, src: '/images/sydney-harbour-1.jpg', location: 'Australia', category: 'cityscape', favourite: 'no', width: 4, height: 1},
        {id: 31, gallery_id: 3, src: '/images/smokey-gold-coast-sunrise.jpg', location: 'Australia', category: 'cityscape', favourite: 'no', width: 4, height: 3},
        {id: 32, gallery_id: 3, src: '/images/pink-gold-coast-sunset.jpg', location: 'Australia', category: 'cityscape', favourite: 'no', width: 3, height: 4},
        {id: 33, gallery_id: 3, src: '/images/sails.jpg', location: 'Australia', category: 'cityscape', favourite: 'yes', width: 4, height: 4},
        {id: 34, gallery_id: 3, src: '/images/sydney-park-view.jpg', location: 'Australia', category: 'cityscape', favourite: 'no', width: 4, height: 3},
        {id: 35, gallery_id: 3, src: '/images/gold-coast-storm.jpg', location: 'Australia', category: 'cityscape', favourite: 'no', width: 3, height: 4},
        {id: 36, gallery_id: 3, src: '/images/opera-house-sunrise.jpg', location: 'Australia', category: 'cityscape', favourite: 'no', width: 4, height: 1},
        {id: 37, gallery_id: 3, src: '/images/storm-over-sydney.jpg', location: 'Australia', category: 'cityscape', favourite: 'no', width: 4, height: 3},
        {id: 38, gallery_id: 3, src: '/images/smokey-sunrise.jpg', location: 'Australia', category: 'cityscape', favourite: 'no', width: 4, height: 3},
        {id: 39, gallery_id: 3, src: '/images/gold-coast-blues.jpg', location: 'Australia', category: 'cityscape', favourite: 'no', width: 3, height: 4},
        {id: 40, gallery_id: 3, src: '/images/auckland-fireworks.jpg', location: 'New Zealand', category: 'cityscape', favourite: 'no', width: 4, height: 3},
        {id: 41, gallery_id: 3, src: '/images/auckland-pink.jpg', location: 'New Zealand', category: 'cityscape', favourite: 'no', width: 4, height: 3},
        {id: 42, gallery_id: 3, src: '/images/city-lights.jpg', location: 'New Zealand', category: 'cityscape', favourite: 'no', width: 4, height: 3},
        {id: 43, gallery_id: 3, src: '/images/fireworks-in-auckland.jpg', location: 'New Zealand', category: 'cityscape', favourite: 'no', width: 4, height: 3},
        {id: 44, gallery_id: 3, src: '/images/melbourne-moon.jpg', location: 'Australia', category: 'cityscape', favourite: 'no', width: 4, height: 3},
        {id: 45, gallery_id: 3, src: '/images/mt-eden.jpg', location: 'New Zealand', category: 'cityscape', favourite: 'no', width: 4, height: 3},
        {id: 46, gallery_id: 3, src: '/images/spaghetti-junction.jpg', location: 'New Zealand', category: 'cityscape', favourite: 'no', width: 4, height: 3},
        {id: 47, gallery_id: 3, src: '/images/wellington-CBD.jpg', location: 'New Zealand', category: 'cityscape', favourite: 'no', width: 4, height: 3},
        {id: 48, gallery_id: 3, src: '/images/westhaven.jpg', location: 'New Zealand', category: 'cityscape', favourite: 'no', width: 4, height: 3}
      ]);
    });
};
