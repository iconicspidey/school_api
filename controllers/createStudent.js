const Joi = require("joi");
const pool = require("../database");
const createStudent = async (req, res) => {
  const body = req.body;
  const { role } = req.user;
  if (role != "moderator" || role !== "admin") {
    return res.status(401).send("Unauthorized");
  }
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
  const [checkingStudent, __] = await pool
    .promise()
    .query("select matric_no from students");
  const checkMatric = checkingStudent.find(
    (student) => student.matric_no == value.matric_no
  );
  if (checkMatric) {
    return res.json("student with this matric already exist");
  }
  if (error) {
    error.details.forEach((element) => {
      delete element.context;
      delete element.type;
    });
  }
  const {
    first_name,
    last_name,
    other_name,
    matric_no,
    student_department,
    student_level,
    gender,
  } = value;

  if (!error) {
    try {
      await pool
        .promise()
        .query(
          "INSERT INTO `students`(first_name,last_name,other_name,matric_no,student_level,gender,student_department)   VALUES(?,?,?,?,?,?,?)",
          [
            first_name,
            last_name,
            other_name,
            matric_no,
            student_level,
            gender,
            student_department,
          ]
        );
      return res.status(201).send("student has been added successfuly");
    } catch (error) {
      if (error) {
        return res.satus(200).send(error.message);
      }
    }
  } else {
    if (error.details) {
      return res.status(200).json(error.details);
    }
  }
};
module.exports = createStudent;
