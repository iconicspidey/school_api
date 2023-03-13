const pool = require("../database");

const hostels = async (req, res) => {
  try {
    const [rows, details] = await pool.promise().query("select * from hostels");
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
module.exports = hostels;
