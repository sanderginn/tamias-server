import mysql from 'mysql';

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'tamias'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('You are now connected...');
});

export default connection;