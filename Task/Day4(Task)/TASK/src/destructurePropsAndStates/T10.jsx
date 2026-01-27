// 10. Destructure props in a child component and pass to grandchild.
import React from 'react';

const Grandchild = ({ message }) => {
  return <p>Message in Grandchild: {message}</p>;
};

const Child = ({ data }) => {
  const { message } = data;
  return (
    <div style={{ paddingLeft: '20px', borderLeft: '2px solid blue' }}>
      <h4>Child Component</h4>
      <Grandchild message={message} />
    </div>
  );
};

const T10 = () => {
  const appData = { message: "Hello from Root!", id: 1 };

  return (
    <div>
      <Child data={appData} />
    </div>
  );
};

export default T10;
