const pool = require("../database");

const allocateHostel = async (req, res) => {
  const { matric, hostelId } = req.params;
  try {
    const [verifyStudent] = await pool
      .promise()
      .query("select * from students  where matric_no = ?", [matric]);
    if (verifyStudent.length > 0) {
      const sql =
        "update hostels set  `student_hostel_id` = ? where `hostel_id` = ?";
      await pool.promise().query(sql, [studentId, hostelId]);
      res.status(200).send({ message: "student have been allocated a space" });
    } else {
      res
        .status(200)
        .json({ message: "student is does not exist in the database" });
    }
  } catch (error) {
    res.status(500).json({ messsage: error.message });
  }
};
module.exports = allocateHostel;
