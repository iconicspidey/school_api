const express = require("express");
const cors = require("cors");
const person = require("random-person");
const Router = require("./routes/routes");
const app = express();
app.use(express.urlencoded({ extended: true }));

// configs
app.use(cors());
app.use(express.json());

// routes
app.use("/api", Router);
// close connection
app.listen(80);
