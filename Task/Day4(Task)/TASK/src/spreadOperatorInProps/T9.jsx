// 9. Use spread to clone props and add a new one.
import React from 'react';
import avatar from "../assets/avatar.png";

const Avatar = ({ src, size, alt, border }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      width={size} 
      height={size} 
      style={{ border: border ? '2px solid black' : 'none', borderRadius: '50%' }}
    />
  );
};

const T9 = () => {
  const baseAvatarProps = {
    src: avatar,
    size: 100,
    alt: "User Avatar"
  };

  const borderedAvatarProps = { ...baseAvatarProps, border: true };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Avatar {...baseAvatarProps} />
      <Avatar {...borderedAvatarProps} />
    </div>
  );
};

export default T9;
