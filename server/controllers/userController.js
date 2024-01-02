
const pgp = require('pg-promise')();
const connectionString = 'postgres://jqjdmzsq:5np5FJ6kJ3TSTKppoo5ZDrPSV0ZaGy8q@mahmud.db.elephantsql.com/jqjdmzsq'
const db = pgp(connectionString);

const userController = {};

// userController.createUserTable = async (req, res, next) => {
//   counter = 0;
//     try {
//         const createUserTableQuery =  
//         `DROP TABLE users CREATE TABLE users ( 
//             user_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
//             user_fname VARCHAR(50) NOT NULL, 
//             user_lname VARCHAR(50) NOT NULL,
//             user_phone CHAR(9) NOT NULL,
//             user_email VARCHAR(100) NOT NULL
//            );`
//         await db.none(this.createDogTableQuery);
//         console.log('Users Table created successfully');
//         counter++;
//         next();
//     }   
//     catch (err) {
//       return(next({
//         log: `Error happened at middleware create user Table: ${err}`,
//         message: { error: 'User Table not created' }}
//       ));
// }
// },


// INSERT INTO users (google_id, email, first_name, last_name, phone_number, is_owner)

userController.addUser = async (req, res, next) => {
    console.log('addUser request body', req.body);
    const { firstname, lastname, username, password, phoneNumber, googleId, email, watcher } = req.body;
    try {
        const result = await pool.query(
          'INSERT INTO users (google_id, email, first_name, last_name, phone_number, is_owner) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
          [googleId, email, firstname, lastname, phoneNumber, watcher]
        );
        console.log("result at userController.addUsers: ", result.rows[0])
        // Send the inserted dog data back to the client if needed
        res.locals.currentUsers = result.rows[0];
        next();
      } catch (error) {
          return next({
            log: `Error happened at middleware userController.addUsers ${error}`,
            message: { error: 'User database profile creation error' }}
          );
      }
    return next();
}

// userController.verifyUser = (req, res, next) => {
//     console.log('verifyUser request body', req.body);
//     const { username, password, role } = req.body;
//     //check validity
//     //db.add(user)
//     return next();
// }

userController.verifyUser = async (req, res, next) => {
    console.log(req.params)
    const { googleId } = req.params; 
    console.log('Received Google ID:', googleId);
    try {
        // find the user based on the Google ID
        const user = await db.findOne('SELECT * FROM users WHERE google_id = $1', [googleId]);

        if (user) {
            req.locals.user = user; 
            next();
        } else {
            // User not found, send an error response
            res.status(401).json({ error: 'User not authorized' });
        }
    } catch (error) {
        console.error('Error verifying user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = userController;

