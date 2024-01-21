const bcrypt = require('bcrypt')
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { fname: 'John',
    lname: 'Smith',
    email: 'jsmithy@gmail.com',
    imageurl: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/79/The_Simpsons-Jeff_Albertson.png/220px-The_Simpsons-Jeff_Albertson.png',
    username: 'jsmith',
    password: bcrypt.hashSync('pwd', 10)


    },
    { fname: 'Sally',
    lname: 'Johnson',
    email: 'sayjohn@gmail.com',
    imageurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Woman_in_Eyeglasses_%288%29.jpg/640px-Woman_in_Eyeglasses_%288%29.jpg',
    username: 'sjay',
    password: bcrypt.hashSync('123', 10)

    }
  ]);
};
