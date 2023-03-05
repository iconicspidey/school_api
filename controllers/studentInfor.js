const joi = require("joi");
const data = require("../data.json");
const studentInfor = (req, res) => {
  const { id } = req.params;
  const schema = joi.object({
    id: joi.string().required(),
  });
  const { error, value } = schema.validate({ id });
  if (error) {
    res.status(406).json(error.details);
  } else {
    const findStudent = data.find(
      (student) => student.matric == value.id.trim()
    );
    res.status(202).json(findStudent);
  }
};

module.exports = studentInfor;
