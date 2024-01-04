const pool = require('../models/databaseModel');
const bcrypt= require("bcryptjs");
const jwt = require("jsonwebtoken");

const userController = {};

// INSERT INTO users (google_id, email, first_name, last_name, phone_number, is_owner)
userController.addUser = async (req, res, next) => {
  console.log('addUser request body', req.body);
  const {
    firstname,
    lastname,
    username,
    password,
    phoneNumber,
    googleId,
    email,
    watcher,
  } = req.body;
  try {
    const passwordHash = await bcrypt.hash(password, 10)
    const result = await pool.query(
      'INSERT INTO users (user_name, password, google_id, email, first_name, last_name, phone_number, is_owner) ' +
        'VALUES ($1, $2, $3, $4, $5, $6, $7, $8) ' +
        'RETURNING *',
      [
        username,
        passwordHash,
        googleId,
        email,
        firstname,
        lastname,
        phoneNumber,
        !watcher,
      ]
    );
    console.log('result at userController.addUsers: ', result.rows[0]);
    // Send the inserted dog data back to the client if needed
    if (result.rows[0].username) {
      res.locals.newUser = result.rows[0];
      return next();
  }
  } catch (error) {
    return next({
      log: `Error happened at middleware userController.addUsers ${error}`,
      message: { error: 'User database profile creation error' },
    });
  }
};

userController.getAllUsers = (req, res, next) => {
  pool
    .query('SELECT * FROM users')
    .then((data) => data.rows)
    .then((data) => (res.locals.allUsers = data))
    .then(() => next())
    .catch((err) => {
      console.log(err);
      next({
        log: 'Caught userController.getAllUsers middleware error: ' + err,
        message: { error: err.toString() },
      });
    });
};

userController.verifyUser = async (req, res, next) => {
  console.log('starting verifyUser');
  console.log(req.params);
  const { googleId } = req.params;
  console.log('Received Google ID:', googleId);
  try {
    // find the user based on the Google ID
    const user = await pool.query('SELECT * FROM users WHERE google_id = $1', [
      googleId,
    ]);
    console.log('Query Result:', user.rows);

    if (user.rows.length > 0) {
      req.locals.user = user.rows[0];
      return next();
    } else {
      // User not found, send an error response
      res.status(401).json({ error: 'User not authorized' });
    }
  } catch (error) {
    console.error('Error verifying user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

userController.noOAuthLogIn = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const existingUser = await pool.query(
      'SELECT * FROM users WHERE user_name = $1;',
      [username]
    );
    if (existingUser.rows.length > 0) {
      let hashedPassword = await bcrypt.compare(password, existingUser.rows[0].password)
      if (hashedPassword) {
        const refreshToken = jwt.sign({username: existingUser.rows[0].user_name},'secret', {expiresIn: "5m"})

        const insertQuery = 'UPDATE users SET refreshtoken = $1 WHERE user_name = $2';
        await pool.query(insertQuery, [refreshToken, username])

        res.cookie('JWT', refreshToken, {httpOnly: true, maxAge: 300000})
      }
      res.locals.user = existingUser
      return next();
    }

  } catch (err) {
    const errMessage = 'Caught userController.noOAuthLogIn error: ' + err;
    console.log(errMessage);
    console.log(err.cause);
    return next({
      log: 'Caught userController.noOAuthLogIn error: ' + err,
      message: { error: err.toString() },
    });
  }
};


userController.verifyRefreshToken = async (req, res, next) => {
  try {
      const cookies = req.cookies;
      if (!cookies?.JWT) {
          return res.status(401).json({ error: 'Unauthorized' });
      }

      console.log('cookies jwt, in sendRefresh token:', cookies.JWT);
      const refreshToken = [cookies.JWT];

      let refreshTokenQuery = 'SELECT * FROM users WHERE refreshtoken = $1';

      let existingRefreshToken = await pool.query(refreshTokenQuery, refreshToken);

      if (!existingRefreshToken.rows[0].refreshtoken) {
          return res.status(403).json({ error: 'Forbidden' });
      }

      const refreshTokenInDB = existingRefreshToken.rows[0].refreshtoken
      console.log('refreshTokenInDB', refreshTokenInDB)
      
      jwt.verify(refreshTokenInDB, 'secret', (err, data) => {
        console.log("refeshdata", data)
          if (err) { return res.sendStatus(403)}
          jwt.sign({"username": data.user_id}, 'secret', {expiresIn: '5m'}) //signs refresh token
          return next()
      });

      } catch (error) {
  }
};

userController.logoutUser = async (req,res,next) => {
  try {
      const cookies = req.cookies;
      if (!cookies?.JWT) {
          return res.status(401).json({ error: 'Unauthorized' });
      }

      console.log('cookies jwt, in sendRefresh token:', cookies.JWT);
      const refreshToken = [cookies.JWT];
  
      //delete refresh tokens
      let deleteTokenQuery = 'UPDATE users SET refreshToken = NULL WHERE refreshToken = $1'
      let deleteRefreshToken = await db.query(deleteTokenQuery, refreshToken)
      if (!deleteRefreshToken.rows[0]) {
          res.clearCookie('JWT', {httpOnly:true, maxAge: 300000}) //same as res.cookie on login
          console.log("deleted cookie")
          res.redirect('/#')
        }
      } catch (error) {
  }
}



module.exports = userController;
