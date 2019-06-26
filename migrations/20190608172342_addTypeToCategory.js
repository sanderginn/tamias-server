
exports.up = async function (knex, Promise) {
  await knex.schema.table('categories', table => {
    table.enu('type', ['INCOME', 'SAVINGS', 'USER_DEFINED'], {useNative: true, enumName: 'categoryType'}).defaultTo('USER_DEFINED');
  });
};

exports.down = async function (knex, Promise) {
  await knex.schema.table('categories', table => {
    table.dropColumn('type');
  })
};
