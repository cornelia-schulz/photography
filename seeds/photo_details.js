
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
        {id: 17, photo_id: 14, language_id: 1, gallery_id: 2, title: 'Milkyway over Whatipu', description: '', location: 'New Zealand', category: 'astro', favourite: 'no'}
      ]);
    });
};
