const dogController = {};
//connection to dog database

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
    return next()};
};

dogController.addDog = (req, res, next) => {
  console.log('addDogs request body', req.body);
  const { name, notes } = req.body;
  //create new dog
  //const newDog = db.create call
  //   .catch((err) =>
  //   next({
  //     log: 'Express error handler caught getSpecies middleware error',
  //     message: { err: `${err} Species id not received` },
  //   })
  return next();
};

module.exports = dogController;
