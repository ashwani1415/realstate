import React, { useState, useEffect } from "react";
import { Form, Button, Container, Table } from "react-bootstrap";
import Axios from "axios";
const InputEdit = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const add = (a, b) => {
    return a + b;
  };

  const id = localStorage.getItem("client");
  useEffect(() => {
    Axios.get(`http://localhost:4200/showclients/${id}`).then((res) => {
      setData.res.data({
        name: res.data[0].name,
        email: res.data[0].email,
      });
      console.log("data aya", res.data);
    });
  }, [setData]);
  //React-Hook-Form

  //   useEffect(() => {
  //     Axios.get(`http://localhost:4200/clientedit/${id}`).then((res) => {
  //       setData(res);
  //       console.log(res.data);
  //     });
  //   }, [setData]);

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="p2">
          <Form.Control
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="p3">
          <Form.Control
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        {/* <Button variant="primary" type="button" onClick={this.mysubmit}>
                Submit
              </Button>
              &nbsp;
              <Button variant="success" type="button" onClick={this.myupdate}>
                Update
              </Button> */}
      </Form>
    </div>
  );
};

export default InputEdit;
