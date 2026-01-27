// 6. Handle form submission and prevent page reload.

import React, { useState } from 'react';

const FormSubmit = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter text" 
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormSubmit;
