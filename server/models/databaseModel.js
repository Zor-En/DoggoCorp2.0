const { Pool } = require('pg');

const pgp = require('pg-promise')();
const connectionString = 'postgres://jqjdmzsq:5np5FJ6kJ3TSTKppoo5ZDrPSV0ZaGy8q@mahmud.db.elephantsql.com/jqjdmzsq'
const db = pgp(connectionString);


const pool = new Pool({
//   user: 'jqjdmzsq',
//   host: 'mahmud.db.elephantsql.com',
//   database: 'jqjdmzsq',
//   password: '5np5FJ6kJ3TSTKppoo5ZDrPSV0ZaGy8q',
//   port: 5432,
    connectionString: 'postgres://jqjdmzsq:5np5FJ6kJ3TSTKppoo5ZDrPSV0ZaGy8q@mahmud.db.elephantsql.com/jqjdmzsq'
});

module.exports = {
    query: (text, params) => {
        return pool.query(text, params)
    }
}