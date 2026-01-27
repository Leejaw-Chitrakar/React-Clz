// 8. Merge two objects and spread the result as props.
import React from 'react';

const ProductDisplay = ({ id, name, price, category, stock }) => {
  return (
    <div style={{ padding: '10px', border: '1px dashed grey' }}>
      <p>ID: {id}</p>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Category: {category}</p>
      <p>Stock: {stock}</p>
    </div>
  );
};

const T8 = () => {
  const productInfo = {
    id: 101,
    name: "Wireless Headphones",
    price: 99.99
  };

  const inventoryInfo = {
    category: "Electronics",
    stock: 50
  };

  return (
    <div>
      <ProductDisplay {...{ ...productInfo, ...inventoryInfo }} />
    </div>
  );
};

export default T8;
