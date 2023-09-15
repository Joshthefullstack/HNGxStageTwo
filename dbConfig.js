const { Pool } = require('pg');

const pool = new Pool({
  user: postgres,
  host: localhost,
  database: brms,
  password: ibiam,
  port: 5432,
});

module.exports = pool;