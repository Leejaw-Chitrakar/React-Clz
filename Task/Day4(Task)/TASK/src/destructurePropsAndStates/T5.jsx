// 5. Destructure only needed props and use rest (...rest).
import React from 'react';

const CustomButton = ({ label, ...rest }) => {
  return (
    <button {...rest}>
      {label}
    </button>
  );
};

const T5 = () => {
  return (
    <div>
      <CustomButton 
        label="Click Me" 
        onClick={() => alert("Rest props worked!")} 
        style={{ backgroundColor: 'orange', padding: '5px' }} 
      />
    </div>
  );
};

export default T5;
