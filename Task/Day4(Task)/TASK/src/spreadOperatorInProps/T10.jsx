// 10. Spread props in a wrapper component (forwarding props).
import React from 'react';

const OriginalButton = (props) => {
  return <button style={{ padding: '8px 16px', cursor: 'pointer' }} {...props} />;
};

const ButtonWrapper = (props) => {
  return (
    <div className="button-wrapper" style={{ display: 'inline-block', padding: '5px', border: '1px solid blue' }}>
      <OriginalButton {...props} />
    </div>
  );
};

const T10 = () => {
  return (
    <div>
      <ButtonWrapper 
        onClick={() => alert("Wrapper worked!")} 
        children="Wrapped Button" 
      />
    </div>
  );
};

export default T10;