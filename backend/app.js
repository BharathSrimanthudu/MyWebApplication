const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");



const app = express();


mongoose
  .connect(
    "mongodb+srv://bharath:xG0HssT6KKQAKXa1@cluster0-pqjdz.mongodb.net/myAppDB?retryWrites=true&w=majority",
    { useNewUrlParser: true,useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });


  app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});


app.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      email: req.body.email,
      password: hash
    });
    user
      .save()
      .then(result => {
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
});
