import React, { useState } from "react";
import Axios from "axios";
import { Form, Button, Container, Table } from "react-bootstrap";
// import "./Client.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBRadio,
} from "mdb-react-ui-kit";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: "",
      place: "",
      sector: "",
      file: "",
      mylist: [],
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:4200/showproperty").then((res) =>
      this.setState({ mylist: res.data })
    );
  }
  change1 = (e) => {
    this.setState({ name: e.target.value });
  };
  change2 = (e) => {
    this.setState({ price: e.target.value });
  };

  change3 = (e) => {
    this.setState({ file: e.target.files[0] });
  };
  change4 = (e) => {
    this.setState({ place: e.target.value });
  };
  change5 = (e) => {
    this.setState({ sector: e.target.value });
  };
  mysubmit = () => {
    const formData = new FormData();
    formData.append("property_name", this.state.name);
    formData.append("property_price", this.state.price);
    formData.append("place", this.state.place);
    formData.append("sector", this.state.sector);
    formData.append("file", this.state.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    Axios.post("http://localhost:4200/saveproperty", formData, config).then(
      (res) => this.setState({ mylist: res.data })
    );
  };

  myupdate = () => {
    const data = { ...this.state };
    console.log(data);
    Axios.post("http://localhost:4200/update", data).then((res) =>
      this.setState({ mylist: res.data })
    );
  };
  onDelete = (e) => {
    e.preventDefault();
    const id = e.target.id;
    console.log(id);
    Axios.get(`http://localhost:4200/propertydelete/${id}`).then((res) => {
      this.setState({ mylist: res.data });
    });
  };
  onEdit = (e) => {
    e.preventDefault();
    const id = e.target.id;

    console.log(id);
    Axios.get(`http://localhost:4200/propertyedit/${id}`).then((res) => {
      this.setState({
        name: res.data[0].property_name,
        price: res.data[0].property_price,
        id: res.data[0].property_id,
        place: res.data[0].place,
        sector: res.data[0].sector,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <MDBContainer fluid>
          <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                  <p
                    classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 "
                    style={{
                      marginTop: "30px",
                      color: "#041533",
                      font: "normal 20px 'Cookie',cursive",
                    }}
                  >
                    Property Edit or Delete here
                  </p>
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size="lg" />
                    <MDBInput
                      placeholder="Porperty Name"
                      id="form1"
                      type="text"
                      className="w-100"
                      onChange={this.change1}
                      value={this.state.name}
                    />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size="lg" />
                    <MDBInput
                      id="form1"
                      type="file"
                      style={{ width: "225px" }}
                      onChange={this.change3}
                    />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <MDBInput
                      id="form2"
                      placeholder="Property price"
                      onChange={this.change2}
                      value={this.state.price}
                    />
                  </div>
                  <span
                    style={{
                      color: "#041533",
                      font: "normal 20px 'Cookie',cursive",
                    }}
                  >
                    Your City Name!
                  </span>
                  <select
                    value={this.state.place}
                    onChange={this.change4}
                    className="form-select my-3"
                    aria-label="Default select example"
                    style={{ width: "222px" }}
                  >
                    <option>--select city--</option>
                    {this.state.mylist.map((item, index) => {
                      return <option>{item.place}</option>;
                    })}
                  </select>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      placeholder="Sector Name"
                      id="form3"
                      type="text"
                      value={this.state.sector}
                      onChange={this.change5}
                    />
                  </div>
                  <div></div>
                  <br />
                  <MDBBtn className="mb-4" size="lg" onClick={this.mysubmit}>
                    Submit
                  </MDBBtn>
                  &nbsp;
                  <Button
                    variant="success"
                    className="mb-4 "
                    size="lg"
                    onClick={this.myupdate}
                  >
                    Update
                  </Button>
                </MDBCol>

                <MDBCol
                  md="10"
                  lg="6"
                  className="order-1 order-lg-2 d-flex align-items-center"
                >
                  <MDBCardImage
                    src="https://static.99acres.com/universalapp/img/Desktop_Animation_compress.gif"
                    fluid
                  />
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
        <br />
        <h2
          className="mt-5"
          style={{
            marginTop: "30px",
            color: "#041533",
            font: "normal 20px 'Cookie',cursive",
          }}
        >
          Client property for requset
        </h2>
        <h6
          style={{
            marginTop: "30px",
            color: "#041533",
            font: "normal 15px 'Cookie',cursive",
          }}
        >
          check and approval
        </h6>

        {this.state.mylist.map((item, index) => {
          return (
            <div className="card mb-3 my-3">
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
                      A sales quote is a document that tells a potential client
                      how much your product or service will cost. It's not a
                      legally binding contract but rather a formal notice of the
                      estimated price.
                      <br />
                      <button
                        className="btn btn-danger my-2"
                        id={item.product_id}
                        onClick={this.onDelete}
                      >
                        Delete
                      </button>{" "}
                      <button
                        className="btn btn-primary"
                        id={item.product_id}
                        onClick={this.onEdit}
                      >
                        Edit
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
    );
  }
}

export default Edit;
