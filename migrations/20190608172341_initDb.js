
exports.up = async function(knex, Promise) {
  await knex.schema.createTable('users', table => {
    table.increments();
    table.string('email');
    table.timestamps();
  });  

  await knex.schema.createTable('accounts', table => {
    table.increments();
    table.integer('userId').unsigned().references('users.id');
  })
};

exports.down = async function(knex, Promise) {
  await knex.schema.table('accounts')
    .dropForeign('userId');

  await knex.schema.dropTable('users');
  await knex.schema.dropTable('accounts');
};
