const faker = require('faker');

function createTransaction(categoryId, accountId, startDate, endDate, amount) {
  return {
    categoryId: categoryId,
    accountId: accountId,
    date: faker.date.between(startDate, endDate),
    amount: amount,
    comment: faker.lorem.words(4)
  }
}

exports.seed = async function (knex, Promise) {
  const users = await knex('users').select('*');

  for (var index in users) {
    const incomeCategory = await knex('categories').insert({
      userId: users[index]['id'],
      type: 'INCOME',
      name: 'Income'
    }, 'id')

    const savingsCategory = await knex('categories').insert({
      userId: users[index]['id'],
      type: 'SAVINGS',
      name: 'Savings'
    }, 'id');

    var accountsForUser = await knex('accounts')
      .where('userId', users[index]['id'])
      .select('id');
    var account = accountsForUser[Math.floor(Math.random() * accountsForUser.length)];

    if (account == undefined) {
      continue;
    }

    var budget = await knex('budgets')
      .where('userId', users[index]['id'])
      .orderBy('startDate', 'desc')
      .first()
      .then(async function(budget) {
        await knex('transactions').insert(createTransaction(incomeCategory[0], account.id, budget.startDate, budget.endDate, faker.finance.amount(2000, 10000, 2)));
        await knex('transactions').insert(createTransaction(savingsCategory[0], account.id, budget.startDate, budget.endDate, faker.finance.amount(50, 500, 2)));
      });
  }
};
