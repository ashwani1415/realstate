import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
// import { Container, Radio, Rating } from "./RatingStyles";
// import Axios from "axios";

const Rate = () => {
  const [rate, setRate] = useState(0);
  //   const rating = Array.from({ length: 5 }, (elem, index) => {
  //     let number = index + 0.5;
  //   });

  function SubmitNotification(e) {
    e.preventDefault();
    const id = e.target.value;

    localStorage.setItem("rate", JSON.stringify(id));

    // console.log(id);
    // Axios.get(`http://localhost:4200/rate/${id}`).then((res) => {
    //   setRate(res.data);
    //   alert(`Are you sure you want to give ${id} stars ?`);
    //   if (res.data !== 0) {
    //     alert("Thanks for Your Valuable feedback!");
    //   }
    // });
  }

  return (
    <Wrapper>
      <div className="icon-style" value={rate}>
        <span>
          {/* {rate >= index + 1 ? (
            <FaStar className="icon" />
          ) : rate >= number ? (
            <FaStarHalfAlt className="icon" />
          ) : (
            <AiOutlineStar className="icon" />
          )} */}
          {[...Array(5)].map((item, index) => {
            const givenRating = index + 1;
            return (
              <label>
                <input
                  style={{ display: "none" }}
                  type="radio"
                  value={givenRating}
                  onClick={SubmitNotification}
                />
                <span key={index}>
                  {rate >= index + 1 ? (
                    <FaStar className="icon" />
                  ) : rate >= givenRating ? (
                    <FaStarHalfAlt className="icon" />
                  ) : (
                    <AiOutlineStar className="icon" />
                  )}
                </span>
              </label>
            );
          })}
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content:flex-start .icon {
      font-size: 2rem;
      color: orange;
    }
    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;
export default Rate;
