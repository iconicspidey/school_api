const Joi = require("joi");
const pool = require("../database");

const allocateOtherDep = async (req, res) => {
  const { body } = req;
  const { hostelId } = req.params;
  const schema = Joi.object({
    first_name: Joi.string().required().min(2),
    last_name: Joi.string().required().min(2),
    other_name: Joi.string().allow("", null),
    matric_no: Joi.string().required(),
    student_department: Joi.string().required(),
    student_level: Joi.number().required(),
    gender: Joi.string().required().equal("female", "male"),
  });
  const { error, value } = schema.validate(body, { abortEarly: false });
  const {
    first_name,
    last_name,
    other_name,
    matric_no,
    student_department,
    student_level,
    gender,
  } = value;
  const [checkForhostel] = await pool
    .promise()
    .query("select * from `hostels` where `hostel_id` = ?", [hostelId]);
  if (checkForhostel.length < 1 || checkForhostel[0].student_hostel_id != null)
    return res
      .status(200)
      .json({ message: "hostel has been allocated or it does not exist" });

  const studentExist = await pool
    .promise()
    .quer("select * from students where matric_no = ?", [value.matric_no]);
  try {
    if (!error) {
      if (studentExist.length > 0)
        return res
          .status(200)
          .json({ message: "student has already been alocated" });
      const sql =
        "INSERT INTO students(first_name,last_name,other_name,matric_no,student_departmen,student_level,gender)VALUES(?,?,?,?,?,?,?)";
      const [student] = await pool
        .promise()
        .query(sql, [
          first_name,
          last_name,
          other_name,
          matric_no,
          student_department,
          student_level,
          gender,
        ]);

      const insertId = student.insertId;
      await pool
        .promise()
        .query(
          "update hostels set `student_hostel_id` = ? where `hostel_id ` = ?",
          [insertId, hostelId]
        );
      res
        .status(201)
        .json({ message: "student has been allocated successfuly" });
    } else {
      const temp = [];
      error.details.forEach((err) => {
        temp.push({ [err.path]: err.message });
      });
      res.status(400).json(temp);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = allocateOtherDep;
