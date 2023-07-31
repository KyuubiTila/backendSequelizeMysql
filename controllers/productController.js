const db = require('../models');

// "Don’t waste your time with explanations; people only hear what they want to hear.” Paulo Coelho

// create main model
const Product = db.product;
const Review = db.review;

// main work

// 1 create product
const addProduct = async (req, res) => {
  //   const { title, price, description, published } = req.body;

  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  const product = await Product.create(info);
  res.status(200).send(product);
  console.log(product);
};

// 2 get all product
const getAllProduct = async (req, res) => {
  let products = await Product.findAll({
    // attributes: ['title', 'price'],
  });
  res.status(200).send(products);
};

// 3 get single product
const getOneProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.findOne({ where: { id: id } });
  res.status(200).send(product);
};

// 4 update product
const updateSingleProduct = async (req, res) => {
  //   const product = await Product.findById(req.params.id);
  //   res.status(200).send(product);
  let id = req.params.id;
  const product = await Product.update(req.body, { where: { id: id } });
  res.status(200).send(req.body);
};

// 5 delete single product
const deleteSingleProduct = async (req, res) => {
  let id = req.params.id;
  await Product.destroy({ where: { id: id } });
  res.status(200).send('product is deleted');
};

// 6 get published product
const getPublishedProduct = async (req, res) => {
  //   let id = req.params.id;
  const published = await Product.findAll({ where: { published: true } });
  res.status(200).send(published);
};

// 7 CONNECT ONE TO MANY RELATION PRODUCT AND REVIEW

const getProductReview = async (req, res) => {
  let id = req.params.id;
  const data = await Product.findAll({
    include: [
      {
        model: Review,
        as: 'review',
      },
    ],
    where: { id: id },
  });
  res.status(200).send(data);
};

module.exports = {
  addProduct,
  getAllProduct,
  getOneProduct,
  updateSingleProduct,
  deleteSingleProduct,
  getPublishedProduct,
  getProductReview,
};
