const pool = require("../database");

const vacantHostels = async (req, res) => {
  try {
    const [rows, details] = pool
      .promise()
      .query("select * hostels where `student_hostel_id` is not null");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
module.exports = vacantHostels;
