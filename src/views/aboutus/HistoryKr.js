import IndexNavbar from "../../components/Navbars/IndexNavbar.js";

/*eslint-disable*/
import React, { useEffect, useRef } from "react";
import { TimelineLite, TweenMax, Power3 } from "gsap";
import styled from "styled-components";
import HistoryTextKr from "./historyTextKr.js";
import Aos from "aos";
import "aos/dist/aos.css";

// reactstrap components
import { Container } from "reactstrap";
import HistoryText2 from "./historyText2.js";

// core components

const MainText = styled.div`
  margin-top: 200px;
`;

const ButtonStyle2 = styled.button`
  margin-top: 1.5%;
  background: transparent;
  border: solid 1px black;
  width: 130px;
  height: 40px;
  text-align: center;
  color: #fff;
  padding: 0;
  position: relative;
  font-weight: bold;
  &:hover {
    background: #fff;
    color: black;
    border: 1px solid #fff;
    font-weight: bold;
  }
`;

const HistoryKr = () => {
  let app = useRef(null);
  let pageHeader = React.createRef();
  let content = useRef(null);
  const commentSection = useRef(null);
  const gotoFirstSection = () =>
    window.scrollTo({ top: 1320, left: 0, behavior: "smooth" });
  React.useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <div className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/building.jpg") + ")",
            opacity: 0.8,
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <IndexNavbar />
          <MainText
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1300"
            data-aos-easing="ease-in-out"
          >
            <div className="mainText">
              <h1
                style={{ fontSize: "70px", fontWeight: "600" }}
                ref={commentSection}
              >
                COMPANY HISTORY
              </h1>
              <div className="mainTextInner">
                Outstanding Realization through Innovative Technology
              </div>

              <p>CEO DUHYEON KIM</p>
            </div>
            <ButtonStyle2 onClick={gotoFirstSection} style={{ top: "0" }}>
              Next
            </ButtonStyle2>
          </MainText>
        </Container>
      </div>
      <HistoryTextKr />
    </>
  );
};

export default HistoryKr;
