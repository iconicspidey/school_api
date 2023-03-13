const Joi = require("joi");
const pool = require("../database");

const adminUpdateStudent = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    other_name: Joi.string(),
    gender: Joi.string().required().equal("female", "male"),
    student_level: Joi.number().required(),
    student_department: Joi.string().required(),
    matric_no: Joi.string().required(),
  });
  const { error, value } = schema.validate(body, { abortEarly: false });
  const {
    first_name,
    last_name,
    other_name,
    gender,
    student_level,
    student_department,
    matric_no,
  } = value;
  try {
    if (!error) {
      const sql =
        "update students set `first_name` = ?, `last_name` = ?, `other_name` = ? , `gender` = ? , `student_level` = ? , `student_department` = ? , `matric_no` = ? where `student_id` = ?";
      const [row, __] = await pool
        .promise()
        .query(sql, [
          first_name,
          last_name,
          other_name,
          gender,
          student_level,
          student_department,
          matric_no,
          id,
        ]);
      res.status(200).json({ row, error });
    } else {
      error.details.forEach((element) => {
        delete element.context;
        delete element.type;
      });
      res.status(200).json(error.details);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = adminUpdateStudent;
