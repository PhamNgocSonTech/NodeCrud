const express = require("express");
const newRoute = require("./routes/index.js");
require("dotenv").config();

const { connectDB } = require("./db/index.js");
const app = express();
// Region Middleware
app.use(express.json());

app.use("/api/v1/products", newRoute);

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is run in port: ${port}`);
    });
  })
  .catch((err) => {
    console.log(`Error occurred with MySQL ${err}`);
    process.exit();
  });
