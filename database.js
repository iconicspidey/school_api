const mysql = require("mysql2");
require("dotenv").config();
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || "127.0.0.1",
  user: process.env.MYSQL_USER || "id20426953_spidey",
  database: process.env.MYSQL_DATABASE || "id20426953_spidey",
  password: process.env.MYSQL_DATABASE || "B3f-h9vXbNYQ4kH4",
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
});

module.exports = pool;
