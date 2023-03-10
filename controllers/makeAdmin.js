const pool = require("../database");
const makeAdmin = async (req, res) => {
  const { id } = req.params;
  const { role } = req.user;
  if (role !== "admin") {
    return res.status(401).send("unauthorized user");
  }

  try {
    await pool
      .promise()
      .query(
        "UPDATE `students` SET `role` = 'moderator' WHERE `matric_no` = ?",
        [id]
      );
    res.status(200).send("admin successfully been added");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = makeAdmin;
