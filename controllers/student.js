const person = require("random-person");
const student = (req, res) => {
  const array = [];
  for (let i = 0; i < 100; i++) {
    const random = person.person();
    array.push(random);
  }
  res.status(200).json(array);
};
module.exports = student;
