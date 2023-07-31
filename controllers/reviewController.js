const db = require('../models');

// MODEL
const Review = db.reviews;

// FUNCTIONS

const addReview = async (req, res) => {
  //   const { rating, description } = req.body;
  //   const review = await Review.create({
  //     rating,
  //     description,
  //   });

  //   res.json({
  //     status: 'success',
  //     data: review,
  //   });

  const data = {
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
