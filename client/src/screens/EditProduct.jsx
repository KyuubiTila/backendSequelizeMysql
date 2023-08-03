import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
const EditProduct = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  // use effect has to first communicate with the database to tefch the data of the product we wish to update
  useEffect(() => {
    const updateSingleProduct = async () => {
      const { data } = await axios.get(
        `http://localhost:8080/api/products/oneProduct/${id}`
      );
      //SETTING THE RESPONSE DATAS TO THE USESTATE FOR HOLDING
      setTitle(data.title);
      setPrice(data.price);
      setDescription(data.description);
    };
    updateSingleProduct();
  }, [id]);

  // the datas are out, we can now edit them and send to the update request
  const updateProduct = async (event) => {
    event.preventDefault();
    const data = {
      title: title,
      price: price,
      description: description,
      published: true,
    };

    await axios.put(
      `http://localhost:8080/api/products/updateProduct/${id}`,
      data
    );

    // on execution it should redirect ie navigate to the showProduct page
    navigate('/showProduct');
  };
  return (
    <form onSubmit={updateProduct}>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          TITLE
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="enter title"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          PRICE ($)
        </label>
        <input
          type="number"
          id="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="enter price"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="repeat-password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          DESCRIPTION
        </label>
        <input
          type="text"
          id="decription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="enter description"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Update Product
      </button>
    </form>
  );
};

export default EditProduct;
