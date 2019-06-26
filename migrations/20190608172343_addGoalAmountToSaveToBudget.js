
exports.up = async function (knex, Promise) {
  await knex.schema.table('budgets', table => {
    table.decimal('goalAmountToSave', 12, 2);
  });
};

exports.down = async function (knex, Promise) {
  await knex.schema.table('categories', table => {
    table.dropColumn('goalAmountToSave');
  })
};
