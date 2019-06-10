import Knex from 'knex';

var client = new Knex({
  client: 'pg',
  connection: 'postgres://tamias:tamias@localhost/tamias_dev'
});

export default client;