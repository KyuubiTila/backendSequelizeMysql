const {
  addProduct,
  getAllProduct,
  getOneProduct,
  updateSingleProduct,
  deleteSingleProduct,
  getPublishedProduct,
} = require('../controllers/productController.js');

const productRouter = require('express').Router();

// ADD PRODUCT
productRouter.post('/addproduct', addProduct);

// GET ALL PRODUCT
productRouter.get('/allProduct', getAllProduct);

//GET SINGLE PRODUCT
productRouter.get('/oneProduct/:id', getOneProduct);

// UPDATE SINGLE PRODUCT
productRouter.put('/updateProduct/:id', updateSingleProduct);

// DELETE SINGLE PRODUCT
productRouter.delete('/deleteProduct/:id', deleteSingleProduct);

// GET PUBLISHED PRODUCT
productRouter.get('/publishedProduct', getPublishedProduct);

module.exports = productRouter;
