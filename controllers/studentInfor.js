const joi = require("joi");
const pool = require("../database");
const studentInfor = async (req, res) => {
  const { id } = req.params;
  try {
    const [student, __] = await pool
      .promise()
      .query("select * from `students` where `student_id` = ?", [id]);
    if (student[0]) {
      delete student[0].student_password;
      res.status(200).json(student[0]);
    } else {
      res.status(200).send("no such student");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = studentInfor;
