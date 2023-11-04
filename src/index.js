import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App1 from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Customer_home from "./components/Customer_home";
import Clients from "./components/client/Clients";
// import Admin  from './components/Admin';
// import Clients from './components/Clients'
import NoteState from "./components/NoteContext/NoteState";
import Admin from "./Admin";
import Description from "./components/Description";
import City from "./Add city/City";
import Footer from "./components/Footer/Footer";
import DataShow from "./components/DataShow";
import About from "./About/About";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App1 /> */}

    <BrowserRouter>
      <NoteState>
        <App1 />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="Login" element={<Login />}></Route>
          <Route path="Admin" element={<Admin />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="Customer_home" element={<Customer_home />}></Route>
          <Route path="clients" element={<Clients />}></Route>
          <Route path="City" element={<City />}></Route>
          <Route path="DataShow" element={<DataShow />}></Route>
          {/* <Route path="Description" element={<Description />}></Route> */}
          {/* <Route path='Admin' element={<Admin/>}></Route> */}
        </Routes>
        <Footer />
      </NoteState>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
