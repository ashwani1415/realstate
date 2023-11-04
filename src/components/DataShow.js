import React, { useState, useEffect } from "react";
import Axios from "axios";

const Description = () => {
  const [data, setData] = useState([]);
  const [other, setProp] = useState([]);
  var valu1 = localStorage.getItem("place 1");

  const MySubmit = async () => {
    const response = await Axios.get(`http://localhost:4200/search?q=${valu1}`);
    setData(response.data);
    console.log(response, "yes");
    console.log(data, "done");
  };

  useEffect(() => {
    MySubmit();
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:4200/showproperty").then((res) => {
      setProp(res.data);
      console.log(res, "hh1");
    });
  }, [setProp]);

  return (
    <>
      {/* sider bar */}
      <div
        className="col-md-3 col-lg-2 sidebar-offcanvas pl-0"
        id="sidebar"
        role="navigation"
        style={{ backgroundColor: "#e9ecef" }}
      >
        <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
          <li className="nav-item mb-2 mt-3">
            <a className="nav-link text-secondary" href="#">
              <h5 style={{ font: "normal 36px 'Cookie',cursive" }}>
                Admin Home
              </h5>
            </a>
          </li>
          <li className="nav-item mb-2 ">
            <a className="nav-link text-secondary" href="/">
              <i className="fas fa-user font-weight-bold"></i>{" "}
              <span
                className="ml-3"
                style={{ font: "normal 20px 'Cookie',cursive" }}
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
                style={{ font: "normal 20px 'Cookie',cursive" }}
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
                  font: "normal 20px 'Cookie',cursive",
                }}
                // onClick={(e) => navigate("/City")}
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
                style={{ font: "normal 20px 'Cookie',cursive" }}
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
                style={{ font: "normal 20px 'Cookie',cursive" }}
              >
                Correction Home
              </span>
            </a>
          </li>
        </ul>
      </div>
      {/* /card showing */}
      <div className="container">
        <div className="row">
          {data.map((item, index) => {
            return (
              <div className="card mb-3 my-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item.property_image}
                      className="img-fluid rounded-start my-2"
                      alt="property image"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{
                          color: "seagreen",
                          font: "normal 15px 'Cookie',cursive",
                        }}
                      >
                        {item.property_name}, {item.place}
                      </h5>
                      <h6
                        style={{
                          color: "#041533",
                          font: "normal 15px 'Cookie',cursive",
                        }}
                      >
                        ₹{item.property_price}
                      </h6>
                      <p
                        className="card-text"
                        style={{
                          color: "#041533",
                          font: "normal 15px 'Cookie',cursive",
                        }}
                      >
                        A sales quote is a document that tells a potential
                        client how much your product or service will cost. It's
                        not a legally binding contract but rather a formal
                        notice of the estimated price.
                        <br />
                        <button className="btn btn-primary my-2">
                          View Number 📞{" "}
                        </button>
                      </p>
                      {/* <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Description;
