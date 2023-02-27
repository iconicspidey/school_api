// const person = require("random-person");
const axios = require("axios");
const student = async (req, res) => {
  try {
    const response = await axios.get(
      "https://random-data-api.com/api/v2/users"
    );
    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
  }
};
module.exports = student;
