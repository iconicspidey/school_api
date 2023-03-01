const jwt = require("jsonwebtoken");
const adminLogin = (req, res) => {
  const body = req.body;
  if (body) {
    res.status(200).json(jwt.sign(body, process.env.TOKEN_SECRET));
  } else {
    res.status(404).send("bad request");
  }
};

module.exports = adminLogin;
