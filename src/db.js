const {Pool} = require('pg')

new Pool({
  user: 'postgres',
  password: 'faztpassword',
  host: 'localhost',
  port: '5432',
  database: 'dbtasks',
});

module.explorts = pool;