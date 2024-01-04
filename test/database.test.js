const databaseModel = require('../server/models/databaseModel.js');

describe('Database Model Tests', () => {
    let originalQuery;

    beforeAll(() => {
        originalQuery = databaseModel.query; // storing original query method
        databaseModel.query = jest.fn();     // replacing the query method with a mock function
    });

    afterAll(() => {
        databaseModel.query = originalQuery; // restoring original query method after all tests are done
    });

    it('should retrieve a user by user_id from the database', async () => {
        const userId = 1;
        const mockUser = { 
            user_id: userId, 
            user_name: 'claire0',
            password: '123400',
            google_id: null,
            email: null,
            first_name: 'Claire',
            last_name: 'Huang',
            phone_number: '(314)-703-6995',
            is_owner: true 
        };
    
        databaseModel.query.mockResolvedValueOnce({ rows: [mockUser] });
    
        const result = await databaseModel.query('SELECT * FROM users WHERE user_id = $1', [userId]);
    
        expect(databaseModel.query).toHaveBeenCalledWith('SELECT * FROM users WHERE user_id = $1', [userId]);
        expect(result.rows).toEqual([mockUser]);
      });

});