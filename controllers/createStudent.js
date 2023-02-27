const Joi = require("joi");

const createStudent = (req, res) => {
  const body = req.body;
  const schema = Joi.object({
    first_name: Joi.string().required().min(2),
    last_name: Joi.string().required().min(2),
    other_name: Joi.string(),
    matric_no: Joi.string().required().min(4),
    department: Joi.string().required(),
    level: Joi.number().min(3).required(),
    gender: Joi.string().required().equal("female", "male"),
  });
  const { error, value } = schema.validate(body, { abortEarly: false });
  if (!error) {
    res.status(201).json(value);
  } else {
    res.status(406).json(error.details);
  }
};
module.exports = createStudent;
