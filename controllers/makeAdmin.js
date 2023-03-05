const data = require("../data.json");
const makeAdmin = (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send("yes u made it");
};

module.exports = makeAdmin;
