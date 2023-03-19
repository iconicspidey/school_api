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
const adminUpdateStudent = require("../controllers/adminUpdateStudent");
const hostels = require("../controllers/hostels");
const vacantHostels = require("../controllers/vacantHostels");
const allocateHostel = require("../controllers/allocateHostel");
const changePassword = require("../controllers/changePassword");
const payment = require("../controllers/payment");
const download = require("../controllers/download");
const bulkStudentsReg = require("../controllers/bulkStudentsReg");
const allocateOtherDep = require("../controllers/allocateOtherDep");

const Router = express.Router();
// get routes
Router.get("/students/:id/details", AdminAuth, studentInfor);
Router.get("/students", students);
Router.get("/allocated-students", AdminAuth, allocatedStudents);
Router.get("/add-admin/:id", AdminAuth, makeAdmin);
Router.get("/students/:id/reciept", AdminAuth, studentReciept);
Router.get("/hostels", hostels);
Router.get("/vacant-hostels", vacantHostels);
Router.get("/allocate/:matric/:hostelId", allocateHostel);
Router.get("/download", download);
// test
Router.get("/payment", payment);
// post routes
Router.post("/add-student", AdminAuth, createStudent);
Router.post("/login", login);
Router.post("/bulk-register", bulkStudentsReg);
Router.post("/allocate-other-dept/:hostelId", allocateOtherDep);
// patch
Router.patch("/update/:id", AdminAuth, studentUpdate);
Router.patch("/edit/:id/students", adminUpdateStudent);
Router.patch("/change-password/:id", changePassword);
module.exports = Router;
