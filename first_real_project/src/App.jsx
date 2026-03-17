import { Component1 } from "./component/home";
import EventHandeling from "./eventHandeling/eventHandeling.jsx";
import FoodMenuList from "./pages/FoodMenus.jsx";
import DynamicFoodMenuList from "./pages/DynamicFoodMenus.jsx";
import Form from "./component/form.jsx"
import "./style/form.css"
// always start with Capital letter to create components
// Functional Component
let App = () => {
  var count = 0;
  return (
    // returns always only one jsx element
    // to return multiple elements we can use both div tag or fragment tag [<>This is call fragment tag</>]
    <div>
      {/* <h1>My First React App</h1> */}
      {/* Never user Capital letter for jsx elements */}
      {/* <B>Bold text</B> */}
      {/* use className instead of class attribute */}
      {/* use htmlFor instead of for attribute */}
      {/* <b className="bold-text">Bold text</b> */}
      {/* <label htmlFor="name">Name</label> */}
      {/* use {} to display variable value of for expression */}
      {/* <i>Total: 45+56={45+56}</i> */}
      {/* <h4>Count: {count}</h4> */}
      {/* <h6>Ever or Odd: {78%2==0 ? "Even" : "Odd"}</h6> */}
      {/* <Component1 /> */}
      {/* <EventHandeling /> */}
      {/* <FoodMenuList /> */}
    <div>
      <DynamicFoodMenuList />
    </div>
    </div>
  );
};

export default App;
