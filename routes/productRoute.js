const {
  addProduct,
  getAllProduct,
  getOneProduct,
  updateSingleProduct,
  deleteSingleProduct,
  getPublishedProduct,
  getProductReview,
  upload,
} = require('../controllers/productController.js');

const productRouter = require('express').Router();

// ADD PRODUCT
productRouter.post('/addproduct', upload, addProduct);

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

//GET PRODUCT REVIEWS
productRouter.get('/productReviews/:id', getProductReview);

module.exports = productRouter;
