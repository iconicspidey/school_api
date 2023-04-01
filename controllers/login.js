const joi = require("joi");
const jwt = require("jsonwebtoken");
const pool = require("../database");
const emailVal = require("../utils/emailVal");

const secret = process.env.SECRET_KEY;
const adminLogin = async (req, res) => {
  const { body } = req;
  const [admin, __] = await pool
    .promise()
    .query(
      "SELECT * FROM `admin` WHERE `admin_email` = ? AND `admin_password` = ?",
      [body.user, body.password]
    );
  if (admin.length > 0) {
    delete admin[0].admin_password;
    const token = jwt.sign(admin[0], secret, { expiresIn: "24h" });
    res.status(200).json({ user: admin[0], token });
  } else {
    res.status(401).json({ message: "incorrect credentials" });
  }
};
const studentLogin = async (req, res) => {
  const { body } = req;
  const [student, __] = await pool
    .promise()
    .query(
      "SELECT * FROM `students` WHERE `matric_no` = ? AND `student_password` = ?",
      [body.user, body.password]
    );

  if (student.length > 0) {
    delete student[0].student_password;
    const token = jwt.sign(student[0], secret, { expiresIn: "24h" });
    res.status(200).json({ user: student[0], token });
  } else {
    res.status(401).json({ message: "incorrect credentials" });
  }
};
module.exports = { adminLogin, studentLogin };
