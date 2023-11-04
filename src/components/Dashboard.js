import { useEffect, useState } from "react";
import Axios from "axios";

import Edit from "./Edit";
import EditClient from "./EditClient";

const Admin1 = () => {
  const [record, setRecord] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  // client requset
  const [approve, setApprove] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:4200/showData").then((res) => {
      setApprove(res.data);
      console.log(res, "hh1");
    });
  }, [setApprove]);

  //property show of all client
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:4200/showproperty").then((res) => {
      setData(res.data);
      console.log(res, "yes");
    });
  }, [setData]);

  // useEffect(() => {
  //   setRecord();
  // });

  //feedback

  // useEffect(() => {
  //   Axios.get("http://localhost:4200/showfeedback").then((res) => {
  //     setFeed(res.data);
  //     console.log(res, "yep");
  //   });
  // }, [setFeed]);

  //update client request
  function myupdate() {
    const data = { name: name, email: email, type: type };
    console.log(data);
    Axios.post("http://localhost:4200/clientupdate", data).then((res) =>
      setRecord(res.data)
    );
  }
  //submit property client
  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="col main pt-5 mt-3">
        <nav aria-label="breadcrumb"></nav>

        {/* <div className="row placeholders mb-3">
             <div className="col-6 col-sm-3 placeholder text-center">
                 <img src="//placehold.it/200/dddddd/fff?text=1" className="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                 <h4>Responsive</h4>
                 <span className="text-muted">Device agnostic</span>
             </div>
             <div className="col-6 col-sm-3 placeholder text-center">
                 <img src="//placehold.it/200/e4e4e4/fff?text=2" className="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                 <h4>Frontend</h4>
                 <span className="text-muted">UI / UX oriented</span>
             </div>
             <div className="col-6 col-sm-3 placeholder text-center">
                 <img src="//placehold.it/200/d6d6d6/fff?text=3" className="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                 <h4>HTML5</h4>
                 <span className="text-muted">Standards-based</span>
             </div>
             <div className="col-6 col-sm-3 placeholder text-center">
                 <img src="//placehold.it/200/e0e0e0/fff?text=4" className="center-block img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                 <h4>Framework</h4>
                 <span className="text-muted">CSS and JavaScript</span>
             </div>
         </div> */}

        <div className="row ">
          <div className="col-lg-7 col-md-6 col-sm-12">
            <h5 className="mt-3 mb-3 text-secondary">
              Check client data and edit data
            </h5>

            <EditClient />
          </div>
          {/* <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
            <h4 className="title mt-3 mb-3 text-center text-secondary">
              Data in Chart
            </h4>
            <div
              className="mb-5"
              style={{ height: "300px", width: "400px" }}
            ></div>
          </div> */}
        </div>

        <a id="more"></a>
        <hr />

        {/* <Edit /> */}

        <div className="row mb-3">
          <div className="col-lg-6">
            <div className="card mb-3">
              <div className="card-body">
                {/* <h4 className="card-title">Replaced with .card</h4> */}

                {/* <button type="button" className="btn btn-secondary btn-lg">
                  Large
                </button> */}

                {/* property for approval sart */}
                {approve.map((item, index) => {
                  return (
                    <div className="card mb-3 my-3">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src={item.property_image}
                            className="img-fluid rounded-start my-2"
                            alt="property image"
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5
                              className="card-title"
                              style={{
                                color: "seagreen",
                                font: 'italic 1.1em "Fira Sans", serif',
                              }}
                            >
                              {item.property_name}, {item.sector},{item.city}
                            </h5>
                            <h6
                              style={{
                                color: "#041533",
                                font: 'italic 1.1em "Fira Sans", serif',
                              }}
                            >
                              ₹{item.price}
                            </h6>
                            <p
                              className="card-text"
                              style={{
                                color: "#041533",
                                font: 'italic 1.1em "Fira Sans", serif',
                              }}
                            >
                              A sales quote is a document that tells a potential
                              client how much your product or service will cost.
                              It's not a legally binding contract but rather a
                              formal notice of the estimated price.
                              <br />
                              <button
                                className="btn btn-success my-2"
                                id={item.id}
                                onClick={onSubmit}
                              >
                                Approve
                              </button>{" "}
                              <button className="btn btn-danger" id={item.id}>
                                Delete
                              </button>
                            </p>
                            {/* <p className="card-text">
              <small className="text-muted">
                Last updated 3 mins ago
              </small>
            </p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* ----end---- */}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {/* <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#home1"
                  role="tab"
                  data-toggle="tab"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#profile1"
                  role="tab"
                  data-toggle="tab"
                >
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#messages1"
                  role="tab"
                  data-toggle="tab"
                >
                  Messages
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#settings1"
                  role="tab"
                  data-toggle="tab"
                >
                  Settings
                </a>
              </li>
            </ul> */}

            <div className="tab-content">
              <br />
              <div role="tabpanel" className="tab-pane active" id="home1">
                {/* <h4>Home</h4>
                <p>
                  1. These Bootstrap 4 Tabs work basically the same as the
                  Bootstrap 3.x tabs.
                  <br />
                  <br />
                  <button className="btn btn-primary-outline btn-lg">
                    Wow
                  </button>
                </p> */}
              </div>
              {/* <div role="tabpanel" className="tab-pane" id="profile1">
                <h4>Pro</h4>
                <p>
                  2. Tabs are helpful to hide or collapse some addtional
                  content.
                </p>
              </div> */}
              {/* <div role="tabpanel" className="tab-pane" id="messages1">
                <h4>Messages</h4>
                <p>
                  3. You can really put whatever you want into the tab pane.
                </p>
              </div> */}
              {/* <div role="tabpanel" className="tab-pane" id="settings1">
                <h4>Settings</h4>
                <p>
                  4. Some of the Bootstrap 3.x components like well and panel
                  have been dropped for the new card component.
                </p>
              </div> */}
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="col-lg-6">
            <div className="card card-default card-body">
              {/* <ul id="tabsJustified" className="nav nav-tabs nav-justified">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href=""
                    data-target="#tab1"
                    data-toggle="tab"
                  >
                    List
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href=""
                    data-target="#tab2"
                    data-toggle="tab"
                  >
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href=""
                    data-target="#tab3"
                    data-toggle="tab"
                  >
                    More
                  </a>
                </li>
              </ul> */}

              <br />
              <div id="tabsJustifiedContent" className="tab-content">
                <div className="tab-pane" id="tab1">
                  <div className="list-group">
                    {/* <a href="" className="list-group-item">
                      <span className="float-right label label-success">
                        51
                      </span>{" "}
                      Home Link
                    </a> */}
                    {/* <a href="" className="list-group-item">
                      <span className="float-right label label-success">8</span>{" "}
                      Link 2
                    </a> */}
                    {/* <a href="" className="list-group-item">
                      <span className="float-right label label-success">
                        23
                      </span>{" "}
                      Link 3
                    </a> */}
                    {/* <a href="" className="list-group-item text-muted">
                      Link n..
                    </a> */}
                  </div>
                </div>
                <div className="tab-pane active" id="tab2">
                  <div className="row">
                    <div className="col-sm-7">
                      {/* <h4>Profile Section</h4>
                      <p>
                        Imagine creating this simple user profile inside a tab
                        card.
                      </p> */}
                    </div>
                    <div className="col-sm-5">
                      {/* <img
                        src="//placehold.it/170"
                        className="float-right img-responsive img-rounded"
                      /> */}
                    </div>
                  </div>

                  {/* <a href="javascript:;" className="btn btn-info btn-block">
                    Read More Profiles
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin1;
