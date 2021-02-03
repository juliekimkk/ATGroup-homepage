import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import ATB from "../business/ATB";

import { bounce, fadeInUp } from "react-animations";
import Aos from "aos";
import "aos/dist/aos.css";

import Kakaomap from "./kakaomap";
import StrategyKr from "./StrategyKr";
import ATseperateKr from "./ATseperateKr";

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

const ContentKr = () => {
  React.useEffect(() => {
    Aos.init({});
  }, []);
  // console.log(window.location.pathname);

  return (
    <div>
      <FirstText>
        <div style={{ height: "200px" }} id="content-section"></div>
        <div
          className="ContentText"
          style={{
            textAlign: "center",
            marginTop: "px",
            fontSize: "20px",
            fontWeight: "bold",
            lineHeight: "60px",
            letterSpacing: "1px",
          }}
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1300"
          data-aos-easing="ease-in-out"
          // data-aos-mirror="true"
          // // data-aos-once="false"
          // data-aos-anchor-placement="top-center"
        >
          우리는 환경 친화적이며 미래 지향적인 신흥 프로젝트에 많은 투자를 하고
          있으며, <br />
          한국을 기반으로 시작해 중국, 동남아시아, 일본, 러시아, 중앙아시아에
          이른
          <br />
          강력한 비즈니스 네트워크를 구축했습니다.한글판
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
      <StrategyKr></StrategyKr>
      <ATseperateKr></ATseperateKr>
    </div>
  );
};

export default ContentKr;
