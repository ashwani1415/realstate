import React, { useEffect, useState } from "react";
import Axios from "axios";
import Phone from "./Phone/Phone";

const Content = () => {
  const [data, setData] = useState([]);

  const toggleReadMore = () => {
    setData(!data);
  };
  useEffect(() => {
    Axios.get("http://localhost:4200/showproperty").then((res) => {
      setData(res.data);
      console.log(res, "hh1");
    });
  }, [setData]);

  return (
    <div className="container">
      {/* filtereation area */}
      {/* <Filter /> */}
      {/* filteration area end */}
      <div className="row">
        {data.map((item, index) => {
          return (
            <div
              className="card mb-3 my-3"
              style={{ maxWidth: "540px" }}
              key={index}
            >
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
                        font: 'italic 1.2em "Fira Sans", serif',
                      }}
                      // value={item.property_id}
                      // onChange={(e) => setId(e.target.value)}
                    >
                      <div id={item.property_id} key={item.property_name}>
                        {item.property_name}
                        {/* rating */}
                        {/* <Wrapper>
                            <div className="icon-style">
                              <span>
                                {[...Array(5)].map((item, index) => {
                                  const givenRating = index + 1;
                                  return (
                                    <label>
                                      <input
                                        style={{ display: "none" }}
                                        type="radio"
                                        value={givenRating}
                                        onChange={SubmitNotification}
                                      />
                                      <span key={index}>
                                        {rate >= index + 1 ? (
                                          <FaStar className="icon" />
                                        ) : rate >= givenRating ? (
                                          <FaStarHalfAlt className="icon" />
                                        ) : (
                                          <AiOutlineStar className="icon" />
                                        )}
                                      </span>
                                    </label>
                                  );
                                })}
                              </span>
                            </div>
                          </Wrapper> */}
                      </div>{" "}
                      {item.place}
                    </h5>
                    <h6
                      style={{
                        color: "#041533",
                        font: 'italic 1.2em "Fira Sans", serif',
                      }}
                    >
                      ₹{item.property_price}
                    </h6>

                    <p
                      className="card-text"
                      style={{
                        color: "#041533",
                        font: 'italic 1.2em "Fira Sans", serif',
                      }}
                    >
                      A sales quote is a document that tells a potential client
                      how much your product or service will cost. It's not a
                      legally binding contract but rather a formal notice of the
                      estimated price.
                      <br />
                    </p>
                    <Phone />

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
        <p className="text">
          {/* {data ? data.slice(0, 3) : data} */}
          {/* <span onClick={toggleReadMore} className="read-or-hide">
            {data ? "...read more" : " show less"}
          </span> */}
        </p>
        {/* {visibleItems < allItems.length && (
          <button onClick={showMoreItems}>Show more</button>
        )} */}
      </div>
    </div>
  );
};

export default Content;
