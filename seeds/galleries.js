
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('galleries').del()
    .then(function () {
      // Inserts seed entries
      return knex('galleries').insert([
        {id: 1, cover_image: '/images/maraetai-pier.jpg', shop_link: ''},
        {id: 2, cover_image: '/images/pakiri-astro.jpg', shop_link: 'https://www.redbubble.com/people/firzhugh/shop?artistUserName=firzhugh&asc=u&collections=1354121&iaCode=all-departments&sortOrder=relevant'},
        {id: 3, cover_image: '/images/sydney-cbd.jpg', shop_link: 'https://www.redbubble.com/people/firzhugh/shop?artistUserName=firzhugh&asc=u&collections=1354119&iaCode=all-departments&sortOrder=relevant'},
        {id: 4, cover_image: '/images/gold-coast.jpg', shop_link: 'https://www.redbubble.com/people/firzhugh/shop?artistUserName=firzhugh&asc=u&collections=1354118&iaCode=all-departments&sortOrder=relevant'},
        {id: 5, cover_image: '/images/rainbow-parikeets.jpg', shop_link: ''},
        {id: 6, cover_image: '/images/in-flight-cover.jpg', shop_link: ''}
      ]);
    });
};
