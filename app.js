const express = require("express");
const cors = require("cors");
const Router = require("./routes/routes");
const dotenv = require("dotenv");
const app = express();
app.use(express.urlencoded({ extended: true }));

// configs
app.use(cors());
app.use(express.json());
dotenv.config();
// routes
app.use("/api", Router);
app.use("/", (req, res) => {
  res
    .status(404)
    .json({ message: "the route you are looking for does not exist" });
});
// close connection
app.listen(3000);
