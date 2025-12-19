import React from "react";
import Logo from "./assets/img/logo.png";
import { useState } from "react";
// import "./App.css";
import cs from "./customcss.module.css";

const App = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h1 className={cs.title}>Traning of react!!</h1>
      <img
        className={count % 2 === 0 ? cs.my_img : cs.new_style}
        src={Logo}
        alt="logo"
      />
      <br />
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Count: {count}
      </button>
    </div>
  );
};

export default App;
