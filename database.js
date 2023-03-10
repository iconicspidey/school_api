const mysql = require("mysql2");
require("dotenv").config();
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || "127.0.0.1",
  user: process.env.MYSQL_USER || "root",
  database: process.env.MYSQL_DATABASE || "hostel",
  password: process.env.MYSQL_DATABASE || "",
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
});

module.exports = pool;
