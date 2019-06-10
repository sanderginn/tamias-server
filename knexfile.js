// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://tamias:tamias@localhost/tamias_dev',
    migrations: {
      directory: __dirname + '/migrations'
    },
    seeds: {
      directory: __dirname + '/seeds'
    }
  }

};
