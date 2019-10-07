
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photo_details').del()
    .then(function () {
      // Inserts seed entries
      return knex('photo_details').insert([
        {id: 1, photo_id: 1, language_id: 1, gallery_id: 3, title: 'Habour Bridge in Sydney', description: '', location: 'Australia', category: 'cityscape', favourite: 'no'},
        {id: 2, photo_id: 1, language_id: 2, gallery_id: 3, title: 'Habour Bridge in Sydney', description: '', location: 'Australia', category: 'cityscape', favourite: 'no'},
        {id: 3, photo_id: 2, language_id: 1, gallery_id: 1, title: 'McLaren Falls', description: '', location: 'New Zealand', category: 'landscape', favourite: 'yes'},
        {id: 4, photo_id: 2, language_id: 2, gallery_id: 1, title: 'McLaren Falls', description: '', location: 'New Zealand', category: 'landscape', favourite: 'yes'},
        {id: 5, photo_id: 3, language_id: 1, gallery_id: 1, title: 'White Island', description: '', location: 'New Zealand', category: 'landscape', favourite: 'no'},
        {id: 6, photo_id: 3, language_id: 2, gallery_id: 1, title: 'White Island', description: '', location: 'New Zealand', category: 'landscape', favourite: 'no'},
        {id: 7, photo_id: 4, language_id: 1, gallery_id: 3, title: 'Auckland New Years', description: '', location: 'New Zealand', category: 'cityscape', favourite: 'no'},
        {id: 8, photo_id: 5, language_id: 1, gallery_id: 3, title: 'Harbour Bridge View', description: '', location: 'Australia', category: 'cityscape', favourite: 'no'},
        {id: 9, photo_id: 6, language_id: 1, gallery_id: 3, title: 'Harbour Bridge', description: '', location: 'Australia', category: 'cityscape', favourite: 'no'},
        {id: 10, photo_id: 7, language_id: 1, gallery_id: 3, title: 'Darling Harbour', description: '', location: 'Australia', category: 'cityscape', favourite: 'yes'},
        {id: 11, photo_id: 8, language_id: 1, gallery_id: 2, title: 'Muriwai', description: '', location: 'New Zealand', category: 'astro', favourite: 'yes'},
        {id: 12, photo_id: 9, language_id: 1, gallery_id: 1, title: 'Anawhata', description: '', location: 'New Zealand', category: 'astro', favourite: 'no'},
        {id: 13, photo_id: 10, language_id: 1, gallery_id: 2, title: 'Milkyway over Bethells', description: '', location: 'New Zealand', category: 'astro', favourite: 'yes'},
        {id: 14, photo_id: 11, language_id: 1, gallery_id: 2, title: 'Bethells', description: '', location: 'New Zealand', category: 'astro', favourite: 'no'},
        {id: 15, photo_id: 12, language_id: 1, gallery_id: 2, title: 'Pakiri', description: '', location: 'New Zealand', category: 'astro', favourite: 'no'},
        {id: 16, photo_id: 13, language_id: 1, gallery_id: 2, title: 'Whatipu', description: '', location: 'New Zealand', category: 'astro', favourite: 'no'},
        {id: 17, photo_id: 14, language_id: 1, gallery_id: 2, title: 'Milkyway over Whatipu', description: '', location: 'New Zealand', category: 'astro', favourite: 'no'},
        {id: 18,photo_id: 15, language_id: 1, gallery_id: 1, title: 'Blue Mountains', description: '', location: 'Australia', category: 'landscape', favourite: 'no'},
        {id: 19, photo_id: 17, language_id: 1, gallery_id: 3,  title: 'Pink Clouds', description: '', location: 'Australia', category: 'cityscape', favourite: 'yes'},
        {id: 26, photo_id: 23, language_id: 1, gallery_id: 3, title: 'Harbour Bridge', description: '', location: 'Australia', category: 'cityscape', favourite: 'no'},
        {id: 21, photo_id: 18, language_id: 1, gallery_id: 3, title: 'Early Morning',  description: '', location: 'Australia', category: 'cityscape', favourite: 'no'},
        {id: 22, photo_id: 19, language_id: 1, gallery_id: 2, title: 'Milkyway over the Fields of Light', description: '', location: 'Australia', category: 'astro', favourite: 'no'},
        {id: 23, photo_id: 20, language_id: 1, gallery_id: 2, title: 'Milkyway over Uluru', description: '', location: 'Australia', category: 'astro', favourite: 'no'},
        {id: 24, photo_id: 21, language_id: 1, gallery_id: 1, title: 'Ghostly Tree', description: '', location: 'Australia', category: 'landscape', favourite: 'no'},
        {id: 25, photo_id: 22, language_id: 1, gallery_id: 1, title: 'Desolate', description: '', location: 'Australia', category: 'landscape', favourite: 'no'},
        {id: 20, photo_id: 16, language_id: 1, gallery_id: 3, title: 'Good morning, Sydney', description: '', location: 'Australia', category: 'cityscape', favourite: 'no'},
        {id: 27, photo_id: 24, language_id: 1, gallery_id: 3, title: 'City Views', description: '', location: 'Australia', category: 'cityscape', favourite: 'no'},
        {id: 28, photo_id: 25, language_id: 1, gallery_id: 3, title: 'Natural Fireworks', description: '', location: 'Australia', category: 'cityscape', favourite: 'no'},
        {id: 29, photo_id: 26, language_id: 1, gallery_id: 4, title: 'Bridge View', description: '', location: 'Australia', category: 'cityscape', favourite: 'no'},
        {id: 30, photo_id: 27, language_id: 1, gallery_id: 3, title: 'Sails', description: '', location: 'Australia', category: 'cityscape', favourite: 'no'}
      ]);
    });
};
