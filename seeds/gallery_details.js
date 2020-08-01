
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gallery_details').del()
    .then(function () {
      // Inserts seed entries
      return knex('gallery_details').insert([
        {id: 1, gallery_id: 1, language_id: 1, name: 'Landscapes New Zealand'},
        {id: 2, gallery_id: 2, language_id: 1, name: 'Astro'},
        {id: 3, gallery_id: 3, language_id: 1, name: 'Cityscapes'},
        {id: 4, gallery_id: 4, language_id: 1, name: 'Landscapes Australia'},
        {id: 5, gallery_id: 5, language_id: 1, name: 'Wildlife'},
        {id: 6, gallery_id: 6, language_id: 1, name: 'Monochrome'},
        {id: 7, gallery_id: 1, language_id: 2, name: 'Landschaften Neuseeland'},
        {id: 8, gallery_id: 2, language_id: 2, name: 'Nachthimmel'},
        {id: 9, gallery_id: 3, language_id: 2, name: 'Stadtansichten'},
        {id: 10, gallery_id: 4, language_id: 2, name: 'Landschaften Australien'},
        {id: 11, gallery_id: 5, language_id: 2, name: 'Tierwelt'},
        {id: 12, gallery_id: 6, language_id: 2, name: 'Schwarz-weiss'}
      ]);
    });
};