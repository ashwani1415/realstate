import React, { useEffect, useState } from "react";

import Axios from "axios";
import InputEdit from "./InputEdit";

const EditClient = () => {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4200/showclients").then((res) => {
      setRecord(res.data);
      console.log(res, "hh1");
    });
  }, [setRecord]);

  function EditData(e) {
    e.preventDefault();
    const id = e.target.value;
    localStorage.setItem("client", id);
    // console.log(id);
    // Axios.get(`http://localhost:4200/clientedit/${id}`).then((res) => {
    //   setRecord(res.data);
    // });
    window.location.reload(true);
  }
  //delete client
  function onDelete(e) {
    e.preventDefault();
    const id = e.target.id;

    console.log(id);
    Axios.get(`http://localhost:4200/clientdelete/${id}`).then((res) => {
      setRecord(res.data);
    });
  }
  return (
    <div>
      <div className="table-responsive">
        <InputEdit />
        <table className="table table-striped">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Email id</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {record.slice(0, 5).map((output) => (
              <tr>
                <td value={output.name}>{output.name}</td>
                <td value={output.email}>{output.email}</td>

                <td>
                  <button
                    className="btn btn-primary"
                    value={output.id}
                    onClick={EditData}
                  >
                    Edit
                  </button>{" "}
                  <button
                    className="btn btn-danger"
                    value={output.id}
                    onClick={onDelete}
                  >
                    Delete account
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditClient;
