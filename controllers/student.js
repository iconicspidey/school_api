// const person = require("random-person");
const axios = require("axios");
const student = async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response);
    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
  }
};
module.exports = student;
