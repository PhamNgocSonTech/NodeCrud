const express = require("express");
const router = express.Router();
const {
  getAllProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/index");

router.get("/", getAllProduct);
router.get("/:id", getProduct);
router.post("/create", createProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
