const {
  addReview,
  getAllReviews,
  getIndividualReview,
  deleteReview,
  updateReview,
} = require('../controllers/reviewController.js');

const reviewRouter = require('express').Router();

// ADD REVIEW
reviewRouter.post('/addReview', addReview);

// GET ALL REVIEW
reviewRouter.get('/allReview', getAllReviews);

//GET SINGLE REVIEW
reviewRouter.get('/oneReview/:id', getIndividualReview);

// DELETE SINGLE REVIEW
reviewRouter.delete('/deleteReview/:id', deleteReview);

// UPDATE SINGLE REVIEW
reviewRouter.put('/updateReview/:id', updateReview);

module.exports = reviewRouter;
