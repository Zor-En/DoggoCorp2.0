const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const { OAuth2Client } = require('google-auth-library');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const cookieController = require('./controllers/cookieController');
const userController = require('./controllers/userController');
const dogController = require('./controllers/dogController');
const sessionController = require('./controllers/sessionController');

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  // Set the Referrer-Policy header to no-referrer-when-downgrade
  res.setHeader('Referrer-Policy', 'no-referrer-when-downgrade');
  next();
});

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Google OAuth
const client = new OAuth2Client(
  '654380610871-b70h1a8224333s0jgls1fvhsrmq3r0p4.apps.googleusercontent.com'
);
app.post('/verify-token', async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res
      .status(400)
      .json({ error: 'Token is missing in the request body' });
  }

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience:
        '654380610871-b70h1a8224333s0jgls1fvhsrmq3r0p4.apps.googleusercontent.com',
    });

    const payload = ticket.getPayload();
    const userid = payload['sub'];
    const userEmail = payload['email'];

    res.status(200).json({ success: true, message: 'Token verified successfully',  email: userEmail, googleUserId: userid});
  } catch (error) {
    console.error('Verification error:', error);
    res.status(401).json({ error: 'Token verification failed' });
  }
});

//sean test
// const pool = new Pool({
//   user: 'jqjdmzsq',
//   host: 'mahmud.db.elephantsql.com',
//   database: 'jqjdmzsq',
//   password: '5np5FJ6kJ3TSTKppoo5ZDrPSV0ZaGy8q',
//   port: 5432,
// })
// app.use(userController.createUserTable, dogController.createDogTable);


//logic for adding a new dog **INCOMPLETE**
// app.post('/addDog', dogController.createDogTable, async (req, res) => {
//   res.status(200).send('dog created!')
// })
//   console.log('Received request for:', req.url);
//   res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
// });

//routers
// app.post(
//   '/signup',
//   userController.addUser,
//   sessionController.startSession,
//   cookieController.setSSIDCookie,
//   (req, res) => {
//     if (res.locals.session) {
//       console.log('Signed up successfully!');
//       return res.redirect('/homepage');
//     }
//   }
// );

// app.use(
//   '/login',
//   userController.verifyUser,
//   sessionController.startSession,
//   cookieController.setSSIDCookie,
//   (req, res) => {
//     if (res.locals.session) {
//       console.log('Logged in successfully!');
//       return res.redirect('/homepage');
//     }
//   }
// );

app.get(
  '/fetchDogs',
  // () => {console.log('starting fetch'), next()},
  dogController.fetchDogs,
  (req, res) => {
    console.log('dogs fetched');
    res.status(200).json(res.locals.dogs);
  }
);

app.get('/signin/:googleId', userController.verifyUser, (req,res) => {
  console.log('User Verified. User Id:', req.locals.user)
  res.status(200).json(res.locals.user)
})

// app.post('/addDog', dogController.addDog, (req, res) => {
//   res.status(200).json(res.locals.newDog);
// });

// app.use('/homepage', sessionController.isLoggedIn, (req, res) => {
//   // if (res.locals.session) {
//   console.log('Going to homepage');
//   return res.redirect('/homepage');
//   // }
// });

//to query dogs
// app.get('/fetchDogs', dogController.fetchDogs, (req, res) => {
//   res.status(200).json(res.locals.dogs);
// });

// //to submit to addDogs
// app.post('/addDog', dogController.createDogTable, (req, res) => {
//   console.log(
//     'finished adding dog, sending res.locals.newDog',
//     res.locals.newDog
//   );
//   res.status(200).json(res.locals.newDog);
// });

//route to add dogs page
// app.get('/addDog', (req, res) => {
//   console.log('going to add dog page');
//   return res.redirect('/homepage');
// });

// app.get((req, res) => {
//   console.log('going to add dog page');
//   return res.redirect('/homepage');
// });

//handle static files from our bundler
app.use(express.static(path.resolve(__dirname, 'build')));

//direct to bundled HTML file
app.get('*', (req, res) => {
  console.log('Received request for:', req.url);
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});


// catch 404 errors
app.use('*', (req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

// catch global errors
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  console.log(errorObj.message);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
