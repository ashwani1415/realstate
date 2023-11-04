import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Phone from "../Review/Phone/Phone";
// import Notification from "./NotificationItem/Notification";
// import Filter from "../FilterCategory/Filter";
// import Star1 from "../rating/star1";

const Customer = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  // var valu1 = localStorage.getItem("rate");

  useEffect(() => {
    Axios.get("http://localhost:4200/showproperty").then((res) => {
      setData(res.data);
      console.log(res, "hh1");
    });
  }, [setData]);

  function change2(e) {
    // this.setState({ price: e.target.value });
  }
  function onBuyProperty(e) {
    const data = e.target.id;
    console.log(data, "my data");
    // localStorage.setItem("mydata", data);
    // const file = e.target.file
    // console.log(name);

    // const data = { id: id, name: name, property_price: property_price };
    // Axios.post("http://localhost:4200/propertybuy", data).then((res) =>
    //   console.log("property buy")
    // );
    // alert("your property buy");
  }
  // rating area
  const [rate, setRate] = useState(0);
  //   const rating = Array.from({ length: 5 }, (elem, index) => {
  //     let number = index + 0.5;
  //   });

  function SubmitNotification(e) {
    e.preventDefault();
    // const id = e.target.property_name;
    const data = e.target.value;
    console.log("rate", data);

    // const id = e.target.value;

    // localStorage.setItem("rate", JSON.stringify(id));
    // console.log(data);
    // Axios.get("http://localhost:4200/rate", data).then((res) => {
    //   setRate(res.data);
    //   alert(`Are you sure you want to give ${id} stars ?`);
    //   if (res.data !== 0) {
    //     alert("Thanks for Your Valuable feedback!");
    //   }
    // });
  }
  return (
    <>
      {/* // <div>
      //   <Container>
      //     <h2 align="center">Customer Home</h2>
      //     <hr />
      //     <Table striped bordered hover>
      //       <thead>
      //         <th>Image</th>
      //         <th>Id</th>
      //         <th>Name</th>
      //         <th>comments</th>
      //         <th>Price</th>
      //         <th>Buy or rent</th>
      //       </thead>
      //       <tbody>
      //         {this.state.mylist.map((item, index) => { */}
      {/* //           return (
      //             <tr key={index}>
      //               <td>
      //                 <img src={item.property_image} width="100" height="100" />
      //               </td>
      //               <td>{item.property_id}</td>
      //               <td>{item.property_name}</td>
      //               <td>{item.textarea}</td>
      //               <td value={this.state.price} onChange={this.change2}>
      //                 {item.property_price}
      //               </td>
      //               <td>
      //                 <Button
      //                   variant="success"
      //                   type="button"
      //                   id={item.property_id}
      //                   onClick={this.onBuyProperty}
      //                 >
      //                   Buy
      //                 </Button>
      //               </td>
      //             </tr>
      //           );
      //         })}
      //       </tbody>
      //     </Table>
      //   </Container>
      //   <hr />
      //   <Notification />
      // </div> */}

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
                          font: 'italic 1.1em "Fira Sans", serif',
                        }}
                        // value={item.property_id}
                        // onChange={(e) => setId(e.target.value)}
                      >
                        <div
                          id={item.property_id}
                          onClick={onBuyProperty}
                          key={item.property_name}
                        >
                          {item.property_name}
                          {/* rating */}
                          <Wrapper>
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
                          </Wrapper>
                        </div>{" "}
                        {item.place}
                      </h5>
                      <h6
                        style={{
                          color: "#041533",
                          font: 'italic 1.1em "Fira Sans", serif',
                        }}
                      >
                        ₹{item.property_price}
                      </h6>

                      <p
                        className="card-text"
                        style={{
                          color: "#041533",
                          font: 'italic 1.1em "Fira Sans", serif',
                        }}
                      >
                        A sales quote is a document that tells a potential
                        client how much your product or service will cost. It's
                        not a legally binding contract but rather a formal
                        notice of the estimated price.
                        <br />
                        <br />
                        <Phone />
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
const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content:flex-start .icon {
      font-size: 2rem;
      color: orange;
    }
    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default Customer;
