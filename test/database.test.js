const databaseModel = require('../server/models/databaseModel.js');

describe('Database Model Tests', () => {
    let originalQuery;

    beforeAll(() => {
        originalQuery = databaseModel.query; // storing original query method
        databaseModel.query = jest.fn();     // replacing the query method with a mock function
    });

    afterAll(() => {
        databaseModel.query = originalQuery; // restoring original query method after all tests are done
    })
})

it()