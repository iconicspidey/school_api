const Joi = require("joi");
const pool = require("../database");

const changePassword = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const schema = Joi.object({
    oldPassword: Joi.string().required(),
    newPassword: Joi.string().required().min(6).max(8),
    comfirmPassword: Joi.ref("newPassword"),
  });
  const { error, value } = schema.validate(body, {
    abortEarly: false,
  });

  if (error) {
    const temp = [];
    error.details.forEach((err) => {
      if (err.path == "comfirmPassword") {
        temp.push({
          [err.path]: err.message,
        });
      }
      if (err.path == "newPassword") {
        temp.push({ [err.path]: err.message });
      }
      if (err.path == "oldPassword") {
        temp.push({ [err.path]: err.message });
      }
    });
    res.status(200).json(temp);
  } else {
    const { oldPassword, newPassword } = value;
    try {
      const [verifyPassword, error] = await pool
        .promise()
        .query(
          "select * from students where matric_no = ? and student_password = ? ",
          [id, oldPassword]
        );
      if (verifyPassword.length > 0) {
        console.log(verifyPassword);
        const sql =
          "update students set student_password = ? where matric_no = ?";
        await pool.promise().query(sql, [newPassword, id]);
        res
          .status(201)
          .json({ message: "password has been change successfuly" });
      } else {
        res.status(200).json({ message: "wrong old password" });
      }
    } catch (error) {
      res.sendStatus(500);
    }
  }
};
module.exports = changePassword;
