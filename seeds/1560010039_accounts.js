const faker = require('faker');

exports.seed = async function(knex, Promise) {
  const userIds = await knex('users').select('id');
  const accounts = [];
  for (let i = 0; i < 150; i++) {
    accounts.push({userId: userIds[Math.random() * userIds.length | 0]['id']});
  }
  // Deletes ALL existing entries
  return knex('accounts').del()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert(accounts);
    });
};
