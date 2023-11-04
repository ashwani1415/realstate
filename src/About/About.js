import React from "react";
import "./Style.css";
const About = () => {
  return (
    <>
      <div className="container my-3">
        <div
          class="card"
          style={{
            width: "50rem",
            height: "80rem",
            margin: "0px auto 0px auto ",
          }}
        >
          <div style={{ backgroundColor: "skyblue" }}>
            {" "}
            <img
              src="About.png"
              className="card-img-top my-3"
              alt="..."
              style={{
                height: "30%",
                width: "10%",
                margin: "0px 30% 0px 40%",
              }}
            />
            <h4
              style={{
                textAlign: "center",
                color: "#041533",
                font: "normal 30px 'Cookie',cursive",
              }}
            >
              <strong>About Us</strong>
            </h4>
          </div>

          <div class="card-body">
            <p
              class="card-text"
              style={{
                color: "#041533",
                font: "normal 20px 'Cookie',cursive",
              }}
            >
              Launched in 2005, 99acres.com, India’s No. 1 property portal,
              deals with every aspect of the consumers’ needs in the real estate
              industry. It is an online forum where buyers, sellers and
              brokers/agents can exchange information about real estate
              properties quickly, effectively and inexpensively. At 99acres.com,
              you can advertise a property, search for a property, browse
              through properties, build your own property microsite, and keep
              yourself updated with the latest news and trends making headlines
              in the realty sector.
            </p>
            <br />
            <br />
            <h5
              style={{
                color: "#041533",
                font: "normal 20px 'Cookie',cursive",
              }}
            >
              ✨ Why property24*7.com?{" "}
            </h5>
            <br />
            <p
              style={{
                color: "#041533",
                font: "normal 20px 'Cookie',cursive",
              }}
            >
              At present, 99acres.com prides itself for having around nine lakh
              property listings spanning across 600+ cities in India. Of all,
              the website held over 5.7 lakh paid listings at the end of FY
              2018-19. In addition to providing an online platform to real
              estate developers, brokers and property owners for listing their
              property for sale, purchase or rent, 99acres.com offers
              advertisement stints such as microsites, banners, home page links
              and project pages to the clients for better visibility and
              branding in the market. With the ever-evolving online search
              behaviour, 99acres.com shares updated information pertinent to
              real estate activities, assisting prospective buyers to make
              informed buying decision. We make online property search easier,
              quicker and smarter!
            </p>
            <br />
            <div style={{ backgroundColor: "skyblue" }}>
              <img
                src="award.png"
                className="card-img-top my-3 ms-2"
                alt="award img"
                style={{
                  height: "30%",
                  width: "10%",
                  float: "left",
                }}
              />
              <h5
                style={{
                  marginLeft: "100px",
                  marginTop: "30px",
                  color: "#041533",
                  font: "normal 30px 'Cookie',cursive",
                }}
              >
                Awards & Recognitions
              </h5>
            </div>
            <ul
              className="my-4"
              style={{
                color: "#041533",
                font: "normal 20px 'Cookie',cursive",
              }}
            >
              <li>• PropTech Mobile App of the Year Award 2019</li>
              <br />
              <li>
                • property24*7.com was awarded the ‘Most Admired Real Estate
                Website of the Year’ at the 3rd CMO Asia Awards for excellence
                in the real estate segment.
              </li>
              <br />
              <li>• Accommodation Times Awards 2012</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
