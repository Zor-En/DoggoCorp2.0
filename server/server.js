const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');
const cookieParser = require("cookie-parser");
const cookieController = require("./controllers/cookieController");
const userController = require("./controllers/userController");
const dogController = require("./controllers/dogController")
const sessionController = require("./controllers/sessionController")
const { Pool } = require('pg');

const PORT = process.env.PORT || 3000;

//sean test
const pool = new Pool({
  user: 'jqjdmzsq',
  host: 'mahmud.db.elephantsql.com',
  database: 'jqjdmzsq',
  password: '5np5FJ6kJ3TSTKppoo5ZDrPSV0ZaGy8q',
  port: 5432,
})
app.use(userController.createUserTable, dogController.createDogTable);

app.use(express.json());

    // Enable CORS 
app.use(cors());
app.use(cookieParser());


    //handle static files from our bundler
app.use(express.static(path.resolve(__dirname, 'build')));


    //direct to bundled HTML file on root
app.get('/*', (req, res) => {
    console.log('Received request for:', req.url)
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });



  //logic for adding a new dog **INCOMPLETE**
// app.post('/addDog', dogController.createDogTable, async (req, res) => {
//   res.status(200).send('dog created!')
// })

// catch 404 errors
app.use("*", (req, res) =>
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
