const joi = require("joi");
const login = (req, res) => {
  const schema = joi.object({
    matric: joi.string().required(),
    password: joi.string().required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.status(200).json(error.details);
  } else {
    return res.status(200).json({ message: "every where is good" });
  }
};
module.exports = login;
