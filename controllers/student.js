// const person = require("random-person");
const student = async (req, res) => {
  // const array = [];
  // for (let i = 0; i < 100; i++) {
  //   const random = person.person();
  //   array.push(random);
  // }
  try {
    const user = await fetch("https://random-data-api.com/api/v2/users");
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};
module.exports = student;
