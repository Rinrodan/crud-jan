/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('fractions').del()
  await knex('fractions').insert([
    {id: 1, name: '1/16', decimal: '0.0625'},
    {id: 2, name: '1/8', decimal: '0.125'},
    {id: 3, name: '1/4', decimal: '0.25'},
    {id: 4, name: '1/3', decimal: '0.33'},
    {id: 5, name: '1/2', decimal: '0.5'},
    {id: 6, name: '5/8', decimal: '0.625'},
    {id: 7, name: '3/4', decimal: '0.75'},
    {id: 8, name: '7/8', decimal: '0.875'},
    {id: 9, name: '1', decimal: '1'},
    {id: 10, name: '1 1/16', decimal: '1.0625'},
    {id: 11, name: '1 1/8', decimal: '1.125'},
    {id: 12, name: '1 1/4', decimal: '1.25'},
    {id: 13, name: '1 1/3', decimal: '1.33'},
    {id: 14, name: '1 1/2', decimal: '1.5'},
    {id: 15, name: '1 5/8', decimal: '1.625'},
    {id: 16, name: '1 3/4', decimal: '1.75'},
    {id: 17, name: '1 7/8', decimal: '1.875'},
    {id: 18, name: '2', decimal: '1'},
    {id: 19, name: '2 1/16', decimal: '2.0625'},
    {id: 20, name: '2 1/8', decimal: '2.125'},
    {id: 21, name: '2 1/4', decimal: '2.25'},
    {id: 22, name: '2 1/3', decimal: '2.33'},
    {id: 23, name: '2 1/2', decimal: '2.5'},
    {id: 24, name: '2 5/8', decimal: '2.625'},
    {id: 25, name: '2 3/4', decimal: '2.75'},
    {id: 26, name: '2 7/8', decimal: '2.875'},
    {id: 27, name: '3', decimal: '3'},
    {id: 28, name: '3 1/16', decimal: '3.0625'},
    {id: 29, name: '3 1/8', decimal: '3.125'},
    {id: 30, name: '3 1/4', decimal: '3.25'},
    {id: 31, name: '3 1/3', decimal: '3.33'},
    {id: 32, name: '3 1/2', decimal: '3.5'},
    {id: 33, name: '3 5/8', decimal: '3.625'},
    {id: 34, name: '3 3/4', decimal: '3.75'},
    {id: 35, name: '3 7/8', decimal: '3.875'},
    {id: 36, name: '4', decimal: '4'},
    {id: 37, name: '4 1/2', decimal: '4.5'},
    {id: 38, name: '5', decimal: '5'},
    {id: 39, name: '5 1/2', decimal: '5.5'},
    {id: 40, name: '6', decimal: '6'},
    {id: 41, name: '6 1/2', decimal: '6.5'},
    {id: 42, name: '7', decimal: '7'},
    {id: 43, name: '7 1/2', decimal: '7.5'},
    {id: 44, name: '8', decimal: '8'},
    {id: 45, name: '8 1/2', decimal: '8.5'},
    {id: 46, name: '9', decimal: '9'}
  ]);
};
