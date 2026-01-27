// 6. Create a component that accepts any HTML attributes via spread.
import React from 'react';

const CustomButton = ({ label, ...rest }) => {
  return (
    <button {...rest} style={{ margin: '5px' }}>
      {label}
    </button>
  );
};

const T6 = () => {
  return (
    <div>
      <CustomButton label="Normal Button" />
      <CustomButton label="Disabled Button" disabled />
      <CustomButton label="With ID" id="my-btn" title="Hover me!" />
    </div>
  );
};

export default T6;
