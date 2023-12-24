const pgp = require('pg-promise')();
const connectionString = 'postgres://jqjdmzsq:5np5FJ6kJ3TSTKppoo5ZDrPSV0ZaGy8q@mahmud.db.elephantsql.com/jqjdmzsq'
const db = pgp(connectionString);

const userController = {};

userController.createUserTable = async (req, res, next) => {
  counter = 0;
    try {
        const createUserTableQuery =  
        `DROP TABLE users CREATE TABLE users ( 
            user_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
            user_fname VARCHAR(50) NOT NULL, 
            user_lname VARCHAR(50) NOT NULL,
            user_phone CHAR(9) NOT NULL,
            user_email VARCHAR(100) NOT NULL
           );`
        await db.none(this.createDogTableQuery);
        console.log('Users Table created successfully');
        counter++;
        next();
    }   
    catch (err) {
      return(next({
        log: `Error happened at middleware create user Table: ${error}`,
        message: { error: 'User Table not created' }}
      ));
}
},


userController.addUser = (req, res, next) => {
    console.log('addUser request body', req.body);
    const { username, password, role } = req.body;
    //check validity
    //db.add(user)
    return next();
}

userController.verifyUser = (req, res, next) => {
    console.log('verifyUser request body', req.body);
    const { username, password, role } = req.body;
    //check validity
    //db.add(user)
    return next();
}

module.exports = userController;