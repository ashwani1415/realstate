import React, { useEffect, useState } from "react";
import Axios from "axios";
import Description from "./Description";
import { useNavigate } from "react-router-dom";
// import Card from "./Card";
import Acordion from "./NotificationItem/Acordion";

// import SerachItem from "./DataShow";
import "./Style/Home.css";
import Review from "../Review/Review";

const Home = () => {
  // const [results, setResults] = useState([]);
  const [place, setPlace] = useState([]);
  // var valu1 = localStorage.getItem("place");

  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = async (event) => {
    const newSearchTerm = event.target.value;
    console.log(newSearchTerm);
    // localStorage.setItem("place", newSearchTerm);
    setSearchTerm(newSearchTerm);
    // const response = await Axios.get(
    //   `http://localhost:4200/search?q=${newSearchTerm}`
    // );
    Axios.get("http://localhost:4200/showproperty").then((res) => {
      setResults(res.data);

      // setResults(
      //   res.data.filter((f) =>
      //     f.property_name.toLowerCase().includes(event.target.value)
      //   )
      // );
    });

    // const newSearchTerm = event.target.value;
  };

  // const MySubmit = async () => {
  //   const response = await Axios.get(`http://localhost:4200/search?q=${valu1}`);
  //   setResults(response.data);
  // };

  // useEffect(() => {
  //   MySubmit();
  // }, []);
  useEffect(() => {
    Axios.get("http://localhost:4200/showproperty").then((res) => {
      setPlace(res.data.place);
      console.log(res, "hh2");
    });
  }, [setPlace]);

  function onProperty(e) {
    const newSearchTerm = e.target.value;
    // localStorage.setItem("name", newSearchTerm);
    // const response = Axios.get(
    //   `http://localhost:4200/search?q=${newSearchTerm}`
    // );
    console.log(newSearchTerm, "ashwani bro");
  }

  // city show
  const [records, setRecords] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:4200/showcity").then((res) => {
      setRecords(res.data);
      console.log(res, "h1");
    });
  }, [setRecords]);
  // city check after select
  function myCity(e) {
    e.preventDefault();
    // const value = e.target.value;
    // console.log(value, "hey");
    navigate("/LOGIN");
  }
  function checkData(e) {
    const data = e.target.id;
    console.log(data, "hello1");
    // alert("everything okk");
    localStorage.setItem("place 1", data);
    navigate("/Datashow");
  }

  function goProperty() {
    navigate("/customer_home");
  }
  return (
    <>
      {/* <h1>Welcome Home Page</h1>
      <SerachItem /> */}
      {/* <SerachItem /> */}

      {/* </div> */}
      {/* input for search */}
      {/* <Sidebar /> */}

      {/* <img
            src="house.png"
            className="card-img-top my-3"
            style={{
              borderRadius: "40px",
              height: "70px",
              width: "70px",
              marginLeft: "50px",
            }}
            alt="..."
          /> */}
      {/* search data */}
      <div
        className="container "
        style={{
          borderColor: "lightgray",
        }}
      >
        <div className="row">
          {/* <form className="d-flex"> */}
          <input
            className="form-control my-2"
            type="search"
            placeholder="Search place here"
            aria-label="Search"
            style={{
              width: "400px",
              margin: "0px auto 0px auto",
            }}
            value={searchTerm}
            onChange={handleInputChange}
          />
          {results
            .filter((item) => {
              const search = searchTerm.toLowerCase();
              const fullName = item.place.toLowerCase();
              return searchTerm && fullName.startsWith(search);
            })
            .map((item) => {
              return (
                <div
                  style={{
                    textAlign: "center",
                    color: "#041533",
                    font: 'italic 1.2em "Fira Sans", serif',
                    cursor: "pointer",
                  }}
                >
                  <p onClick={checkData} id={item.place} key={item.property_id}>
                    {item.place}
                  </p>
                </div>
              );
            })}
        </div>
      </div>

      <div className="container my-3">
        <div className="row">
          <h2
            style={{
              color: "#041533",
              font: 'italic 2em "Fira Sans", serif',
            }}
          >
            Explore Real Estate in Popular Indian Cities{" "}
          </h2>

          <p
            style={{
              color: "#041533",
              font: 'italic 1.2em "Fira Sans", serif',
            }}
          >
            To check property rates & price trends
          </p>
          <div
            className="card-group  "
            style={{ width: "700px", cursor: "pointer" }}
          >
            {records.map((cities, index) => {
              return (
                <div className="card-group my-3 col" key={index}>
                  <div
                    className="card ms-3"
                    value={cities.city_name}
                    onClick={myCity}
                  >
                    <img
                      src={cities.city_image}
                      className="card-img-top my-3"
                      alt="chandigarh"
                      style={{
                        borderRadius: "40px",
                        height: "70px",
                        width: "70px",
                        marginLeft: "70px",
                      }}
                    />{" "}
                    <span
                      className="ms-5"
                      style={{
                        color: "#041533",
                        font: 'italic 1.2em "Fira Sans", serif',
                      }}
                    >
                      {cities.city_name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <img
            src="base.webp"
            className="rounded float-left col"
            alt="image"
            style={{ width: "100%" }}
          />
          <div className="text-right col">
            <span
              style={{
                color: "grey",
                font: 'italic 1.2em "Fira Sans", serif',
              }}
            >
              BUY A HOME
            </span>
            <br />
            <span
              style={{
                color: "#041533",
                font: 'italic 1.7em "Fira Sans", serif',
              }}
            >
              Find, Buy & Own Your Dream Home
            </span>
            <br /> <br />
            <p
              style={{
                color: "grey",
                font: 'italic 1.2em "Fira Sans", serif',
              }}
            >
              Explore from Apartments, land, builder floors, villas and more
            </p>
            <br />
            <button className="btn btn-primary my-3" onClick={goProperty}>
              Explore Buying
            </button>
          </div>
        </div>
      </div>
      <Review />
      {/* <Card /> */}
      <Acordion />
      {/* <Description /> */}
    </>
  );
};

export default Home;
