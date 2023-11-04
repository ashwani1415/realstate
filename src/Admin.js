import React from "react";

import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="container-fluid" id="main">
        <div className="row row-offcanvas row-offcanvas-left">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
