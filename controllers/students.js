const data = require("../data.json");
const jwt = require("jsonwebtoken");
const students = async (req, res) => {
  const decode = jwt.decode(req.decode);
  res.status(200).json(data);
};
module.exports = students;
