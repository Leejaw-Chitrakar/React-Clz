// 8. Build a like button with a counter.

import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  return (
    <button onClick={() => setLikes(likes + 1)}>
      👍 Like {likes}
    </button>
  );
};

export default LikeButton;
