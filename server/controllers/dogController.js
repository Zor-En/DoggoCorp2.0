const pool = require('../models/databaseModel');
const fs = require('fs');
const path = require('path');

const dogController = {};

dogController.addDog = (req, res, next) => {
  const {
    name,
    age,
    weight,
    breed,
    meals,
    medication,
    groomer,
    birthday,
    miscellaneous,
    owner_id,
    photo,
  } = req.body;
  res.locals.imageUrl = photo;
  // console.log('there was an attempt to create a dog')
  pool
    .query(
      'INSERT INTO dogs (dog_name, age, weight, breed, meals, medication, groomer, miscellaneous, owner_id, birthdate) ' +
        'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) ' +
        'RETURNING *',
      [
        name,
        age,
        weight,
        breed,
        meals,
        medication,
        groomer,
        miscellaneous,
        owner_id,
        birthday,
      ]
    )
    .then((data) => (res.locals.currentDog = data.rows[0]))
    .then(() => next())
    .catch((error) =>
      next({
        log: `Error happened at middleware dogController.addDog ${error}`,
        message: { error: 'Dog database profile creation error' },
      })
    );
};

dogController.saveDogPhoto = (req, res, next) => {
  try {
    const imageUrl = res.locals.imageUrl;
    if (!imageUrl) {
      return next();
    }
    const base64Data = imageUrl.split(',')[1];
    imageBuffer = Buffer.from(base64Data, 'base64');
    const targetDirectory = path.join(__dirname, '../downloadedImages');
    const imageName = `${res.locals.currentDog.dog_id}${Date.now()}.png`;
    const imagePath = path.join(targetDirectory, imageName);
    fs.writeFileSync(imagePath, imageBuffer);
    console.log(`Image saved to ${imagePath}`);
    res.locals.localImageUrl = `/downloadedImages/${imageName}`;
    return next();
  } catch (error) {
    return next({
      log: `Error happened at middleware dogController.saveDogPhoto ${error}`,
      message: { error: 'Dog database profile creation error' },
    });
  }
};

dogController.updateDogPhoto = (req, res, next) => {
  const localImageUrl = res.locals.localImageUrl;
  if (!localImageUrl) {
    return next()
  }
  pool
    .query('UPDATE dogs SET photo = $1 WHERE dog_id =$2 RETURNING *', [
      localImageUrl,
      res.locals.currentDog.dog_id,
    ])
    .then((data) => (res.locals.currentDog = data.rows[0]))
    .then(() => next())
    .catch((error) =>
      next({
        log: `Error happened at middleware dogController.updateDogPhoto ${error}`,
        message: { error: 'Dog database profile creation error' },
      })
    );
};

dogController.deleteDog = (req, res, next) => {
  const dogId = req.params.dogId;
  return pool
    .query('DELETE FROM dogs WHERE dog_id = $1 RETURNING *;', [dogId])
    .then((data) => (res.locals.deletedDog = data.rows[0]))
    .then(() => next())
    .catch((error) =>
      next({
        log: `Error happened at middleware dogController.deleteDog  ${error}`,
        message: { error: 'error deleting dog' + error },
      })
    );
};


dogController.fetchDogs = async (req, res, next) => {
  console.log('fetchDogs started');
  // const userId = req.body.ssid;
  // const role = req.body.role;
  // const dogs = [];
  //query text
  const user_id = req.params.userId;
  try {
    // if (role === 'owner') {

    // const user = await pool.query('SELECT * FROM users WHERE google_id = $1', [googleId]);
    //jarod's info hardcoded for presentation
    const response = await pool.query(
      'SELECT * FROM dogs WHERE owner_id = $1;',
      [user_id]
    );
    res.locals.dogs = response.rows;
    // console.log(res.locals.dogs);
    return next();
  } catch (error) {
    console.error('Error fetching dogs:', error);
  }
};

module.exports = dogController;
