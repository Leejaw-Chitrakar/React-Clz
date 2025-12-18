import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
0;
reateRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <YoChaiMero />
    <MyFirstComponent />
  </StrictMode>
);

function MyFirstComponent() {
  return (
    <div>
      <h1>This is My First Component</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis,
        fugiat! Quaerat rem quis dolorum pariatur doloremque ea, quam voluptas
        ipsum vero, ipsa omnis adipisci dignissimos quasi quisquam assumenda
        temporibus deleniti?
      </p>
    </div>
  );
}

function YoChaiMero() {
  return (
    <div>
      <h1>Yo Chai Mero function hai ta guys</h1>
    </div>
  );
}
