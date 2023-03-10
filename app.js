const express = require("express");
const cors = require("cors");
const Router = require("./routes/routes");
const dotenv = require("dotenv");
const pool = require("./database");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());
dotenv.config();
pool.query("select from * admin", (err, result) => console.log(err));
// routes
app.use("/api", Router);
app.use("/", (req, res) => {
  res.status(404).json("this route does not exist");
});
// close connection
app.listen(3000);
