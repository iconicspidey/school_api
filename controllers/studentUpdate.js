const pool = require("../database");
const emailVal = require("../utils/emailVal");
const phoneVal = require("../utils/phoneVal");

const studentUpdate = async (req, res) => {
  const { student_email, student_phone } = req.body;
  const { id } = req.params;

  if (!emailVal(student_email)) {
    return res.status(200).send("invalid email address");
  }
  if (!phoneVal(student_phone)) {
    return res.status(200).send("invalid email address");
  }
  if (!phoneVal(student_phone) && emailVal(student_email)) {
    res.status(200).send("invalid credentials");
  }
  const [row, __] = await pool
    .promise()
    .query("select * from students where student_email = ?", [student_email]);
  if (row.length > 0) {
    return res.status(200).send("email already exist");
  }
  if (emailVal(student_email) && phoneVal(student_phone)) {
    const sql =
      "update students set student_email = ? , stuend_phone = ? where student_id = ?";
    try {
      await pool.promise().query(sql, [student_email, student_phone, id]);
      res.status(200).send("updated succefully");
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};
module.exports = studentUpdate;
