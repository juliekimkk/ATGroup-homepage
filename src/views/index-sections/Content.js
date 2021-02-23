import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import ATB from "../business/ATB";

import { bounce, fadeInUp } from "react-animations";
import Aos from "aos";
import "aos/dist/aos.css";
import Strategy from "./Strategy";
import ATseperate from "./ATseperate";
import Kakaomap from "./kakaomap";
import "./content.css";

const textAnimation = keyframes`${fadeInUp}`;

const FirstText = styled.div`
  animation: 1s ${textAnimation};
  font-family: Montserrat, "Helvetica Neue", Arial, sans-serif;
  font-size: 30px;
  color: black;
  font-weight: bold;
  line-height: 60px;
  letter-spacing: -0px;
  word-spacing: -0px;
  transform-origin: center center;
  transform: scaleY(1.03);
`;

const Content = () => {
  React.useEffect(() => {
    Aos.init({});
  }, []);
  // console.log(window.location.pathname);

  return (
    <div>
      <FirstText>
        <div id="content-section"></div>
        <div
          className="ContentText"
          id="fontsize"
          // style={{
          //   textAlign: "center",
          //   marginTop: "px",
          //   fontSize: "20px",
          //   fontWeight: "bold",
          //   lineHeight: "60px",
          //   letterSpacing: "1px",
          // }}
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1300"
          data-aos-easing="ease-in-out"
          // data-aos-mirror="true"
          // // data-aos-once="false"
          // data-aos-anchor-placement="top-center"
        >
          We are investing heavily in "emerging environmentally friendly and"
          <br />
          future-oriented projects. From Korea to China, <br />
          Southeast Asia, Japan, Russia, Central Asia, We've established a
          strong business network.
          {/* VOGO Group, with its roots going back to 1970s, has been dedicated to
          advance Korea's Industrial Development through <br />
          Construction of Major Infrastructures, IT Technology Innovation,
          Investing in Renewable Energy Development and International Trading. */}
        </div>
        <div className="under" style={{ marginTop: "100px" }}></div>
        <div
          className="divider"
          style={{
            position: "relative",
            width: "100px",
            background: "#101010",
            height: "2px",
            margin: "0 auto",
          }}
        ></div>
        {/* <div className="under" style={{ marginTop: "180px" }}></div> */}
      </FirstText>
      {/*전략계획 */}
      <Strategy></Strategy>
      <ATseperate></ATseperate>
    </div>
  );
};

export default Content;
