import Axios from "axios";
import React, { useEffect, useState } from "react";

const Filter = () => {
  const [city, setCity] = useState([]);
  const [sector, setSector] = useState([]);
  const [sc, setSelectedCountry] = useState();
  const [ss, setSelectedState] = useState();
  //fetch data

  useEffect(() => {
    Axios.get("http://localhost:4200/showproperty").then((res) => {
      setCity(res.data);
    });
    Axios.get("http://localhost:4200/showproperty").then((res) => {
      setSector(res.data);
    });
  }, [setCity, setSector]);
  //get unique data
  // const getUnique = (data, property) => {
  //   let newVal = data.map((item) => {
  //     return item[property];
  //   });
  //   return (newVal = ["All", ...new Set(newVal)]);
  // };
  // we need uique data
  // const categoryData = getUnique(data, "property_name");

  //update filter
  const [mini, setAmount] = useState("");
  const [max, setAmount1] = useState("");
  const [data, setData] = useState([]);

  function updatFilter(e) {
    // const data = { place: city };
    // console.log("hello", data);
    // Axios.get(`http://localhost:4200/showproperty/${data}`).then((res) => {
    //   setData(res.data);
    // });
    const data = e.target.place;

    console.log(data);
    Axios.get(`http://localhost:4200/showproperty/${data}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }
  // useEffect(() => {
  //   updatFilter();
  // });

  const handleCountryChange = () => {
    setSelectedCountry(document.getElementById("drop-1").value);
    setSelectedState();
  };

  const handleStateChange = () => {
    setSelectedState(document.getElementById("drop-2").value);
  };
  return (
    <>
      <div
        className="card text-body bg-info my-3"
        style={{ maxWidth: "20rem", height: "30rem" }}
      >
        <div className="card-header">Property Filter </div>
        <div className="card-body">
          <h5 className="card-title">Place </h5>
          <form>
            <select
              id="drop-1"
              style={{ borderRadius: "8px" }}
              onChange={handleCountryChange}
            >
              <option value="">Select a country</option>
              {city.map((item, index) => {
                return (
                  <option
                    key={index}
                    onChange={(e) => setCity(e.target.value)}
                    value={item.place}
                  >
                    {item.place}
                  </option>
                );
              })}
            </select>
            <h5 className="card-title my-2">Sector </h5>
            <select
              id="drop-2"
              style={{ borderRadius: "8px" }}
              onChange={handleStateChange}
            >
              <option value="">Select sector</option>
              {sector.map((sectors, index) => {
                if (sc == sectors.place)
                  return (
                    <option
                      key={index}
                      onChange={(e) => setSector(e.target.value)}
                      value={sectors.sector}
                    >
                      {sectors.sector}
                    </option>
                  );
              })}
            </select>
            <h5 className="card-title my-3">Price Budget </h5>
            <input
              type="text"
              placeholder="enter minimum amount"
              className="input my-2  "
              value={mini}
              onChange={(e) => setAmount(e.target.value)}
              style={{
                border: "none",
                borderRadius: "8px",
                textAlign: "center",
              }}
            ></input>
            <input
              type="text"
              placeholder="enter maximum amount"
              className="input my-2  "
              value={max}
              onChange={(e) => setAmount1(e.target.value)}
              style={{
                border: "none",
                borderRadius: "8px",
                textAlign: "center",
              }}
            ></input>
            <br />
            <button className="btn btn-success my-3" onClick={updatFilter}>
              Filter
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Filter;
