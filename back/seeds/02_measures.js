/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('measures').del()
  await knex('measures').insert([
    {id: 1, name: 'Teaspoon', liquid: 1, image: 'https://cdnimg.webstaurantstore.com/images/products/large/504108/1894296.jpg'},
    {id: 2, name: 'Tablespoon', liquid: 1, image: 'https://cdnimg.webstaurantstore.com/images/products/large/504108/1894296.jpg'},
    {id: 3, name: 'Cup', liquid: 1, image: 'https://cdnimg.webstaurantstore.com/images/products/large/34846/1937891.jpg'},
    {id: 4, name: 'Fluid Ounce', liquid: 0, image: 'https://www.mathsisfun.com/measure/images/fluid-ounce.jpg'},
    {id: 5, name: 'Ounce', liquid: 0, image: 'https://www.svgrepo.com/show/10055/scale.svg'},
    {id: 6, name: 'Quart', liquid: 1, image: 'https://cdnimg.webstaurantstore.com/images/products/large/22917/1937936.jpg'},
    {id: 7, name: 'Pint', liquid: 1, image: 'https://banner2.cleanpng.com/20171216/6d8/beer-png-image-5a34af38b5a3f3.459863271513402168744.jpg'},
    {id: 8, name: 'Milliter', liquid: 0, image: 'https://cdnimg.webstaurantstore.com/images/products/large/22917/1937937.jpg'},
    {id: 9, name: 'Each'}  
  ]);
};
