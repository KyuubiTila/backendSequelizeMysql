import React from 'react';
import { Link } from 'react-router-dom';

export const ProductCard = ({ product }) => {
  const { id, title, price, description } = product;
  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Phone Brand : {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Phone Price : {`$${price}`}
        </p>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Phone Description : {description}
        </p>
        <Link to={`/productDetail/${id}`} className="relative">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Detail
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};
