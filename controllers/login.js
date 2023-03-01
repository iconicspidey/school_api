const joi = require("joi");
const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const schema = joi.object({
    matric: joi.string().required(),
    password: joi.string().required(),
  });
  const { error, value } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(401).json(error.details);
  } else {
    const token = jwt.sign({ name: "kelvin" }, process.env.TOKEN_SECRET);
    res.status(200).json({ message: "every where is good", token });
  }
};
module.exports = login;
