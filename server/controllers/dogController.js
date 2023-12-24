// const pgp = require('pg-promise')();
// const connectionString = 'postgres://jqjdmzsq:5np5FJ6kJ3TSTKppoo5ZDrPSV0ZaGy8q@mahmud.db.elephantsql.com/jqjdmzsq'
// const db = pgp(connectionString);

const dogController = {};

//function to initialize the SQL dog table
// dogController.createDogTable = async (req, res, next) => {
//     counter = 0;
//     try {
//       if(counter=0) {
//         const createDogTableQuery =
//         ` DROP TABLE dogs CREATE TABLE dogs (
//             dog_id INT PRIMARY KEY AUTO_INCREMENT
//             dog_name VARCHAR(255) NOT NULL,
//             dog_schedule VARCHAR(255) NOT NULL,
//             dog_diet VARCHAR(255),
//             dog_info VARCHAR(255),
//             owner_id VARCHAR(255) FOREIGN KEY REFERENCES users(user_id)
//            );`
//         await db.none(this.createDogTableQuery);
//         console.log('Dogs Table created successfully');
//         counter++;
//         next();
//         }
//     } catch (err) {
//         return(next({
//             log: `Error happened at middleware create Dog Table: ${error}`,
//             message: { error: 'Table not created' }}
//           ));
//     }

// }

dogController.fetchDogs = async (req, res, next) => {
  console.log('fetchDogs request body', req.body);
  const userId = req.body.ssid;
  const role = req.body.role;
  const dogs = [];
  //query text
  if (role === 'owner') {
    //query for owner's dogs
    //Dogs.find()
    console.log('returning dogs to owner');
  } else {
    //query for sitter's dogs
    console.log('fetching dogs for sitter');
  }
  if (dogs.length === 0) {
    //error handling
    return next();
  } else {
    res.locals.dogs = dogs;
    return next();
  }
};

dogController.addDog = async (req, res, next) => {
  console.log('adding dog middleware');
  return next();
};

module.exports = dogController;
