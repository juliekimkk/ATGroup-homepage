import React, { useEffect, useState } from "react";
import Container from "reactstrap/lib/Container";
import styled, { keyframes } from "styled-components";
import { bounce, bounceInLeft, fadeInUp } from "react-animations";
import Aos from "aos";
import "aos/dist/aos.css";
import DarkFooter from "components/Footers/DarkFooter";
import { Link } from "react-router-dom";
import "./historyText2.css";

const ATALink = styled.div`
  position: relative;
  width: 140px;
  height: 30px;
  margin: 0 auto;
  &:hover {
    background: #fff;
    color: black;
    font-weight: bold;
    border: 1px solid #fff;
    border-radius: 50px 50px 50px 50px;
  }
`;

const HistoryText2 = () => {
  React.useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      <div class="mainbox">
        <div className="oneline">
          <div
            className="onebyone"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-delay="200"
          >
            <img
              alt="..."
              className="imgSize"
              src={require("assets/img/ATA.png")}
            ></img>
            <Link to="/ATA" className="Linkto">
              바로가기
            </Link>
          </div>

          <div
            className="onebyone"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
          >
            <img
              alt="..."
              className="imgSize"
              src={require("assets/img/ATB.png")}
            ></img>{" "}
            <Link to="/ATB" className="Linkto">
              바로가기
            </Link>
          </div>
          <div
            className="onebyone"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
          >
            <img
              alt="..."
              className="imgSize"
              src={require("assets/img/ATC.png")}
            ></img>{" "}
            <Link to="/ATC" className="Linkto">
              바로가기
            </Link>
          </div>

          <div style={{ height: "300px" }}></div>
        </div>
      </div>
      <DarkFooter></DarkFooter>
    </>
  );
};

export default HistoryText2;
