const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const Item = require("./model/item.model");

const app = express();

/**EJS magic - It's a must */
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/items", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const item = new Item({
  name: "vasile"
});
item.save();

//CORS SCRIPT
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
//////
app.get("/api/home", function(req, res) {
  res.json("/api/home");
});

app.get("/api/test", function(req, res) {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server has started on ${port}`));
