const {Pool} = require('pg')

const pool = new Pool({
  user: 'postgres',
  password: 'faztpassword',
  host: 'localhost',
  port: '5433',
  database: 'dbtask',
});

module.exports = pool;