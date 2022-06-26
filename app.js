const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/todolistDB", {
  useNewUrlParser: true,
});

const itemsSchema = {
  name: String,
};

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
  name: "buy sugar",
});
const item2 = new Item({
  name: "buy milk",
});
const item3 = new Item({
  name: "buy oil",
});

const defaultItems = [item1, item2, item3];

Item.insertMany(defaultItems, function (err) {
  if (err) {
    console.log("Is an error found");
  } else {
    console.log("All ok");
  }
});

app.get("/", function (req, res) {
  Item.find({}, function (err, foundItems) {
    res.render("list", {
      listTitle: "Today",
      newListItem: foundItems,
    });
  });
});

app.post("/", function (req, res) {
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server is on port 3000");
});
