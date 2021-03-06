
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photo_details').del()
  .then(function () {
    // Inserts seed entries
    return knex('photo_details').insert([
    {id: 1, photo_id: 1, language_id: 1, title: 'Habour Bridge in Sydney', description: ''},
    {id: 2, photo_id: 1, language_id: 2, title: 'Habour Bridge in Sydney', description: ''},
    {id: 3, photo_id: 2, language_id: 1, title: 'McLaren Falls', description: ''},
    {id: 4, photo_id: 2, language_id: 2, title: 'McLaren Falls', description: ''},
    {id: 5, photo_id: 3, language_id: 1, title: 'White Island', description: ''},
    {id: 6, photo_id: 3, language_id: 2, title: 'White Island', description: ''},
    {id: 7, photo_id: 4, language_id: 1, title: 'Auckland New Years', description: ''},
    {id: 8, photo_id: 5, language_id: 1, title: 'Harbour Bridge View', description: ''},
    {id: 9, photo_id: 6, language_id: 1, title: 'Darling Harbour Fireworks', description: ''},
    {id: 11, photo_id: 8, language_id: 1, title: 'Muriwai', description: ''},
    {id: 12, photo_id: 9, language_id: 1, title: 'Anawhata', description: ''},
    {id: 13, photo_id: 10, language_id: 1, title: 'Milkyway over Bethells', description: ''},
    {id: 14, photo_id: 11, language_id: 1, title: 'Bethells', description: ''},
    {id: 15, photo_id: 12, language_id: 1, title: 'Pakiri', description: ''},
    {id: 16, photo_id: 13, language_id: 1, title: 'Whatipu', description: ''},
    {id: 17, photo_id: 14, language_id: 1, title: 'Milkyway over Whatipu', description: ''},
    {id: 19, photo_id: 17, language_id: 1, title: 'Pink Clouds', description: ''},
    {id: 26, photo_id: 23, language_id: 1, title: 'Harbour Bridge', description: ''},
    {id: 21, photo_id: 18, language_id: 1, title: 'Rainy Gold Coast',  description: ''},
    {id: 22, photo_id: 19, language_id: 1, title: 'Milkyway over the Fields of Light', description: ''},
    {id: 23, photo_id: 20, language_id: 1, title: 'Milkyway over Uluru', description: ''},
    {id: 24, photo_id: 21, language_id: 1, title: 'Ghostly Tree', description: ''},
    {id: 25, photo_id: 22, language_id: 1, title: 'Desolate', description: ''},
    {id: 20, photo_id: 16, language_id: 1, title: 'Good morning, Sydney', description: ''},
    {id: 28, photo_id: 25, language_id: 1, title: 'Natural Fireworks', description: ''},
    {id: 29, photo_id: 26, language_id: 1, title: 'Bridge View', description: ''},
    {id: 30, photo_id: 27, language_id: 1, title: 'Gold Coast View', description: ''},
    {id: 31, photo_id: 28, language_id: 1, title: 'Rainbow Lorikeet', description: ''},
    {id: 32, photo_id: 29, language_id: 1, title: 'Sydney Harbour', description: ''},
    {id: 34, photo_id: 31, language_id: 1, title: 'Smokey Gold Coast Sunrise', description: ''},
    {id: 35, photo_id: 32, language_id: 1, title: 'Pink Gold Coast Sunset', description: ''},
    {id: 36, photo_id: 33, language_id: 1, title: 'Sydney Sails', description: ''},
    {id: 37, photo_id: 34, language_id: 1, title: 'Sydney Park View', description: ''},
    {id: 38, photo_id: 35, language_id: 1, title: 'Gold Coast Storm', description: ''},
    {id: 40, photo_id: 37, language_id: 1, title: 'Storm over Sydney', description: ''},
    {id: 41, photo_id: 38, language_id: 1, title: 'Smokey Morning', description: ''},
    {id: 42, photo_id: 39, language_id: 1, title: 'Gold Coast Blues', description: ''},
    {id: 44, photo_id: 41, language_id: 1, title: 'Auckland in Pink', description: ''},
    {id: 46, photo_id: 43, language_id: 1, title: 'Fireworks in Auckland', description: ''},
    {id: 47, photo_id: 44, language_id: 1, title: 'Moon over Melbourne', description: ''},
    {id: 48, photo_id: 45, language_id: 1, title: 'Mt Eden', description: ''},
    {id: 49, photo_id: 46, language_id: 1, title: 'Spaghetti Junction', description: ''},
    {id: 50, photo_id: 47, language_id: 1, title: 'Wellington CBD', description: ''},
    {id: 51, photo_id: 48, language_id: 1, title: 'Westhaven', description: ''},
    {id: 52, photo_id: 4, language_id: 2, title: 'Auckland Neujahr', description: ''},
    {id: 53, photo_id: 5, language_id: 2, title: 'Sicht auf die Harbour Bridge', description: ''},
    {id: 54, photo_id: 6, language_id: 2, title: 'Darling Harbour Feuerwerk', description: ''},
    {id: 56, photo_id: 8, language_id: 2 , title: 'Muriwai', description: ''},
    {id: 57, photo_id: 9, language_id: 2 , title: 'Anawhata', description: ''},
    {id: 58, photo_id: 10, language_id: 2 , title: 'Milkyway über Bethells', description: ''},
    {id: 59, photo_id: 11, language_id: 2 , title: 'Bethells', description: ''},
    {id: 60, photo_id: 12, language_id: 2 , title: 'Pakiri', description: ''},
    {id: 61, photo_id: 13, language_id: 2 , title: 'Whatipu', description: ''},
    {id: 62, photo_id: 14, language_id: 2 , title: 'Milchstrasse über Whatipu', description: ''},
    {id: 64, photo_id: 17, language_id: 2 , title: 'Rosa Wolken', description: ''},
    {id: 65, photo_id: 23, language_id: 2 , title: 'Harbour Bridge', description: ''},
    {id: 66, photo_id: 18, language_id: 2 , title: 'Verregnete Gold Coast',  description: ''},
    {id: 67, photo_id: 19, language_id: 2 , title: 'Milchstrasse über den Fields of Light', description: ''},
    {id: 68, photo_id: 20, language_id: 2 , title: 'Milchstrasse über Uluru', description: ''},
    {id: 69, photo_id: 21, language_id: 2 , title: 'Geisterbaum', description: ''},
    {id: 70, photo_id: 22, language_id: 2 , title: 'Verlassen', description: ''},
    {id: 71, photo_id: 16, language_id: 2 , title: 'Guten Morgen, Sydney', description: ''},
    {id: 73, photo_id: 25, language_id: 2 , title: 'Natürliches Feuerwerk', description: ''},
    {id: 74, photo_id: 26, language_id: 2 , title: 'Brückenansicht', description: ''},
    {id: 75, photo_id: 27, language_id: 2 , title: 'Gold Coast', description: ''},
    {id: 76, photo_id: 28, language_id: 2 , title: 'Regenbogenpapagei', description: ''},
    {id: 77, photo_id: 29, language_id: 2 , title: 'Sydney Harbour', description: ''},
    {id: 79, photo_id: 31, language_id: 2 , title: 'Verrauchter Goldküstensonnenaufgang', description: ''},
    {id: 80, photo_id: 32, language_id: 2 , title: 'Pinker Goldküstensonnenuntergang', description: ''},
    {id: 81, photo_id: 33, language_id: 2 , title: 'Sydney Segel', description: ''},
    {id: 82, photo_id: 34, language_id: 2 , title: 'Sydney Park Aussicht', description: ''},
    {id: 83, photo_id: 35, language_id: 2 , title: 'Goldküstensturm', description: ''},
    {id: 85, photo_id: 37, language_id: 2 , title: 'Sturm über Sydney', description: ''},
    {id: 86, photo_id: 38, language_id: 2 , title: 'Verrauchter Morgen', description: ''},
    {id: 87, photo_id: 39, language_id: 2 , title: 'Goldküstenblues', description: ''},
    {id: 89, photo_id: 41, language_id: 2 , title: 'Auckland in pink', description: ''},
    {id: 91, photo_id: 43, language_id: 2 , title: 'Feuerwerk in Auckland', description: ''},
    {id: 92, photo_id: 44, language_id: 2 , title: 'Mond über Melbourne', description: ''},
    {id: 93, photo_id: 45, language_id: 2 , title: 'Mt Eden', description: ''},
    {id: 94, photo_id: 46, language_id: 2 , title: 'Spaghetti Junction', description: ''},
    {id: 95, photo_id: 47, language_id: 2 , title: 'Wellington CBD', description: ''},
    {id: 96, photo_id: 48, language_id: 2 , title: 'Westhaven', description: ''},
    {id: 97, photo_id: 49, language_id: 1 , title: 'Barrenjoey Milkyway', description: ''},
    {id: 98, photo_id: 49, language_id: 2 , title: 'Milchstrasse über Barrenjoey', description: ''},
    {id: 99, photo_id: 50, language_id: 1 , title: 'Beach and Milkyway', description: ''},
    {id: 100, photo_id: 50, language_id: 2 , title: 'Strand und Milchstrasse', description: ''},
    {id: 101, photo_id: 51, language_id: 1 , title: 'Milkyway over Palm Beach', description: ''},
    {id: 102, photo_id: 51, language_id: 2 , title: 'Milchstrasse über Palm Beach', description: ''},
    {id: 103, photo_id: 52, language_id: 1 , title: 'Milkyway over Palm Beach', description: ''},
    {id: 104, photo_id: 52, language_id: 2 , title: 'Milchstrasse über Palm Beach', description: ''},
    {id: 105, photo_id: 53, language_id: 1 , title: 'View from Pioneer Lookout', description: ''},
    {id: 106, photo_id: 53, language_id: 2 , title: 'Aussicht vom Pioneer Aussichtspunkt', description: ''},
    {id: 107, photo_id: 54, language_id: 1 , title: 'Shoalhaven Milkyway', description: ''},
    {id: 108, photo_id: 54, language_id: 2 , title: 'Milchstrasse über Shoalhaven', description: ''},
    {id: 109, photo_id: 55, language_id: 1 , title: 'Spiderwasp and Huntsman', description: ''},
    {id: 110, photo_id: 55, language_id: 2 , title: 'Wegwespe und Huntsman', description: ''},
    {id: 111, photo_id: 56, language_id: 1 , title: 'Grey-headed Flying Fox', description: ''},
    {id: 112, photo_id: 56, language_id: 2 , title: 'Flughund', description: ''},
    {id: 113, photo_id: 57, language_id: 1 , title: 'Juvenile Humpback Whale', description: ''},
    {id: 114, photo_id: 57, language_id: 2 , title: 'Junger Buckelwal', description: ''},
    {id: 115, photo_id: 58, language_id: 1 , title: 'Milkyway over Barrenjoey', description: ''},
    {id: 116, photo_id: 58, language_id: 2 , title: 'Milchstrasse über Barrenjoey', description: ''},
    {id: 117, photo_id: 59, language_id: 1 , title: 'Barrenjoey Sunset', description: ''},
    {id: 118, photo_id: 59, language_id: 2 , title: 'Sonnenuntergang über Barrenjoey', description: ''},
    {id: 119, photo_id: 60, language_id: 1 , title: 'Barrenjoey Sunset', description: ''},
    {id: 120, photo_id: 60, language_id: 2 , title: 'Sonnenuntergang über Barrenjoey', description: ''},
    {id: 121, photo_id: 61, language_id: 1 , title: 'Starfish at Muriwai', description: ''},
    {id: 122, photo_id: 61, language_id: 2 , title: 'Seesterne in Muriwai', description: ''},
    {id: 123, photo_id: 62, language_id: 1 , title: 'Bioluminescence at Muriwai', description: ''},
    {id: 124, photo_id: 62, language_id: 2 , title: 'Milchstrasse über Muriwai', description: ''},
    {id: 125, photo_id: 63, language_id: 1 , title: 'Chateau Tongariro', description: ''},
    {id: 126, photo_id: 63, language_id: 2 , title: 'Chateau Tongariro', description: ''},
    {id: 127, photo_id: 64, language_id: 1 , title: 'Pink Mountains', description: ''},
    {id: 128, photo_id: 64, language_id: 2 , title: 'Berge in rosa', description: ''},
    {id: 129, photo_id: 65, language_id: 1 , title: 'Mt Ngauruhoe', description: ''},
    {id: 130, photo_id: 65, language_id: 2 , title: 'Mount Ngauruhoe', description: ''},
    {id: 131, photo_id: 66, language_id: 1 , title: 'Australasian Gannet', description: ''},
    {id: 132, photo_id: 66, language_id: 2 , title: 'Australischer Tölpel', description: ''},
    {id: 133, photo_id: 67, language_id: 1 , title: 'Rangitoto', description: ''},
    {id: 134, photo_id: 67, language_id: 2 , title: 'Rangitoto', description: ''},
    {id: 135, photo_id: 68, language_id: 1 , title: 'Neuendorf Monastery', description: ''},
    {id: 136, photo_id: 68, language_id: 2 , title: 'Kloster Neuendorf', description: ''},
    {id: 137, photo_id: 69, language_id: 1 , title: 'Tasman Lake', description: ''},
    {id: 138, photo_id: 69, language_id: 2 , title: 'Tasman-See', description: ''},
    {id: 139, photo_id: 70, language_id: 1 , title: 'Mt Cook', description: ''},
    {id: 140, photo_id: 70, language_id: 2 , title: 'Mount Cook', description: ''},
    {id: 141, photo_id: 71, language_id: 1 , title: 'Vivid Opera House', description: ''},
    {id: 142, photo_id: 71, language_id: 2 , title: 'Vivid Oper', description: ''},
    {id: 143, photo_id: 72, language_id: 1 , title: 'Vivid Sydney', description: ''},
    {id: 144, photo_id: 72, language_id: 2 , title: 'Vivid Sydney', description: ''},
    {id: 145, photo_id: 73, language_id: 1 , title: 'Vivid Sydney', description: ''},
    {id: 146, photo_id: 73, language_id: 2 , title: 'Vivid Sydney', description: ''},
    {id: 147, photo_id: 74, language_id: 1 , title: 'Vivid Opera House', description: ''},
    {id: 148, photo_id: 74, language_id: 2 , title: 'Vivid Oper', description: ''},
    {id: 149, photo_id: 75, language_id: 1 , title: 'Paris Sunset', description: ''},
    {id: 150, photo_id: 75, language_id: 2 , title: 'Sonnenuntergang in Paris', description: ''},
    {id: 151, photo_id: 76, language_id: 1 , title: 'Sunset at the Louvre', description: ''},
    {id: 152, photo_id: 76, language_id: 2 , title: 'Sonnenuntergang am Louvre', description: ''},
    {id: 153, photo_id: 77, language_id: 1 , title: 'Eiffel Tower', description: ''},
    {id: 154, photo_id: 77, language_id: 2 , title: 'Eiffelturm', description: ''},
    {id: 155, photo_id: 78, language_id: 1 , title: 'Paris', description: ''},
    {id: 156, photo_id: 78, language_id: 2 , title: 'Paris', description: ''},
    {id: 157, photo_id: 79, language_id: 1 , title: 'Windmill in Tornau', description: ''},
    {id: 158, photo_id: 79, language_id: 2 , title: 'Tornauer Mühle', description: ''},
    {id: 159, photo_id: 80, language_id: 1 , title: 'Kata Tjuta', description: ''},
    {id: 160, photo_id: 80, language_id: 2 , title: 'Kata Tjuta', description: ''},
    {id: 161, photo_id: 81, language_id: 1 , title: 'Early morning', description: ''},
    {id: 162, photo_id: 81, language_id: 2 , title: 'Morgenlicht', description: ''},
    {id: 163, photo_id: 82, language_id: 1 , title: 'Milkyway Trees', description: ''},
    {id: 164, photo_id: 82, language_id: 2 , title: 'Milchstrasse', description: ''},
    {id: 165, photo_id: 83, language_id: 1 , title: 'Red Soil', description: ''},
    {id: 166, photo_id: 83, language_id: 2 , title: 'Rote Erde', description: ''},
    {id: 167, photo_id: 84, language_id: 1 , title: 'Uluru', description: ''},
    {id: 168, photo_id: 84, language_id: 2 , title: 'Uluru', description: ''},
    {id: 169, photo_id: 85, language_id: 1 , title: 'Port Stephens', description: ''},
    {id: 170, photo_id: 85, language_id: 2 , title: 'Port Stephens', description: ''},
    {id: 171, photo_id: 86, language_id: 1 , title: 'Ebor Falls', description: ''},
    {id: 172, photo_id: 86, language_id: 2 , title: 'Wasserfall in Ebor', description: ''},
    {id: 173, photo_id: 87, language_id: 1 , title: 'Woolgoolga Sunrise', description: ''},
    {id: 174, photo_id: 87, language_id: 2 , title: 'Sonnenaufgang in Woolgoolga', description: ''},
    {id: 175, photo_id: 88, language_id: 1 , title: 'Canberra', description: ''},
    {id: 176, photo_id: 88, language_id: 2 , title: 'Canberra', description: ''},
    {id: 177, photo_id: 89, language_id: 1 , title: 'Bee', description: ''},
    {id: 178, photo_id: 89, language_id: 2 , title: 'Biene', description: ''},
    {id: 181, photo_id: 91, language_id: 1 , title: 'Leaf Curling Spider', description: ''},
    {id: 182, photo_id: 91, language_id: 2 , title: 'Blätterspinne', description: ''},
    {id: 183, photo_id: 92, language_id: 1 , title: 'Common Garden Skink', description: ''},
    {id: 185, photo_id: 93, language_id: 1 , title: 'Striped Marsh Frogs', description: ''},
    {id: 186, photo_id: 93, language_id: 2 , title: 'Synonyms Cystignathus peronii', description: ''},
    {id: 187, photo_id: 94, language_id: 1 , title: 'Patiti Point Sunrise', description: ''},
    {id: 188, photo_id: 94, language_id: 2 , title: 'Sonnenaufgang am Patiti Point', description: ''},
    {id: 189, photo_id: 95, language_id: 1 , title: 'Patiti Point', description: ''},
    {id: 190, photo_id: 95, language_id: 2 , title: 'Patiti Point', description: ''},
    {id: 191, photo_id: 96, language_id: 1 , title: 'Patiti Point Morning', description: ''},
    {id: 192, photo_id: 96, language_id: 2 , title: 'Morgenlicht am Patiti Point', description: ''},
    {id: 195, photo_id: 98, language_id: 1 , title: 'Eastern Koel', description: ''},
    {id: 196, photo_id: 98, language_id: 2 , title: 'Eudynamis orientalis', description: ''},
    {id: 197, photo_id: 99, language_id: 1 , title: 'Rainbow Lorikeets', description: ''},
    {id: 198, photo_id: 99, language_id: 2 , title: 'Regenbogenpapageien', description: ''},
    {id: 199, photo_id: 100, language_id: 1 , title: 'Pelicans', description: ''},
    {id: 184, photo_id: 100, language_id: 2 , title: 'Pelikane', description: ''},
    {id: 179, photo_id: 101, language_id: 1 , title: 'Newcastle Sunrise', description: ''},
    {id: 180, photo_id: 101, language_id: 2 , title: 'Sonnenaufgang über Newcastle', description: ''},
    {id: 27, photo_id: 102, language_id: 1 , title: 'Nobbys Lighthouse', description: ''},
    {id: 72, photo_id: 102, language_id: 2 , title: 'Nobbys Leuchtturm', description: ''},
    {id: 45, photo_id: 103, language_id: 1 , title: 'Byron Bay Lighthouse', description: ''},
    {id: 90, photo_id: 103, language_id: 2 , title: 'Byron Bay Leuchtturm', description: ''},
    {id: 63, photo_id: 104, language_id: 1 , title: 'Little Bay', description: ''},
    {id: 18, photo_id: 104, language_id: 2 , title: 'Little Bay', description: ''},
    {id: 194, photo_id: 105, language_id: 1 , title: 'Bent', description: ''},
    {id: 193, photo_id: 105, language_id: 2 , title: 'Verbogen', description: ''},
    {id: 84, photo_id: 106, language_id: 1 , title: 'Kings Canyon Tree', description: ''},
    {id: 39, photo_id: 106, language_id: 2 , title: 'Baum im Kings Canyon', description: ''},
    {id: 33, photo_id: 107, language_id: 1 , title: 'Kings Canyon', description: ''},
    {id: 78, photo_id: 107, language_id: 2 , title: 'Kings Canyon', description: ''},
    {id: 55, photo_id: 108, language_id: 1 , title: 'Blue Mountains', description: ''},
    {id: 10, photo_id: 108, language_id: 2 , title: 'Blue Mountains', description: ''}
    ]);
  });
};
