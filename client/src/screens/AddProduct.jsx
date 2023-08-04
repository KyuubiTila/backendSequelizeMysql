import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';

const AddProduct = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [published, setPublished] = useState(true);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const addProductHandler = async (event) => {
    event.preventDefault();

    // const data = {
    //   image: image,
    //   title: title,
    //   price: price,
    //   description: description,
    //   published: true,
    // };
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('published', published);
    await axios.post('http://localhost:8080/api/products/addproduct', formData);

    // on execution it should redirect ie navigate to the showProduct page
    navigate('/showProduct');
  };

  return (
    <form
      onSubmit={addProductHandler}
      method="POST"
      encType="multipart/form-data"
    >
      <div className="mb-6">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="user_avatar"
        >
          ADD IMAGE
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="user_avatar_help"
          id="fileName"
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />

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

        <label class="relative inline-flex items-center mb-4 cursor-pointer">
          <input
            type="checkbox"
            value={published}
            onChange={(e) => setPublished(e.target.checked)}
            class="sr-only peer"
          />
          <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Toggle me
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProduct;
