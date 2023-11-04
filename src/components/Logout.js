import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "./NoteContext/NoteContext";
import { useContext } from "react";

const Logout = () => {
  const valueContext = useContext(NoteContext);
  const navigate = useNavigate();

  function onLogout() {
    if (valueContext !== 0) {
      localStorage.removeItem("username");
      navigate("/login");
      valueContext.updateUsername("");
    }
  }
  return (
    <div>
      <button
        onClick={onLogout}
        type="button"
        style={{
          marginLeft: "10px",
          border: "solid 1px black",
          borderRadius: "5px",
          fontSize: "20px",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
