const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const coords = {
//   lat: 48.42,
//   lng: -123.36
// }

const coords = [48.4221, -123.3623]

app.get("/api", (req, res) => {
  res.json(coords);
});

app.put("/api", (req, res) => {
  coords[0] = req.body[0];
  coords[1] = req.body[1];
  res.json(coords);
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

//my headset isn't on btw lol