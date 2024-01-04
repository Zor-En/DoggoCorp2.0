const { Pool } = require('pg');

const pool = new Pool({
  connectionString:
    'postgres://zqoggidn:VeTcCALhagOaX2Rg1mK2kTOuIQE3s6uE@castor.db.elephantsql.com/zqoggidn',
    // 'postgres://vgpmradm:5cqbNFdn_Zaxkkv2fRy-pEivMMPV6fGl@mahmud.db.elephantsql.com/vgpmradm'
});

module.exports = {
  query: (text, params) => {
    return pool.query(text, params);
  },
};
