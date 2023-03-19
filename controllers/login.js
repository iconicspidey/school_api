const joi = require("joi");
const jwt = require("jsonwebtoken");
const pool = require("../database");
const emailVal = require("../utils/emailVal");

const login = async (req, res) => {
  const secret = process.env.SECRET_KEY;
  const { body } = req;
  const testMail = emailVal(body.user);
  if (testMail) {
    const [admin, __] = await pool
      .promise()
      .query(
        "select * from `admin` where `admin_email` = ? AND `admin_password` = ?",
        [body.user, body.password]
      );
    if (admin.length > 0) {
      delete admin[0].admin_password;
      const token = jwt.sign(admin[0], secret, { expiresIn: "24h" });
      res.status(200).json({ user: admin[0], token });
    } else {
      res.status(200).send("incorrect credentials");
    }
  } else {
    const [student, __] = await pool
      .promise()
      .query(
        "select * from `students` where `matric_no` = ? AND `student_password` = ?",
        [body.user, body.password]
      );
    if (student.length > 0) {
      delete student[0].student_password;
      const token = jwt.sign(student[0], secret, { expiresIn: "24h" });
      res.status(200).json({ user: student[0], token });
    } else {
      res.status(200).send("incorrect credentials");
    }
  }
};
module.exports = login;
