const pool = require("../database");

const students = async (req, res) => {
  try {
    const [students, __] = await pool.promise().query("select * from students");
    students.forEach((student) => {
      delete student.student_password;
    });
    res.status(200).json(students);
  } catch (error) {
    res.status(500);
  }
};
module.exports = students;
