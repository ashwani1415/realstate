import React, { useState, useEffect } from "react";
import Axios from "axios";

const Description = () => {
  const [data, setData] = useState([]);
  const [other, setProp] = useState([]);
  var valu1 = localStorage.getItem("name");

  const MySubmit = async () => {
    const response = await Axios.get(`http://localhost:4200/search?q=${valu1}`);
    setData(response.data);
    console.log(response, "agya");
    console.log(data, "aa hoo");
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
      {data.map((item) => {
        const { property_name, property_image, property_price } = item;
        return (
          <div className="container my-4">
            <h2 style={{ color: "skyblue" }}>Property Details</h2>
            <div className="card mb-3 bg-secondary " style={{ height: "300%" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={property_image}
                    className="img-fluid rounded-start"
                    alt="property image"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      {property_name}
                      <br />
                      Price: ₹ {property_price}
                    </h5>
                    <p className="card-text">
                      Did you know that 93% of homebuyers shop online for
                      properties? This means your real estate listing
                      description matters more than ever. A great listing is
                      written to cast the property in its best light while
                      making you look professional to both your client and
                      potential buyers. But writing a compelling listing can be
                      easier than you think. We’re here with eight tips for you
                      to write a real estate listing description that sells.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                    <button className="btn btn-warning">Click to Buy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="ms-4">
        <h4 style={{ marginBottom: "50px", marginTop: "200px" }}>
          Realted to your search:
        </h4>
        {other.map((item) => {
          return (
            <>
              <div
                className="card bg-secondary mb-3"
                style={{
                  marginRight: "20px",
                  width: "60%",
                  marginLeft: "200px",
                }}
              >
                <img
                  src={item.property_image}
                  className="card-img-top"
                  style={{
                    width: "30%",
                    marginLeft: "300px",
                    marginTop: "10px",
                  }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {item.property_name} <br />
                    Price: ₹ {item.property_price}
                  </h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Description;
