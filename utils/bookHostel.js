const pool = require("../database");

const bookHostel = (hostel_id, student_id, amount, payment_ref) => {
  pool.query(
    "update `hostels` SET `student_hostel_id` = ?  where `hostel_id` = ?",
    [student_id, hostel_id],
    (err, result) => {
      if (!err) {
        pool.query(
          "insert into payment(student_payment_id,amount,payment_ref)values(?,?,?)",
          [student_id, amount, payment_ref],
          (err, result) => {
            return { message: "hosel has been booked successfully" };
          }
        );
      }
    }
  );
};
module.exports = bookHostel;
