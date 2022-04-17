const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";
  switch (currentDay) {
    case 1:
      day = "Lunes";
      break;
    case 2:
      day = "Martes";
      break;
    case 3:
      day = "Miercoles";
      break;
    case 4:
      day = "Jueves";
      break;
    case 5:
      day = "Viernes";
      break;
    case 6:
      day = "Sabado";
      break;
    case 0:
      day = "Domingo";
      break;

  }


  res.render("list", {
    kindOfDay: day
  });
});


app.listen(3000, function() {
  console.log("Server is on port 3000")

});
