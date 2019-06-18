const faker = require('faker');

const groupChoices = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];

function createUser() {
  const date = faker.date.recent(150);
  return {
    email: faker.internet.email(),
    created_at: date,
    updated_at: date
  }
}

function createCategory(id) {
  return {
    userId: id,
    name: faker.commerce.department(),
    group: groupChoices[Math.floor(Math.random() * groupChoices.length)]
  };
}

function createBudget(id) {
  const startDate = faker.date.recent(30);
  const endDate = new Date(startDate.getTime());
  endDate.setMonth(endDate.getMonth() + 1, endDate.getDate() - 1)
  return {
    userId: id,
    startDate: startDate,
    endDate: endDate
  }
}

function createCategoryBudgetAmount(budgetId, categoryId) {
  return {
    budgetId: budgetId,
    categoryId: categoryId,
    budgetedAmount: faker.finance.amount(0, 5000, 2)
  }
}

function createTransaction(categoryId, accountId, startDate, endDate, amount) {
  const transactionAmount = amount / (Math.random() * 15);
  startDateMinus3Months = new Date(startDate.setMonth(startDate.getMonth() - 3));
  return {
    categoryId: categoryId,
    accountId: accountId,
    date: faker.date.between(startDateMinus3Months, endDate),
    amount: transactionAmount,
    comment: faker.lorem.words(4)
  }
}

exports.seed = async function (knex, Promise) {

  // remove old data
  await knex.raw('TRUNCATE TABLE transactions RESTART IDENTITY CASCADE');
  await knex.raw('TRUNCATE TABLE categorybudgetamounts RESTART IDENTITY CASCADE');
  await knex.raw('TRUNCATE TABLE budgets RESTART IDENTITY CASCADE');
  await knex.raw('TRUNCATE TABLE categories RESTART IDENTITY CASCADE');
  await knex.raw('TRUNCATE TABLE accounts RESTART IDENTITY CASCADE');
  await knex.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE');

  const users = [];
  for (let i = 0; i < 50; i++) {
    users.push(createUser());
  }

  const allUsers = await knex('users').insert(users, ['id']);

  const accounts = [];
  for (let i = 0; i < 100; i++) {
    accounts.push({
      userId: allUsers[Math.floor(Math.random() * allUsers.length)]['id']
    });
  }

  const allAccounts = await knex('accounts').insert(accounts, ['id']);

  const categories = []
  for (let i = 0; i < 200; i++) {
    categories.push(createCategory(allUsers[Math.floor(Math.random() * allUsers.length)]['id']));
  }

  const allCategories = await knex('categories').insert(categories, ['id', 'userId']);

  const budgets = []
  for (var index in allUsers) {
    budgets.push(createBudget(allUsers[index]['id']));
  }

  const allBudgets = await knex('budgets').insert(budgets, ['id', 'userId']);

  const amounts = [];
  for (var index in allBudgets) {
    var categoriesForUser = await knex('categories').where('userId', allBudgets[index]['userId']).select('*');
    for (var categoryIndex in categoriesForUser) {
      amounts.push(createCategoryBudgetAmount(
        allBudgets[index]['id'],
        categoriesForUser[categoryIndex]['id']
      ));
    }
  }

  const allCategoryBudgetAmounts = await knex('categorybudgetamounts').insert(amounts, ['budgetId', 'categoryId', 'budgetedAmount']);

  const transactions = [];
  for (var index in allCategories) {
    var budgetIds = await knex('categorybudgetamounts')
      .where('categoryId', allCategories[index]['id'])
      .select('budgetId');
    var budget = budgetIds[Math.floor(Math.random() * budgetIds.length)]

    var accountsForUser = await knex('accounts')
      .where('userId', allCategories[index]['userId'])
      .select('id');
    var account = accountsForUser[Math.floor(Math.random() * accountsForUser.length)];

    if (account == undefined) {
      continue;
    }

    var budgetDates = await knex('budgets')
      .where('id', budget['budgetId'])
      .select('startDate', 'endDate');

    var budgetedAmount = await knex('categorybudgetamounts')
      .where({
        budgetId: budget['budgetId'],
        categoryId: allCategories[index]['id']
      })
      .select('budgetedAmount');

    var numberOfTransactions = Math.floor(Math.random() * 9);
    for (let i = 0; i < numberOfTransactions; i++) {
      transactions.push(createTransaction(
        allCategories[index]['id'],
        account['id'],
        budgetDates[0]['startDate'],
        budgetDates[0]['endDate'],
        budgetedAmount[0]['budgetedAmount']
      ));
    }

  }

  const allTransactions = await knex('transactions').insert(transactions, ['amount']);
};
