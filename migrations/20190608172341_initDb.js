
exports.up = async function(knex, Promise) {
  await knex.schema.createTable('users', table => {
    table.increments();
    table.string('email').notNullable();
    table.timestamps();
  });  

  await knex.schema.createTable('accounts', table => {
    table.increments();
    table.integer('userId').unsigned().notNullable();
    table.foreign('userId').references('id').inTable('users');
  });

  await knex.schema.createTable('categories', table => {
    table.increments();
    table.string('name').notNullable();
    table.integer('userId').unsigned().notNullable();
    table.foreign('userId').references('id').inTable('users');
  });

  await knex.schema.createTable('budgets', table => {
    table.increments();
    table.date('startDate').notNullable();
    table.date('endDate').notNullable();
    table.integer('userId').unsigned().notNullable();
    table.foreign('userId').references('id').inTable('users');
  });

  await knex.schema.createTable('categorybudgetamounts', table => {
    table.decimal('budgetedAmount', 12, 2).notNullable();
    table.integer('budgetId').unsigned().notNullable();
    table.foreign('budgetId').references('id').inTable('budgets');
    table.integer('categoryId').unsigned().notNullable();
    table.foreign('categoryId').references('id').inTable('categories');
  });

  await knex.schema.createTable('transactions', table => {
    table.increments();
    table.date('date').notNullable();
    table.decimal('amount', 12, 2).notNullable();
    table.string('comment');
    table.integer('categoryId').unsigned().notNullable();
    table.foreign('categoryId').references('id').inTable('categories');
    table.integer('accountId').unsigned().notNullable();
    table.foreign('accountId').references('id').inTable('accounts');
  });
};

exports.down = async function(knex, Promise) {
  await knex.schema.table('accounts', t => {
    t.dropForeign('userId');
  });

  await knex.schema.table('categories', t => {
    t.dropForeign('userId');
  });

  await knex.schema.table('budgets', t => {
    t.dropForeign('userId');
  });

  await knex.schema.table('categorybudgetamounts', t => {
    t.dropForeign('budgetId');
    t.dropForeign('categoryId');
  });

  await knex.schema.table('transactions', t => {
    t.dropForeign('categoryId');
    t.dropForeign('accountId');
  });

  await knex.schema.dropTable('users');
  await knex.schema.dropTable('accounts');
  await knex.schema.dropTable('categories');
  await knex.schema.dropTable('budgets');
  await knex.schema.dropTable('categorybudgetamounts');
  await knex.schema.dropTable('transactions');
};
