const data = require("../data.json");
const allocatedStudents = (req, res) => {
  const student = [];
  for (let i = 0; i < data.length; i++) {
    if (i > 100) break;
    student.push(data[i]);
  }
  res.status(200).json(student);
};

module.exports = allocatedStudents;
