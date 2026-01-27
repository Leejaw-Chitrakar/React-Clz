// 3. Pass default props and override some using spread.
import React from 'react';

const Card = ({ title, content, footer }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '5px' }}>
      <h3>{title}</h3>
      <p>{content}</p>
      <small>{footer}</small>
    </div>
  );
};

const defaultCard = {
  title: "Default Title",
  content: "Default content goes here.",
  footer: "Read more..."
};

const T3 = () => {
  const customCard = {
    title: "Custom Title",
    content: "This content overrides the default."
  };

  return (
    <div>
      <Card {...defaultCard} />
      <Card {...defaultCard} {...customCard} />
    </div>
  );
};

export default T3;
