const pool = require("../database");

const allocatedStudents = async (req, res) => {
  try {
    const [students, __] = await pool
      .promise()
      .query(
        "select * from `hostels` JOIN `students` ON `students`.`student_id` = `hostels`.`student_hostel_id`"
      );
    res.status(200).json(students);
  } catch (error) {
    res.status(500);
  }
};

module.exports = allocatedStudents;
