import Knex from 'knex';

var client = new Knex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'tamias_dev'
  }
});

export default client;