// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.imageUrl} alt={product.name} />
          <h2>{product.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
