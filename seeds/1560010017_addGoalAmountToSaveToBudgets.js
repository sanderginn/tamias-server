const faker = require('faker');

exports.seed = async function (knex, Promise) {
  const budgets = await knex('budgets').select('*');

  for (var index in budgets) {
    await knex('budgets')
    .where('id', budgets[index]['id'])
    .update('goalAmountToSave', faker.finance.amount(0, 1000, 2));
  }
};
