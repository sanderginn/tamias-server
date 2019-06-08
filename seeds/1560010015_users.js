const faker = require('faker');

function createUser() {
  const date = faker.date.recent();
  return {
    email: faker.internet.email(),
    created_at: date,
    updated_at: date
  }
}

exports.seed = function (knex, Promise) {

  const users = [];
  for (let i = 0; i < 50; i++) {
    users.push(createUser());
  }
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(users);
    });
};
