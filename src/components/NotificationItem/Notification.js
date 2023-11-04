import axios from "axios";
import React, { useState } from "react";

const Notification = () => {
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const [textarea, setText] = useState("");
  function SubmitNotification() {
    const data = { textarea: textarea };
    const response = axios.post("http://localhost:4200/feedback", data);
    if (response.data !== 0) {
      alert("Thanks for Your Valuable feedback!");
    }
  }
  return (
    <div>
      <div class="col my-3">
        <h5 style={{ color: "green" }}>Reviews:</h5>
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          style={{ height: "50px", width: "300px" }}
          onChange={handleOnChange}
        ></textarea>

        <button
          onClick={SubmitNotification}
          className=" my-3"
          style={{
            border: "1px solid skyblue",
            borderRadius: "8px",
            backgroundColor: "white",
          }}
        >
          Submit reviews
        </button>
      </div>{" "}
    </div>
  );
};

export default Notification;
