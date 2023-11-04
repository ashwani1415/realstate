import React, { useState } from "react";
import Alert from "../../components/Alert";

import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  //filling detail area
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [type, setType] = useState("");

  function handleSave(e) {
    e.preventDefault();
    const data = {
      name: name,
      number: number,
      type: type,
    };
    console.log(data);
    if (data.name.length !== 0) {
      showAlert(
        "Data save SuccussFully We will reach as soon as possible",
        "success"
      );
      navigate("/");
      setShow(false);
    } else if (data.name.length === 0) {
      showAlert("please fill the form", "danger");
      setShow(false);
    }
  }
  return (
    <>
      <Alert alert={alert} />
      <Button variant="primary" onClick={handleShow}>
        Phone Number
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              color: "skyblue",
              font: 'italic 1.8em "Fira Sans", serif',
            }}
          >
            Fill details here to get intouch
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            style={{ borderRadius: "8px", textAlign: "center" }}
          ></input>{" "}
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="number"
            style={{ borderRadius: "8px", textAlign: "center" }}
          ></input>
          <h6
            className="my-2"
            style={{
              color: "black",
              font: 'italic 1.2em "Fira Sans", serif',
            }}
          >
            Reason to buy:
          </h6>
          <div class="dropdown">
            <select
              style={{ border: "2px solid black", borderRadius: "8px" }}
              value={type}
              required
              onChange={(e) => setType(e.target.value)}
            >
              <option>none </option>
              <option>Investment</option>
              <option>Personal Reason</option>
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default App;
