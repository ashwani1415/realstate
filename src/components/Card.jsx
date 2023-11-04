import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
// import "./Style/Card.css";

const Card = () => {
  const [data, setData] = useState([]);
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:4200/showproperty").then((res) => {
      setData(res.data);
      console.log(res, "hh1");
    });
  }, [setData]);

  async function OnClickDesc(e) {
    e.preventDefault();
    const newSearchTerm = e.target.value;
    localStorage.setItem("name", newSearchTerm);
    setDesc(newSearchTerm);
    //  console.log(newSearchTerm,"ashwani")
    const response = await Axios.get(
      `http://localhost:4200/search?q=${newSearchTerm}`
    );
    if (response.data !== 0) {
      navigate("/Description");
    }
  }

  return (
    <>
      {/* property views */}

      {data.map((item) => {
        const { property_name, property_image, property_price } = item;
        return (
          <>
            <div
              class="card bg-secondary mb-3"
              style={{
                marginRight: "20px",
                width: "60%",
                marginLeft: "200px",
              }}
            >
              <img
                src={item.property_image}
                class="card-img-top"
                style={{
                  width: "40%",
                  marginLeft: "250px",
                  marginTop: "10px",
                }}
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  {item.property_name} <br />
                  Price: ₹ {item.property_price}
                </h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
