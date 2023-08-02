import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ShowProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsData = async () => {
      // const { data } = await axios
      //   .get('/api/products/allProduct')
      //   .then((response) => {
      //     console.log(response);
      //     // Handle the response data
      //   })
      //   .catch((error) => {
      //     console.error('Error fetching data:', error);
      //     // Handle errors
      //   });
      // console.log(data);
      try {
        const response = await axios.get(
          'http://localhost:8080/api/products/allProduct'
        );
        const { data } = response; // Destructure 'data' from the 'response' object
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
      {products.map((product) => {
        return <li key={product.id}> {product.title}</li>;
      })}
    </>
  );
};

export default ShowProduct;
