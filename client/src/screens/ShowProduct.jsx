import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductCard } from '../components/ProductCard';
// import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ShowProduct = () => {
  const [products, setProducts] = useState([]);

  // USE EFFECT CONNECTING TO DATABASE GETTING THE DATA WHICH WOULD THE BE HELD BY THE USEEFFCT AND THROWN TO THE FRONT END
  useEffect(() => {
    const getProductsData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/api/products/allProduct'
        );

        // Destructure 'data' from the 'response' object
        const { data } = response;
        console.log(response);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors
      }
    };
    getProductsData();
  }, []);
  return (
    <>
      <h1>Show Product </h1>
      <Link to={'/addProduct'} className="relative">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add Product
          </span>
        </button>
      </Link>

      <div className="flex flex-wrap justify-center lg:flex-row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ShowProduct;
