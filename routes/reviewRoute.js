const {
  addReview,
  getAllReviews,
  getIndividualReview,
  deleteReview,
  updateReview,
} = require('../controllers/reviewController.js');

const reviewRouter = require('express').Router();

// ADD PRODUCT
reviewRouter.post('/addReview', addReview);

// GET ALL PRODUCT
reviewRouter.get('/allReview', getAllReviews);

//GET SINGLE PRODUCT
reviewRouter.get('/oneReview/:id', getIndividualReview);

// DELETE SINGLE PRODUCT
reviewRouter.delete('/deleteReview/:id', deleteReview);

// UPDATE SINGLE PRODUCT
reviewRouter.put('/updateReview/:id', updateReview);

module.exports = reviewRouter;
