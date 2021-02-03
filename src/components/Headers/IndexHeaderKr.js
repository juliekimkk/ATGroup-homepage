/*eslint-disable*/
import React, { useEffect, useRef } from "react";
import IndexNavbar from "../Navbars/IndexNavbar.js";
import { TimelineLite, TweenMax, Power3 } from "gsap";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

// reactstrap components
import { Container, NavLink } from "reactstrap";
// core components

const ContentInnerDetails = styled.div`
  font-weight: 500;
  font-size: 23px;
  // font-family: "NotoKR", "San-Serif";
  color: black;
  margin-top: 100px;
  font-family: "Montserrat,Helvetica Neue";
  line-height: 5;
`;
const Content = styled.div`
  position: relative;
  text-align: center;
  font-family: "NotoKR", "San-Serif";
`;
const Underdivier = styled.div`
  width: 50px;
  border: 0.5px solid #fff;
  margin-left: 0;
  margin-top: 2%;
`;
const ContentInner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ;
`;
const EmptySpace = styled.div`
  height: 350px;
`;

const ButtonStyle = styled.button`
  margin-top: 3%;
  background: transparent;
  border: solid 1px #fff;
  width: 130px;
  height: 40px;
  text-align: center;
  color: black;
  padding: 0;
  position: relative;
  font-weight: bold;
  font-size: 15px;
  &:hover {
    background: #fff;
    color: black;
    border: 1px solid #fff;
    font-weight: bold;
  }
`;

const ButtonToWebsite = styled.button`
  margin-top: 10%;
  background: transparent;
  border: solid 1px #fff;
  width: 230px;
  height: 50px;
  text-align: center;
  color: #fff;
  padding: 0;
  position: absolute;
  margin-left: -7%;
  font-size: 17px;
  font-weight: bold;
  &:hover {
    background: #f6dc3f;
    color: black;
    font-size: 17px;
    font-weight: bold;
    border: 1px solid #f6dc3f;
  }
`;

function IndexHeaderKr() {
  let app = useRef(null);
  let pageHeader = React.createRef();
  let content = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });

  const commentSection = useRef(null);
  const gotoFirstSection = () =>
    window.scrollTo({ top: 1420, left: 0, behavior: "smooth" });

  const parent = {
    width: `100%`,
    height: `500px`,
  };

  React.useEffect(() => {
    Aos.init({});
    // TweenMax.to(app, 0, { css: { visibility: "visible" } });
  }, []);

  return (
    <>
      <div className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/company1.jpg") + ")",
            opacity: "0.7",
          }}
          ref={pageHeader}
        ></div>
        <div style={{ height: "4200px" }}>
          <IndexNavbar />

          <div
            className="page-header-image"
            style={{
              // backgroundImage:
              //   "url(" + require("assets/img/company1.jpg") + ")",
              // opacity: 0.8,
              height: "1400px",
              maxWidth: "100%",
              opacity: "0.9",
            }}
            ref={pageHeader}
          >
            <div className="content_total" ref={(el) => (app = el)}>
              <EmptySpace></EmptySpace>
              <Content
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-easing="ease-in-out"
                data-aos-delay="400"
              >
                <ContentInner>
                  {/* <img
                    alt="..."
                    className="n-logo"
                    src={require("assets/img/ATC.png")}
                    style={{ width: "100px", height: "100px" }}
                  ></img> */}
                  <h1
                    style={{
                      margin: "0",
                      textAlign: "center",
                      marginLeft: "20px",
                      fontSize: "70px",
                      fontWeight: "1000",
                      color: "black",
                      fontFamily: "Montserrat,Helvetica Neue",
                    }}
                    ref={commentSection}
                  >
                    {/* ATA (A<span style={{ color: "#fff" }}>bout</span> T
                  <span style={{ color: "#fff" }}>he&nbsp;</span>A
                  <span style={{ color: "#fff" }}>pp</span>) */}
                    AT GROUP
                  </h1>
                </ContentInner>
                <ContentInnerDetails>
                  <b>
                    AT 그룹은 국제 비즈니스 인프라를 투자, 개발 및 배포하는{" "}
                    5개의 개별 기업입니다 한글판
                  </b>
                  <br />
                  <b style={{ fontSize: "20px" }}>
                    "고품질 멀티미디어 데이터를 제공합니다."
                  </b>
                </ContentInnerDetails>
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    align: "center",
                    margin: "auto",
                    display: "block",
                    marginTop: "3%",
                    justifyContent: "space-between",
                  }}
                >
                  <img
                    alt="..."
                    className="n-logo"
                    src={require("assets/img/ATA.png")}
                    style={{ width: "100px", height: "100px", margin: "10px" }}
                  ></img>
                  <img
                    alt="..."
                    className="n-logo"
                    src={require("assets/img/ATB.png")}
                    style={{ width: "100px", height: "100px", margin: "10px" }}
                  ></img>
                  <img
                    alt="..."
                    className="n-logo"
                    src={require("assets/img/ATC.png")}
                    style={{ width: "100px", height: "100px", margin: "10px" }}
                  ></img>
                  <img
                    alt="..."
                    className="n-logo"
                    src={require("assets/img/ATN3.png")}
                    style={{ width: "100px", height: "100px", margin: "10px" }}
                  ></img>
                  {/* <img
                    alt="..."
                    className="n-logo"
                    src={require("assets/img/ATC.png")}
                    style={{ width: "100px", height: "100px", margin: "10px" }}
                  ></img> */}
                </div>
                {/* <div style={{ position: "relative", display: "block" }}> */}
                {/* <ButtonStyle onClick={gotoFirstSection}>Next</ButtonStyle> */}
                {/* <ButtonToWebsite>공식홈페이지 바로가기</ButtonToWebsite> */}
                {/* </div> */}
              </Content>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexHeaderKr;
