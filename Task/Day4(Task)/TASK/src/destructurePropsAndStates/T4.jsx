// 4. Destructure props inside the function body from props.
import React from 'react';

const ProductCard = (props) => {
  const { title, price } = props;

  return (
    <div style={{ border: '1px solid gray', padding: '10px' }}>
      <h4>{title}</h4>
      <p>Price: ${price}</p>
    </div>
  );
};

const T4 = () => {
  return (
    <div>
      <ProductCard title="Laptop" price={999} />
    </div>
  );
};

export default T4;
