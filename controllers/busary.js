const pool = require("../database");

const busary = async (req, res) => {
  const { id } = req.params;

  try {
    const [student] = pool
      .promise()
      .query("select * from students where `student_id` = ?", [id]);
    if (student.length > 0) {
      const state = !boolean(student[0].active);
      pool.query(
        "update `students` SET `active` = ? WHERE `student_id` = ?",
        [state, id],
        (err, result) => {
          if (!err) {
            res.status(201).json("student has been activated successfuly");
          } else {
            Error("something went wrong");
          }
        }
      );
    } else {
      Error("no such student");
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = busary;
