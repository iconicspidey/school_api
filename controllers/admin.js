const joi = require("joi");
const admin = (req, res) => {
  const { id } = req.params;
  const schema = joi.object({
    id: joi.number().required(),
  });
  const { error, value } = schema.validate({ id });
  if (error) {
    res.status(406).json(error.details);
  } else {
    res.status(202).json({ message: "successfuly made admin" });
  }
};

module.exports = admin;
