import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { Form, Button, Container } from "react-bootstrap";
import Alert from "./Alert";

export default function Register(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");

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

  function changeUsername(e) {
    setName(e.target.value);
  }
  function changePassword(e) {
    setPassword(e.target.value);
  }
  function changeEmail(e) {
    setEmail(e.target.value);
  }

  function changePhone(e) {
    setPhone(e.target.value);
  }
  function mysubmit() {
    const data = { name: name, password: password, email: email, type: type };
    Axios.post("http://localhost:4200/register", data);
    console.log(data);
    showAlert("Register SuccussFully!", "success");
    navigate("/Login");
  }
  return (
    <div className="">
      <br />
      <br />
      <br />
      <Alert alert={alert} />
      <Container>
        <Form.Group
          className="mb-3"
          htmlFor="usernaem"
          controlId="formBasicEmail"
        >
          <Form.Label>username</Form.Label>
          <Form.Control
            type="text"
            placeholder="username"
            value={name}
            onChange={changeUsername}
          />
        </Form.Group>

        <Form>
          <Form.Group
            className="mb-3"
            htmlFor="email"
            controlId="formBasicEmail"
          >
            <Form.Label>email</Form.Label>
            <Form.Control
              type="email"
              placeholder="email"
              value={email}
              onChange={changeEmail}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={changePassword}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="phone"
              value={phone}
              onChange={changePhone}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <div>
            <p>Please select of Your type !</p>
            <select
              value={type}
              required
              onChange={(e) => setType(e.target.value)}
            >
              {/* <option>-select-</option> */}
              <option>Buyer</option>
              <option>Seller</option>
            </select>
          </div>
          <Button
            disabled={!name || !password ? true : false}
            variant="primary"
            type="button"
            className="my-2"
            onClick={mysubmit}
          >
            Submit
          </Button>
        </Form>
        <h4 className="my-3">
          Have already account ?<a href="/Login">Login</a>
        </h4>
      </Container>
    </div>
  );
}
