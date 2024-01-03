const { Pool } = require('pg');

const pool = new Pool({
  connectionString:
    'postgres://zqoggidn:VeTcCALhagOaX2Rg1mK2kTOuIQE3s6uE@castor.db.elephantsql.com/zqoggidn',
});

module.exports = {
  query: (text, params) => {
    return pool.query(text, params);
  },
};
