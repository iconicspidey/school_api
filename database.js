const mysql = require("mysql2");
require("dotenv").config();
const pool = mysql.createPool({
  host: "sql8.freemysqlhosting.net",
  user: "sql8604931",
  database: "sql8604931",
  password: "nIRSt1Tyn7",
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
});

module.exports = pool;
