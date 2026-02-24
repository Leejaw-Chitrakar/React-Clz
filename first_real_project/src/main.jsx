import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './component/home.jsx'
import {Component3} from './component/home.jsx'
import First from './propsExample/First.jsx'
import Navbar from "./component/navBar.jsx";
import Profile from "./pages/Profile.jsx";
import AuthPage from './auth/AuthPage.jsx';
import CounterApp from './classTask/counterApp.jsx';


let myObject = {
  address: "Nepal",
  age: 19,
  fullname: "Samit Shrestha"
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <CounterApp /> */}
    {/* <h2>Before Login</h2>
    <AuthPage isAuthenticated={false}/>
    <br />
    <br />
    <h2>After Login</h2>
    <AuthPage isAuthenticated={true}/> */}
    <App />
    {/* use navBar here */}
    {/* <Navbar /> */}
    {/* <Home /> */}
    {/* <Component3 /> */}
    {/* <First address = {"Nepal"} age = {19} fullname = "Leejaw Chitrakar"/> */}
    {/* spread operator in props */}
    {/* <First {...myObject} /> */}
    {/* <Profile name={"Leejaw Chitrakar"} age={19} address={"Kathmandu"}/> */}
  </StrictMode>,
)
