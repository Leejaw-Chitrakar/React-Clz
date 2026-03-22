// import { Component1 } from "./component/home";
// import EventHandeling from "./eventHandeling/eventHandeling.jsx";
// import FoodMenuList from "./pages/FoodMenus.jsx";
// import DynamicFoodMenuList from "./pages/DynamicFoodMenus.jsx";
// import Form from "./component/form.jsx";
// import Dashboard from "./auth/Dashboard.jsx";
// import AComp from "./Day9/UseContextComponent.jsx";
// import ThemeToggle from "./Day9/ThemeToggle.jsx";
// import { useContext } from "react";
// import ThemeContextProvider, { ThemeContext } from "./Day9/ThemeContextProvider.jsx";
// import "./style/form.css";
// // always start with Capital letter to create components
// // Functional Component

// const AppContent = () => {
//   const { isLight } = useContext(ThemeContext);

//   return (
//     <div className={`app-container ${isLight ? "light" : "dark"}`}>
//       <ThemeToggle />
//       <div className="dashboard-card">
//         <Dashboard />
//       </div>
//     </div>
//   );
// };

// let App = () => {
//   return (
//     <ThemeContextProvider>
//       <AppContent />
//     </ThemeContextProvider>
//   );
// };

// export default App;

//For routing

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import UserDetails from "./Day12/userDetails";
import Profile from "./Day12/profile";
import UserHome from "./Day12/userHome";
import OutletWrapper from "./Day12/OutlerWrapper";
import Comment from "./Day13/Comment.jsx";
import Post from "./Day13/Post.jsx";

const App = () => {
  return (
    // <div>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path={"/"} element={<OutletWrapper />}>
    //         <Route index element={<UserHome />} />
    //         <Route path={"profile"} element={<Profile />} />
    //         <Route path={"userdetails/:userId"} element={<UserDetails />} />
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    <div>
      {/* <Comment /> */}
      <Post />
    </div>
  );
};

export default App;
