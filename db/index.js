const { createPool } = require("mysql2/promise");
require("dotenv").config();

const pool = createPool({
  port: process.env.MYSQL_PORT,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYQSL_DB_HOST,
  database: process.env.MYSQL_DB_NAME,
  user: process.env.MYSQL_DB_USER,
});

const connectDB = async () => {
  try {
    await pool.getConnection();
    console.log("Database connection successfully");
  } catch (error) {
    console.log("Database connection error");
    console.log(error);
    throw error;
  }
};

module.exports = { connectDB, pool };
