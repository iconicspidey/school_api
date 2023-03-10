const pool = require("../database");

const studentReciept = async (req, res) => {
  const { id } = req.params;
  try {
    const sql =
      "SELECT * FROM students JOIN hostels ON `students`.`student_id` = `hostels`.`student_hostel_id`  JOIN payment ON `students`.`student_id` = `payment`.`student_payment_id` WHERE `students`.`student_id` = ?";
    const [student, result] = await pool.promise().query(sql, [id]);
    if (student.length > 0) {
      delete student[0].student_password;
      res.status(200).json(student[0]);
    } else {
      res.status(200).json({
        message:
          "you have not yet been allocated because you've not paid your fee",
      });
    }
  } catch (error) {
    res.status(500);
  }
};
module.exports = studentReciept;
