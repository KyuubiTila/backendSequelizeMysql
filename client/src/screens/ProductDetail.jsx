import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ReviewCard } from '../components/ReviewCard';

const ProductDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [reviews, setReviews] = useState([]);
  const [image, setImage] = useState('');

  const [rating, setRating] = useState(0);
  const [described, setDescribed] = useState('');

  // USE EFFECT CONNECTING TO DATABASE GETTING THE DATA WHICH WOULD THE BE HELD BY THE USEEFFCT AND THROWN TO THE FRONT END
  useEffect(() => {
    // ASYNC FUNCTION TO CALLING THE DATABASE
    const getSingleProductData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/products/productReviews/${id}`
        );
        // Destructure 'data' from the 'response' object
        const { data } = response;
        console.log(response);
        //SETTING THE RESPONSE DATAS TO THE USESTATE FOR HOLDING
        console.log(data);
        setTitle(data[0].title);
        setPrice(data[0].price);
        setDescription(data[0].description);
        setReviews(data[0].review);
        setImage(data[0].image);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors
      }
    };
    getSingleProductData();
  }, [id]);

  const handleDelete = async (id) => {
    await axios.delete(
      `http://localhost:8080/api/products/deleteProduct/${id}`
    );
    navigate('/showProduct');
  };

  const handleReviewDelete = async (reviewId) => {
    await axios.delete(
      `http://localhost:8080/api/reviews/deleteReview/${reviewId}`
    );
  };
  // console.log(handleReviewDelete);

  const addReviewHandler = async () => {
    // e.preventDefault();
    let data = {
      product_id: id,
      rating: rating,
      description: described,
    };
    await axios.post(`http://localhost:8080/api/reviews/addReview/${id}`, data);
    console.log(data);
  };

  return (
    <>
      <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
          <img src={'http://localhost:8080/' + image} alt="" />

          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Phone Brand : {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Phone Price : {`$${price}`}
          </p>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Phone Description : {description}
          </p>
          <Link to={`/editProduct/${id}`} className="relative">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Edit
              </span>
            </button>
          </Link>
          <button
            onClick={() => handleDelete(id)}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Delete
            </span>
          </button>
        </div>
        <h1 className="flex justify-center">Reviews</h1>
        <br />

        {reviews.length > 0 ? (
          reviews.map((review) => {
            return (
              <ReviewCard
                key={review.id}
                review={review}
                handleReviewDelete={handleReviewDelete}
              />
            );
          })
        ) : (
          // <p> no rating for this product</p>
          <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div id="defaultTabContent">
              <h3 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                no rating for this product
              </h3>
            </div>
          </div>
        )}
        <br />
        <br />

        <h1 className="flex justify-center">Add review</h1>
        <hr />

        <form onSubmit={addReviewHandler}>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Rating
          </label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="enter rating"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />

          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Review
          </label>
          <textarea
            type="text"
            id="decription"
            value={described}
            onChange={(e) => setDescribed(e.target.value)}
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Review
          </button>
        </form>
      </div>
    </>
  );
};

export default ProductDetail;
