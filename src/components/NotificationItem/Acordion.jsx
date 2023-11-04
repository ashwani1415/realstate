import React from "react";

const Acordion = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "70px" }}>
        <h2
          style={{
            color: "#041533",
            font: 'italic 2.5em "Fira Sans", serif',
          }}
        >
          Frequently asked questions
        </h2>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
                style={{
                  color: "#041533",
                  font: 'italic 0.9em "Fira Sans", serif',
                }}
              >
                Q. How is price change calculated?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div
                className="accordion-body"
                style={{
                  color: "#041533",
                  font: 'italic 1.0em "Fira Sans", serif',
                }}
              >
                The price change is calculated quarterly. The price revision
                exercised is brought to effect by several market forces like
                changes in construction and labour cost and ready reckoner
                rate/circle rate, to name a few. Government intervention through
                policy changes may also lead to price change.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
                style={{
                  color: "#041533",
                  font: 'italic 0.9em "Fira Sans", serif',
                }}
              >
                Q. How to decide your budget for buying a house?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div
                className="accordion-body"
                style={{
                  color: "#041533",
                  font: 'italic 1.0em "Fira Sans", serif',
                }}
              >
                Budget is one of the first points to be considered while
                planning to buy a home. An individual's affordability depends on
                the savings, monthly income, home loan eligibility, number of
                working years left, and outstanding liabilities, if any.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
                style={{
                  color: "#041533",
                  font: 'italic 0.9em "Fira Sans", serif',
                }}
              >
                Q. How to negotiate a deal?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div
                className="accordion-body"
                style={{
                  color: "#041533",
                  font: 'italic 1.0em "Fira Sans", serif',
                }}
              >
                The key is to remember that you can always seek a discount as a
                homebuyer. However, it is crucial to understand when to end the
                negotiations and decide further. Be an informed homebuyer by
                knowing about the market trends in the locality and the project.
                Do basic research on the internet and involve a good broker. As
                an expert, the broker insights and negotiation tips might be of
                immense help.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Acordion;
