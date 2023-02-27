const express = require("express");
const createStudent = require("../controllers/createStudent");
const login = require("../controllers/login");
const admin = require("../controllers/admin");
const student = require("../controllers/student");
const Router = express.Router();

Router.get("/admin/:id", admin);
Router.post("/login", login);
Router.post("/create", createStudent);
Router.get("/student", student);
module.exports = Router;
