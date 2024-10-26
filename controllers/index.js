const {
  find,
  findById,
  create,
  update,
  deleteRecord,
} = require("../db/queries.js");
const createProduct = async (req, res) => {
  const { title, description, price } = req.body;
  if (!title || !description || !price) {
    return res.status(403).json({ message: "Input parameters not provided" });
  }
  try {
    const product = await create(title, description, price);
    return res.status(201).json({ product });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
const updateProduct = async (req, res) => {
  const { title, description, price } = req.body;
  const id = req.params.id;

  try {
    const product = await update(title, description, price, id);
    return res.status(201).json({ product });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await findById(id);
    return res.status(201).json({ product });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
const getAllProduct = async (req, res) => {
  try {
    const products = await find();
    return res.status(200).json({ products });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await deleteRecord(id);
    return res.status(200).json({ product });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createProduct,
  updateProduct,
  getProduct,
  getAllProduct,
  deleteProduct,
};
