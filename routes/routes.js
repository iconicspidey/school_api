const express = require("express");
const createStudent = require("../controllers/createStudent");
const studentInfor = require("../controllers/studentInfor");
const students = require("../controllers/students");
const AdminAuth = require("../middlewares/adminAuth");
const allocatedStudents = require("../controllers/allocatedStudents");
const makeAdmin = require("../controllers/makeAdmin");
const login = require("../controllers/login");
const studentReciept = require("../controllers/studentReciept");
const studentUpdate = require("../controllers/studentUpdate");

const Router = express.Router();
// get routes
Router.get("/students/:id/details", AdminAuth, studentInfor);
Router.get("/students", students);
Router.get("/allocated-students", AdminAuth, allocatedStudents);
Router.get("/add-admin/:id", AdminAuth, makeAdmin);
Router.get("/students/:id/reciept", AdminAuth, studentReciept);
// post routes
Router.post("/add-student", AdminAuth, createStudent);
Router.post("/login", login);
// patch
Router.patch("/update/:id", AdminAuth, studentUpdate);
module.exports = Router;
