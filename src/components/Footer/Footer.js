import React from "react";
import "./Style.css";

const Footer = () => {
  return (
    <>
      <div className="navbar-expand-lg">
        <footer className="footer-distributed">
          <div className="footer-left">
            <a href="/" style={{ textDecoration: "none" }}>
              {" "}
              <h3>
                {" "}
                Property<span>24*7</span>
              </h3>{" "}
            </a>

            <p className="footer-links">
              <a href="/">Home</a>|<a href="/About">About</a>|
              <a href="/">Contact</a>|<a href="/">Blog</a>
            </p>

            <p className="footer-company-name">
              Copyright © 2021 <strong>property24*7</strong> All rights reserved
            </p>
          </div>

          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker"></i>
              <p>
                <span>Chandigarh</span>
              </p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p>+91 74**9**258</p>
            </div>
            <div>
              <i className="fa fa-envelope"></i>
              <p>
                <a href="mailto:contactus@property24*7.com">
                  property24*7@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="footer-right">
            <p className="footer-company-about">
              <span>About the company</span>
              All trademarks are the property of their respective owners. All
              rights reserved - property24*7 (India) Ltd.
            </p>
            <div className="footer-icons">
              <a href="/">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="/">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.youtube.com/">
                <i className="fa fa-youtube"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
