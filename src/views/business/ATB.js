import IndexNavbar from "../../components/Navbars/IndexNavbar.js";

/*eslint-disable*/
import React, { useEffect, useRef, useState } from "react";
import { TimelineLite, TweenMax, Power3 } from "gsap";
import styled, { keyframes } from "styled-components";
import { bounce, bounceInLeft, fadeInUp } from "react-animations";
import Aos from "aos";
import "aos/dist/aos.css";
import { useWindowScroll } from "react-use";
import "./ATA.css";

import HorizontalScroll from "react-scroll-horizontal";

const EmptySpace2 = styled.div`
  height: 400px;
`;
const Content2 = styled.div`
  position: relative;
  text-align: left;
  margin-left: 30%;
  font-family: NotoKR, San-Serif;
  z-index: 2;
`;
const Underdivier = styled.div`
  width: 50px;
  border: 0.5px solid #f0ff87;
  margin-left: 0;
  margin-top: 2%;
`;
const ContentInner2 = styled.div`
  position: relative;
  display: block;
  justify-content: left;
  align-items: center;
`;

/*세번째영역 */
const EmptySpace3 = styled.div`
  height: 350px;
`;

const MainName = styled.div`
  color: black;
`;

// reactstrap components
import { Container } from "reactstrap";
// core components

function ATB() {
  let app = useRef(null);
  let pageHeader = React.createRef();
  let content = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });

  const commentSection = useRef(null);
  const gotoFirstSection = () =>
    window.scrollTo({ top: 1420, left: 0, behavior: "smooth" });

  const gotoSecondSection = () =>
    window.scrollTo({ top: 2800, behavior: "smooth" });

  const gotoThirdSection = () =>
    window.scrollTo({ top: 4200, behavior: "smooth" });

  const gotoTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const child = { width: `50%`, height: `100%` };
  const parent = {
    width: `100%`,
    height: `500px`,
  };

  React.useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <div style={{ height: "4200px" }}>
        <IndexNavbar />

        <div
          className="backgroundImg"
          style={{
            backgroundImage:
              "url(" + require("assets/img/blockchain.jpg") + ")",
          }}
          ref={pageHeader}
        >
          <div
            classList="text_whole_box"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-delay="400"
          >
            <div className="logo_name_box mainName">
              <img src={require("assets/img/ATB.png")}></img>
              <p style={{ color: "#0061a5" }}>ATB (About The Block)</p>
            </div>
            <div className="text_details" style={{ color: "black" }}>
              ⁠ATB, About the Blcok ⁠ATB focuses on investing and developing
              game and media solutions, operating official e-sports teams under
              its wing. We run an official e-sports team.
            </div>
            <div style={{ position: "relative", display: "block" }}>
              <div
                className="buttonStyle"
                onClick={gotoFirstSection}
                style={{ color: "black", border: "1px solid black" }}
              >
                Next
              </div>
              <a
                href={"https://abouttheapp.netlify.app/"}
                className="officalPage"
                style={{
                  border: "solid black 1px",
                  display: "block",
                  width: "250px",
                  height: "40px",
                  margin: "0 auto",
                  marginTop: "50px",
                  textDecoration: "none",
                  color: "black",
                  fontSize: "20px",
                  verticalAlign: "middle",
                  textAlign: "center",
                }}
              >
                Go official website
              </a>
            </div>
          </div>
        </div>

        {/*두번째 */}

        <div
          className="backgroundImg"
          style={{
            backgroundImage: "url(" + require("assets/img/data3.jpg") + ")",
            opacity: "0.95",
            overflow: "auto",
          }}
          ref={pageHeader}
        >
          <div className="content_total" ref={(el) => (app = el)}>
            {/* <div id="emptySpace"></div> */}
            <div
              className="content2"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              data-aos-delay="400"
            >
              <b className="subject" ref={commentSection}>
                Investing
              </b>
              <div className="underDivider">
                <img
                  alt="..."
                  src={require("assets/img/server.png")}
                  style={{ marginTop: "50px" }}
                ></img>
              </div>

              <div className="contentInnerDetails2">
                We collaborate with a variety of multi-media partners to develop
                future leading multi-media projects. ⁠Furthermore, we are in the
                process of producing media networks in the global e-sports
                league and entertainment production to communicate better with
                the global community.
              </div>
              <div
                className="buttonStyle2"
                onClick={gotoSecondSection}
                style={{ top: "0" }}
              >
                Next
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/*세번째 */}

        <div
          className="backgroundImg"
          style={{
            backgroundImage: "url(" + require("assets/img/nasa1.jpg") + ")",
            opacity: "0.95",
            overflow: "auto",
          }}
          ref={pageHeader}
        >
          <div className="content_total" ref={(el) => (app = el)}>
            {/* <div id="emptySpace"></div> */}
            <div
              className="content2"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              data-aos-delay="400"
            >
              <b className="subject" ref={commentSection}>
                Team
              </b>
              <div className="underDivider">
                <img
                  alt="..."
                  src={require("assets/img/internet.png")}
                  style={{ marginTop: "50px" }}
                ></img>
              </div>

              <div className="contentInnerDetails2">
                We collaborate with a variety of multi-media partners to develop
                future leading multi-media projects. ⁠Furthermore, we are in the
                process of producing media networks in the global e-sports
                league and entertainment production to communicate better with
                the global community.
              </div>
              <div
                className="buttonStyle2"
                onClick={gotoSecondSection}
                style={{ top: "0" }}
              >
                Next
              </div>
            </div>
          </div>
        </div>
        {/*하단 갤러리 */}
        <div style={parent}>
          <HorizontalScroll>
            <div
              style={child}
              style={{
                maxWidth: "800px",
                height: "500px",
                position: "relative",
              }}
            >
              <img
                alt="..."
                className="n-logo"
                src={require("assets/img/server2.png")}
                style={{
                  maxWidth: "800px",
                  height: "500px",
                  position: "relative",
                }}

                // style={{ width: "50px", height: "50px" }}
              ></img>
            </div>
            <div style={child}>
              <img
                alt="..."
                className="n-logo"
                src={require("assets/img/code2.jpg")}
                style={{
                  maxWidth: "800px",
                  height: "500px",
                  position: "relative",
                }}

                // style={{ width: "50px", height: "50px" }}
              ></img>
            </div>
            <div style={child}>
              {" "}
              <img
                alt="..."
                className="n-logo"
                src={require("assets/img/code3.jpg")}
                style={{
                  maxWidth: "800px",
                  height: "500px",
                  position: "relative",
                }}

                // style={{ width: "50px", height: "50px" }}
              ></img>
            </div>
            <div style={child}>
              {" "}
              <img
                alt="..."
                className="n-logo"
                src={require("assets/img/code1.jpg")}
                style={{
                  maxWidth: "800px",
                  height: "500px",
                  position: "relative",
                }}

                // style={{ width: "50px", height: "50px" }}
              ></img>
            </div>
          </HorizontalScroll>
        </div>
      </div>
      {/* window.scroll({ top: 1500, left: 0, behavior: "smooth" }); */}
    </>
  );
}

export default ATB;
