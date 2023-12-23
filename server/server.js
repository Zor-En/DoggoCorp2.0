const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');
const cookieParser = require("cookie-parser");
const cookieController = require("./controllers/cookieController");

const PORT = process.env.PORT || 3000;


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


  //routers
  app.post(
    "/signup",
    cookieController.setSSIDCookie,
    (req, res) => {
      if (res.locals.session) {
        console.log("Signed up successfully!");
        return res.redirect("/secret");
      }
    }
  );



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
