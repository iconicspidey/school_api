const express = require("express");
const createStudent = require("../controllers/createStudent");
const studentInfor = require("../controllers/studentInfor");
const students = require("../controllers/students");
const AdminAuth = require("../middlewares/adminAuth");
const allocatedStudents = require("../controllers/allocatedStudents");
const makeAdmin = require("../controllers/makeAdmin");
const login = require("../controllers/login");
const studentsRoom = require("../controllers/studentsRoom");
const Router = express.Router();
// get routes
Router.get("/students/:id/details", studentInfor);
Router.get("/students", AdminAuth, students);
Router.get("/allocated-students", allocatedStudents);
Router.get("/add-admin", AdminAuth, makeAdmin);
Router.get("/students/:id/room", students);
// post routes
Router.post("/login", login);
Router.post("/create-student", createStudent);
module.exports = Router;
