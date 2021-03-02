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

function ATC() {
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
            backgroundImage: "url(" + require("assets/img/media3.jpg") + ")",
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
              <img src={require("assets/img/ATCwhite2.png")}></img>
              <p style={{ color: "#fff" }}>ATC (About The Contents)</p>
            </div>
            <div className="text_details" style={{ color: "#fff" }}>
              ⁠ATC produces and distributes Korean new media contents <br />
              focusing on the delivery of content data to Greater Chinese and
              Southeast
              <br /> Asian markets to provide high-quality multimedia data in
              cooperation with <br />
              various major creators and media partners.
            </div>
            <div style={{ position: "relative", display: "block" }}>
              <div
                className="buttonStyle"
                onClick={gotoFirstSection}
                style={{ color: "#fff", border: "1px solid #fff" }}
              >
                Next
              </div>
              <a
                href={"http://atcworld.cafe24.com/default/"}
                className="officalPage"
                style={{
                  border: "solid #fff 1px",
                  display: "block",
                  width: "250px",
                  height: "40px",
                  margin: "0 auto",
                  marginTop: "50px",
                  textDecoration: "none",
                  color: "#fff",
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
            backgroundImage: "url(" + require("assets/img/media6.jpg") + ")",
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
                  src={require("assets/img/content.png")}
                  style={{ marginTop: "50px" }}
                ></img>
              </div>

              <div className="contentInnerDetails2">
                We help Korean new-media creators to produce high-quality
                contents
                <br /> and  provide  to global viewer around the world.
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
            backgroundImage: "url(" + require("assets/img/creator2.jpg") + ")",
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
                We help Korean new-media creators to produce high-quality
                contents
                <br /> and  provide  to global viewer around the world.
                <br />
                <b style={{ fontSize: "15px" }}>
                  "Your content is the most complete form of all the platforms
                  in China, Connect"
                </b>
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
                src={require("assets/img/edit1.jpg")}
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
                src={require("assets/img/creator2.jpg")}
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
                src={require("assets/img/media7.jpg")}
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
                src={require("assets/img/creator3.jpg")}
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

export default ATC;
