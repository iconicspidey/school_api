const pool = require("../database");
const bookHostel = require("../utils/bookHostel");

const payment = async (req, res) => {
  const { student_id } = req.params;
  const { payment_ref, student_level, gender } = req.body;

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

  if (gender === "male") {
    switch (Number(student_level)) {
      case 600:
        const hostelOneGroundFloor = hostelOne.filter(
          ({ hostel_floor }) => hostel_floor == "ground floor"
        );
        const hostelOnefirstFloor = hostelOne.filter(
          ({ hostel_floor }) => hostel_floor == "first floor"
        );
        if (hostelOneGroundFloor.length > 0) {
          const { hostel_id } = hostelOneGroundFloor[0];
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        } else if (hostelOnefirstFloor.length > 0) {
          const { hostel_id } = hostelOnefirstFloor[0];
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        } else {
          const [row] = [...hostelOne, ...maleHostel];
          const { hostel_id } = row;
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        }
        break;
      case 500:
        const seriesFiveFirst = hostelOne.filter(
          ({ hostel_floor }) => hostel_floor == "first floor"
        );
        const seriesFiveSecond = hostelOne.filter(
          ({ hostel_floor }) => hostel_floor == "second floor"
        );
        if (seriesFiveFirst.length > 0) {
          const { hostel_id } = seriesFiveFirst[0];
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        } else if (seriesFiveSecond.length > 0) {
          const { hostel_id } = seriesFiveSecond[0];
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        } else {
          const [row] = [...hostelOne, ...maleHostel];
          const { hostel_id } = row;
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        }
        break;
      case 400:
        const seriesFourFirst = hostelOne.filter(
          ({ hostel_floor }) => hostel_floor == "second floor"
        );
        const seriesFourSecond = hostelOne.filter(
          ({ hostel_floor }) => hostel_floor == "third floor"
        );
        if (seriesFourFirst.length > 0) {
          const { hostel_id } = seriesFourFirst[0];
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        } else if (seriesFourSecond.length > 0) {
          const { hostel_id } = seriesFiveSecond[0];
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        } else {
          const [row] = [...hostelOne, ...maleHostel];
          const { hostel_id } = row;
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        }
        break;
      case 300:
        const seriesThreeFirst = hostelOne.filter(
          ({ hostel_floor }) => hostel_floor == "third floor"
        );
        const seriesThreeSecond = maleHostel.filter(
          ({ hostel_floor }) => hostel_floor == "ground floor"
        );
        if (seriesThreeFirst.length > 0) {
          const { hostel_id } = seriesThreeFirst[0];
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        } else if (seriesThreeSecond.length > 0) {
          const { hostel_id } = seriesThreeSecond[0];
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        } else {
          const [row] = [...hostelOne, ...maleHostel];
          const { hostel_id } = row;
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        }
        break;
      case 200:
        const seriesTwoFirst = maleHostel.filter(
          ({ hostel_floor }) => hostel_floor == "first floor"
        );
        const seriesTwoSecond = maleHostel.filter(
          ({ hostel_floor }) => hostel_floor == "second floor"
        );
        if (seriesTwoFirst.length > 0) {
          const { hostel_id } = seriesTwoFirst[0];
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        } else if (seriesTwoSecond.length > 0) {
          const { hostel_id } = seriesTwoSecond[0];
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        } else {
          const [row] = [...hostelOne, ...maleHostel];
          const { hostel_id } = row;
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        }
        break;
    }
  }
  if (gender === "female") {
    switch (Number(student_level)) {
      case 600:
        const hostelOneGroundFloor = hostelthree.filter(
          ({ hostel_floor }) => hostel_floor == "ground floor"
        );
        const hostelOnefirstFloor = hostelthree.filter(
          ({ hostel_floor }) => hostel_floor == "first floor"
        );
        if (hostelOneGroundFloor.length > 0) {
          const { hostel_id } = hostelOneGroundFloor[0];
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        } else if (hostelOnefirstFloor.length > 0) {
          const { hostel_id } = hostelOnefirstFloor[0];
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        } else {
          const [row] = [...hostelthree, ...femaleHostel];
          const { hostel_id } = row;
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        }
        break;
      case 500:
        const seriesFiveFirst = hostelthree.filter(
          ({ hostel_floor }) => hostel_floor == "first floor"
        );
        const seriesFiveSecond = hostelthree.filter(
          ({ hostel_floor }) => hostel_floor == "second floor"
        );
        if (seriesFiveFirst.length > 0) {
          const { hostel_id } = seriesFiveFirst[0];
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        } else if (seriesFiveSecond.length > 0) {
          const { hostel_id } = seriesFiveSecond[0];
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        } else {
          const [row] = [...hostelthree, ...femaleHostel];
          const { hostel_id } = row;
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        }
        break;
      case 400:
        const seriesFourFirst = hostelthree.filter(
          ({ hostel_floor }) => hostel_floor == "second floor"
        );
        const seriesFourSecond = hostelthree.filter(
          ({ hostel_floor }) => hostel_floor == "third floor"
        );
        if (seriesFourFirst.length > 0) {
          const { hostel_id } = seriesFourFirst[0];
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        } else if (seriesFourSecond.length > 0) {
          const { hostel_id } = seriesFiveSecond[0];
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        } else {
          const [row] = [...hostelthree, ...femaleHostel];
          const { hostel_id } = row;
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        }
        break;
      case 300:
        const seriesThreeFirst = hostelthree.filter(
          ({ hostel_floor }) => hostel_floor == "third floor"
        );
        const seriesThreeSecond = hostelthree.filter(
          ({ hostel_floor }) => hostel_floor == "ground floor"
        );
        if (seriesThreeFirst.length > 0) {
          const { hostel_id } = seriesThreeFirst[0];
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        } else if (seriesThreeSecond.length > 0) {
          const { hostel_id } = seriesThreeSecond[0];
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        } else {
          const [row] = [...hostelthree, ...femaleHostel];
          const { hostel_id } = row;
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        }
        break;
      case 200:
        const seriesTwoFirst = femaleHostel.filter(
          ({ hostel_floor }) => hostel_floor == "first floor"
        );
        const seriesTwoSecond = femaleHostel.filter(
          ({ hostel_floor }) => hostel_floor == "second floor"
        );
        if (seriesTwoFirst.length > 0) {
          const { hostel_id } = seriesTwoFirst[0];
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        } else if (seriesTwoSecond.length > 0) {
          const { hostel_id } = seriesTwoSecond[0];
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        } else {
          const [row] = [...femaleHostel, ...hostelthree];
          const { hostel_id } = row;
          res
            .status(201)
            .json(bookHostel(hostel_id, student_id, amount, payment_ref));
        }
        break;
    }
  }
};
module.exports = payment;
