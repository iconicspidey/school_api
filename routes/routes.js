const express = require("express");
const createStudent = require("../controllers/createStudent");
const studentLogin = require("../controllers/login");
const admin = require("../controllers/admin");
const students = require("../controllers/students");
const adminLogin = require("../controllers/adminLogin");
const AdminAuth = require("../middlewares/adminAuth");
const Router = express.Router();

Router.get("/admin/:id", admin);
Router.post("/student/create", createStudent);
Router.get("/students", AdminAuth, students);
Router.post("/admin/login", adminLogin);
Router.post("/student/login", studentLogin);
module.exports = Router;
