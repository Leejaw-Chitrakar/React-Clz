// 2. Spread props and override one property (e.g., change color).
import React from 'react';

const Button = ({ label, color, onClick }) => {
  return (
    <button style={{ backgroundColor: color, color: 'white', padding: '10px' }} onClick={onClick}>
      {label}
    </button>
  );
};

const T2 = () => {
  const defaultButtonProps = {
    label: "Click Me",
    color: "blue",
    onClick: () => alert("Clicked!")
  };

  return (
    <div>
      <Button {...defaultButtonProps} />
      <Button {...defaultButtonProps} color="red" label="Red Button" />
    </div>
  );
};

export default T2;
