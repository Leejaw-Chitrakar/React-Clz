// 4. Embed a JavaScript array length in JSX: "You have {items.length} items".

import React from 'react';

const ItemCount = () => {
  const items = [1, 2, 3, 4, 5];
  return (
    <p>You have {items.length} items</p>
  );
};

export default ItemCount;
