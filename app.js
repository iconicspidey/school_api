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
// routes
// pool.query(
//   "alter table students add column is_active boolean not null default false",
//   (err, value) => console.log(err, value)
// );

app.use("/api", Router);
app.use("/", (req, res) => {
  res.status(404).json("this route does not exist");
});
// close connection
app.listen(3000);
