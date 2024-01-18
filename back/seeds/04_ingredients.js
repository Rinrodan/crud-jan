/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ingredients').del()
  await knex('ingredients').insert([
    {id: 1, name: 'Salt', measure_id: 1,  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Comparison_of_Table_Salt_with_Kitchen_Salt.png/2560px-Comparison_of_Table_Salt_with_Kitchen_Salt.png'},
    {id: 2, name: 'Flour', measure_id: 3, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/All-Purpose_Flour_%284107895947%29.jpg/2560px-All-Purpose_Flour_%284107895947%29.jpg'},
    {id: 3, name: 'Milk', measure_id: 3, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/1920px-Glass_of_Milk_%2833657535532%29.jpg'},
    {id: 4, name: 'Eggs', measure_id: 9, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Six_eggs_views_from_the_top_on_a_white_background.jpg/2560px-Six_eggs_views_from_the_top_on_a_white_background.jpg'}
  ]);
};
