import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import NoteContext from "./NoteContext/NoteContext";
import { useContext } from "react";
import Alert from "./Alert";

export default function Login(props) {
  const valueContext = useContext(NoteContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  //alert
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  function handleChange2(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  async function mysubmit() {
    valueContext.updateUsername(name);
    const data = { name: name, password: password, email: email, type: type };
    console.log(data);
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch("http://localhost:4200/login", config);
    const json = await response.json();

    console.log(json);
    if (json.length == 0) {
      showAlert("Invalid Email | Password | Type", "danger");
    } else if (json[0].type == "Seller") {
      console.log("welcome admin");
      navigate("/Clients");
      showAlert("Login SuccussFully!", "success");
    } else if (json[0].type == "Buyer") {
      console.log("customer ");
      showAlert("Login SuccussFully!", "success");
      navigate("/Customer_Home");
    } else if (json[0].name == "admin") {
      showAlert("Welcome To Admin Page");
      navigate("/admin");
    }
  }

  return (
    <>
      <br />
      <br />
      <br />
      <Alert alert={alert} />
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
                  classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"
                  style={{
                    color: "#041533",
                    font: "normal 30px 'Cookie',cursive",
                  }}
                >
                  Login
                </p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    label="User Name"
                    id="form1"
                    type="text"
                    className="w-100"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput
                    label="Your Email"
                    id="form2"
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput
                    label="Password"
                    id="form3"
                    type="password"
                    onChange={handleChange2}
                  />
                </div>
                <div>
                  <span
                    style={{
                      color: "#041533",
                      font: "normal 20px 'Cookie',cursive",
                    }}
                  >
                    Your Account type!
                  </span>
                  <select
                    class="form-select my-3"
                    aria-label="Default select example"
                    value={type}
                    required
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option selected>--select type--</option>
                    <option>Buyer</option>
                    <option>Seller</option>
                  </select>
                </div>
                <br />
                <MDBBtn className="mb-4" size="lg" onClick={mysubmit}>
                  Submit
                </MDBBtn>
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
    </>
  );
}
