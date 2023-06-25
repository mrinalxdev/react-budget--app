require("dotenv").config();
const express = require("express");
const router = require('./route')

const app = express();
const PORT = process.env.PORT || 5500;
app.use(express.json)
app.use(router)


app.get("/", (req, res) => {
  res.send("Hello from express Js");
});



app.listen(PORT, () => console.log(`Listening on ${PORT}`));
