const express = require("express");
const cors = require("cors");
const person = require("random-person");
const Router = require("./routes/routes");
const dotenv = require("dotenv");
const app = express();
app.use(express.urlencoded({ extended: true }));
const crypto = require("crypto").randomBytes(20).toString("hex");
console.log(crypto);
const fs = require("fs");
// const data = require("./data.json");
// const people = [];
// const level = [100, 200, 300, 400, 500];
// for (let i = 0; i < 500; i++) {
//   const matric = Math.floor(
//     Math.random() * (90000000 - 10000000) + 90000000
//   ).toString();
//   const random = person.person();
//   delete random.toString;
//   delete random.full_name;
//   delete random.state;
//   delete random.city;
//   random.level = level[Math.floor(Math.random() * level.length)];
//   random.matric = matric;
//   random.role = "basic";
//   people.push(random);
// }
// fs.writeFile("data.json", JSON.stringify(people), "utf-8", (err, data) => {
//   console.log(data);
// });
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
