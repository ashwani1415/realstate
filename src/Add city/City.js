import React, { useState } from "react";
import "./City.css";
import Axios from "axios";
import Alert from "../components/Alert";
import { useNavigate } from "react-router-dom";

const City = () => {
  const navigate = useNavigate;
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
  const [selectedFile, setSelectedFile] = useState();
  const [city, setCity] = useState("");

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  function Submit() {
    const formData = new FormData();
    formData.append("city", city);
    formData.append("file", selectedFile);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const response = Axios.post(
      "http://localhost:4200/savecity",
      formData,
      config
    );
    if (response !== 0) {
      showAlert("Register SuccussFully!", "success");
      navigate("/Admin");
    }
  }

  return (
    <div className="container">
      <div className="App1">
        <Alert alert={alert} />
        <div className="loginContainer">
          <h1
            style={{
              marginTop: "-200px",
              color: "red",
              font: 'italic 1.9em "Fira Sans", serif',
            }}
          >
            Add City <span style={{ color: "#e0ac1c" }}>here</span>
          </h1>

          <div className="input-container">
            <label>City Name </label>
            <input
              type="text"
              name="uname"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            {/* {renderErrorMessage("uname")} */}
          </div>
          <div className="upload-btn-wrapper">
            <button className="btn">Upload a file</button>
            <input type="file" name="file" onChange={changeHandler} />
          </div>

          <button
            className="loginBut"
            style={{ marginTop: "100px" }}
            onClick={Submit}
          >
            <p>Submit</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default City;
