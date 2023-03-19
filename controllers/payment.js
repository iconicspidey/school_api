const pool = require("../database");

const payment = async (req, res) => {
  const { id, hostelId, level, gender } = req.params;
  
  const [hostelrows] = await pool
    .promise()
    .query("select * from hostels where student_hostel_id is null");
  const maleHostel = hostelrows.filter(
    (hostel) =>
      hostel.hostel_gender == "male" && hostel.hostel_name == "hosteltwo"
  );
  const femaleHostel = hostelrows.filter(
    (hostel) =>
      hostel.hostel_gender == "female" && hostel.hostel_name == "hosteltwo"
  );
  const hostelOne = hostelrows.filter(
    (hostel) => hostel.hostel_name == "hostelone"
  );
  const hostelthree = hostelrows.filter(
    (hostel) => hostel.hostel_name == "hostelthree"
  );
  if (gender == "male") {
  }
  res.send(hostelOne);
};
module.exports = payment;


