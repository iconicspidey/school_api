const express = require("express");
const cors = require("cors");
// const person = require("random-person");
const Router = require("./routes/routes");
const app = express();
app.use(express.urlencoded({ extended: true }));

// configs
app.use(cors());
app.use(express.json());

// routes
app.use("/api", Router);
app.use("/", (req, res) => {
  res.status(404).send("wrong route");
});
// close connection
app.listen(3000);
