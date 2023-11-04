import React, { useContext, useState } from "react";
import NoteContext from "./NoteContext/NoteContext";
import Logout from "./Logout";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const valueContext = useContext(NoteContext);

  // hide login and register button

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid ">
          <a href="/" style={{ textDecoration: "none" }}>
            {" "}
            <h3
              style={{ color: "white", font: "normal 36px 'Cookie',cursive" }}
            >
              Property<span style={{ color: "#e0ac1c" }}>24*7</span>
            </h3>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {valueContext.username ? (
            <>
              {" "}
              <h4 className=" my-2 ms-4  " style={{ color: "white" }}>
                {valueContext.username}
              </h4>
              <Logout />
            </>
          ) : (
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <a className="nav-link " href="/Login">
                Login
              </a>
              <a className="nav-link" href="/Register">
                Register
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
