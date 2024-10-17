const express = require("express");
const newRoute = require("./routes");

const app = express();
// Region Middleware
app.use(express.json());

app.use("/api/v1/products", newRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is run in port: ${port}`);
});
