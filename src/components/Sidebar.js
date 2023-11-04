import React from "react";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div
      className="col-md-3 col-lg-2 sidebar-offcanvas pl-0"
      id="sidebar"
      role="navigation"
      style={{ backgroundColor: "#e9ecef" }}
    >
      <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
        <li className="nav-item mb-2 mt-3">
          <a className="nav-link text-secondary" href="#">
            <h5 style={{ font: 'italic 1.9em "Fira Sans", serif' }}>
              Admin Home
            </h5>
          </a>
        </li>
        <li className="nav-item mb-2 ">
          <a className="nav-link text-secondary" href="/">
            <i className="fas fa-user font-weight-bold"></i>{" "}
            <span
              className="ml-3"
              style={{ font: 'italic 1.2em "Fira Sans", serif' }}
            >
              Overview
            </span>
          </a>
        </li>
        <li className="nav-item mb-2">
          <a
            className="nav-link text-secondary"
            href="#submenu1"
            data-toggle="collapse"
            data-target="#submenu1"
          >
            <i className="far fa-file-word font-weight-bold"></i>
            <span
              className="ml-3"
              style={{ font: 'italic 1.2em "Fira Sans", serif' }}
            >
              {" "}
              Reports
            </span>
          </a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link text-secondary">
            <i className="far fa-chart-bar font-weight-bold"></i>
            <span
              className="ml-3"
              style={{
                cursor: "pointer",
                font: 'italic 1.2em "Fira Sans", serif',
              }}
              onClick={(e) => navigate("/City")}
            >
              Add City
            </span>
          </a>
        </li>

        <li className="nav-item mb-2">
          <a className="nav-link text-secondary" href="/">
            <i className="fas fa-tablet-alt font-weight-bold"></i>
            <span
              className="ml-3"
              style={{ font: 'italic 1.2em "Fira Sans", serif' }}
            >
              Data
            </span>
          </a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link text-secondary" href="/">
            <i className="fas fa-atom font-weight-bold"></i>
            <span
              className="ml-3"
              style={{ font: 'italic 1.2em "Fira Sans", serif' }}
            >
              Correction Home
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
