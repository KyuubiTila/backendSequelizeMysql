const db = require('../models');

// MODEL
const Review = db.review;

// FUNCTIONS

const addReview = async (req, res) => {
  const id = req.params.id;
  const data = {
    product_id: id,
    rating: req.body.rating,
    description: req.body.description,
  };

  const review = await Review.create(data);
  res.status(200).send(review);
};

const getAllReviews = async (req, res) => {
  const allReviews = await Review.findAll({});
  res.status(200).send(allReviews);
};

const getIndividualReview = async (req, res) => {
  let id = req.params.id;
  const review = await Review.findOne({ where: { id: id } });
  res.status(200).send(review);
};

const deleteReview = async (req, res) => {
  let id = req.params.id;
  const deleted = await Review.destroy({ where: { id: id } });
  res.status(200).send('review is deleted');
};

const updateReview = async (req, res) => {
  let id = req.params.id;
  const updated = await Review.update(req.body, { where: { id: id } });
  res.status(200).send(updated);
};

module.exports = {
  addReview,
  getAllReviews,
  getIndividualReview,
  deleteReview,
  updateReview,
};
