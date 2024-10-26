const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  port: process.env.MYSQL_PORT,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYQSL_DB_HOST,
  database: process.env.MYSQL_DB_NAME,
  user: process.env.MYSQL_DB_USER,
});

const find = async () => {
  const QUERY = "SELECT * FROM products";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY);
    return result;
  } catch (err) {
    console.log("Error: ", err);
    // throw err;
  }
};

const findById = async (id) => {
  const QUERY = "SELECT * FROM products WHERE id = ?";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [id]);
    return result[0];
  } catch (err) {
    console.log("Error: ", err);
    // throw err;
  }
};

const create = async (title, description, price) => {
  const QUERY = `INSERT INTO products 
                (title, description, price)
                VALUES(?,?,?)`;
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [title, description, price]);
    return result;
  } catch (err) {
    console.log("Error: ", err);
    // throw err;
  }
};

const update = async (title, description, price, id) => {
  const QUERY = `UPDATE products 
                 SET title = ?, description = ?, price = ? 
                 WHERE id = ?`;
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [title, description, price, id]);
    return result[0];
  } catch (err) {
    console.log("Error: ", err);
    // throw err;
  }
};

const deleteRecord = async (id) => {
  const QUERY = `DELETE FROM products WHERE id = ?`;
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [id]);
    return result[0];
  } catch (err) {
    console.log("Error: ", err);
    // throw err;
  }
};

module.exports = { find, findById, create, update, deleteRecord };
