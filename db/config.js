const pgp = require('pg-promise')();

let db;

if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  db = pgp({
    database: 'hero_table_2',
    port: 5432,
    host: 'localhost',
  });
} else if (process.env.NODE_ENV === 'production') {
  db = pgp({
    database: 'hero_table_2',
    port: 5432,
    host: 'localhost',
  });
}

module.exports = db;