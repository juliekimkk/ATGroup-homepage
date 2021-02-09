import IndexNavbar from "../../components/Navbars/IndexNavbar.js";

/*eslint-disable*/
import React, { useEffect, useRef, useState } from "react";
import { TimelineLite, TweenMax, Power3 } from "gsap";
import styled, { keyframes } from "styled-components";
import { bounce, bounceInLeft, fadeInUp } from "react-animations";
import Aos from "aos";
import "aos/dist/aos.css";
import { useWindowScroll } from "react-use";

import HorizontalScroll from "react-scroll-horizontal";
// import "views/aboutus/font.css";

// const textAnimation = keyframes`${fadeInUp}`;

const ContentInnerDetails = styled.div`
  font-weight: 500;
  font-size: 23px;

  color: #fff;
  margin-top: 30px;
  font-family: Montserrat, Helvetica Neue;
`;
const Content = styled.div`
  position: relative;
  text-align: center;

  font-family: "NotoKR", "San-Serif";
`;
const ContentInner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ;
`;
const EmptySpace = styled.div`
  height: 400px;
`;

/*두번째영역 */

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
const ContentInnerDetails2 = styled.div`
  font-weight: 500;
  font-size: 20px;
  font-family: "NotoKR", "San-Serif";
  color: #fff;
  margin-top: 20px;
`;

const ButtonStyle = styled.button`
  margin-top: 1%;
  background: transparent;
  border: solid 1px #fff;
  width: 130px;
  height: 40px;
  text-align: center;
  color: #fff;
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

/*세번째영역 */
const EmptySpace3 = styled.div`
  height: 350px;
`;

// reactstrap components
import { Container } from "reactstrap";
// core components

function ATAKr() {
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
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/e-sports2.jpg") + ")",
            // opacity: 0.8,
            height: "1400px",
            maxWidth: "100%",
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
                <img
                  alt="..."
                  className="n-logo"
                  src={require("assets/img/ATAgray.png")}
                  style={{ width: "100px", height: "100px" }}
                ></img>
                <h1
                  style={{
                    margin: "0",
                    textAlign: "center",
                    marginLeft: "20px",
                    fontSize: "70px",
                    fontWeight: "1000",
                    color: "#f6dc3f",
                    fontFamily: "Montserrat,Helvetica Neue",
                  }}
                >
                  {/* ATA (A<span style={{ color: "#fff" }}>bout</span> T
                  <span style={{ color: "#fff" }}>he&nbsp;</span>A
                  <span style={{ color: "#fff" }}>pp</span>) */}
                  ATA (About The App)
                </h1>
              </ContentInner>
              <ContentInnerDetails>
                ATA는 게임 및 미디어 솔루션을 투자하고 개발하는 데 주력합니다.
                <br />
                공식 e-스포츠 팀을 운영합니다.
              </ContentInnerDetails>
              <div style={{ position: "relative", display: "block" }}>
                <ButtonStyle onClick={gotoFirstSection}>Next</ButtonStyle>
                <a
                  href={"http://atcworld.cafe24.com/default/"}
                  className="Link_detail"
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
                  }}
                >
                  공식 홈페이지 바로가기
                </a>
              </div>
            </Content>
          </div>
        </div>

        {/*두번째 */}

        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/e-sports3.jpg") + ")",
            opacity: "0.95",
            height: "1400px",
            maxWidth: "100%",
          }}
          ref={pageHeader}
        >
          <div className="content_total" ref={(el) => (app = el)}>
            <EmptySpace2></EmptySpace2>
            <Content2
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              data-aos-delay="400"
            >
              <ContentInner2>
                {/* <img
                  alt="..."++
                  className="n-logo"
                  src={require("assets/img/ATA.png")}
                  style={{ width: "100px", height: "100px" }}
                ></img> */}
                <h1
                  style={{
                    textAlign: "left",
                    marginLeft: "0px",
                    fontSize: "70px",
                    fontWeight: "1000",
                    fontFamily: "NotoKR,San-Serif",
                    color: "#fff",
                  }}
                  ref={commentSection}
                >
                  E-SPORTS
                </h1>
                <Underdivier></Underdivier>
                <img
                  alt="..."
                  className="n-logo"
                  src={require("assets/img/competition.png")}
                  style={{ marginTop: "50px" }}
                  // style={{ width: "50px", height: "50px" }}
                ></img>
              </ContentInner2>
              <ContentInnerDetails2>
                우리는 다양한 멀티 미디어 파트너와 협력하여
                <br />
                향후 선도적인 멀티미디어 프로젝트를 개발하고 있습니다.
                <br />
                나아가 글로벌 e스포츠 리그의 미디어 네트워크 제작과 <br />
                글로벌 커뮤니티와의 소통 개선을 위한 <br />
                엔터테인먼트 제작도 진행하고 있습니다.
              </ContentInnerDetails2>
              <ButtonStyle onClick={gotoSecondSection} style={{ top: "0" }}>
                Next
              </ButtonStyle>
            </Content2>
          </div>
        </div>
        {/* </div> */}

        {/*세번째 */}

        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/e-sports4.jpg") + ")",

            height: "1400px",
            maxWidth: "100%",
          }}
          ref={pageHeader}
        >
          <div
            className="content_total"
            ref={(el) => (app = el)}
            style={{ height: "1400px" }}
          >
            <EmptySpace3></EmptySpace3>
            <Content2
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              data-aos-delay="400"
            >
              <ContentInner2>
                {/* <img
                  alt="..."++
                  className="n-logo"
                  src={require("assets/img/ATA.png")}
                  style={{ width: "100px", height: "100px" }}
                ></img> */}
                <h1
                  style={{
                    textAlign: "left",
                    marginLeft: "0px",
                    fontSize: "70px",
                    fontWeight: "1000",
                    fontFamily: "NotoKR,San-Serif",
                    color: "#fff",
                  }}
                  ref={commentSection}
                >
                  TEAM
                </h1>
                <Underdivier></Underdivier>
                <img
                  alt="..."
                  className="n-logo"
                  src={require("assets/img/united.png")}
                  style={{ marginTop: "50px" }}
                  // style={{ width: "50px", height: "50px" }}
                ></img>
              </ContentInner2>
              <ContentInnerDetails2>
                ATA는 다양한 e스포츠와 콘텐츠 사업을 운영하며,
                <br />
                배틀그라운드(PUBG)에서 인기 있는 ATA LAVEGA로
                <br />
                사내 공식 e스포츠 팀을 운영하고 있습니다.
              </ContentInnerDetails2>
              <ButtonStyle onClick={gotoThirdSection} style={{ top: "0" }}>
                Next
              </ButtonStyle>

              <div
                className="gotoUp"
                style={{
                  bottom: "-130%",
                  position: "absolute",
                  textAlign: "50%",
                  marginLeft: "30%",
                }}
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="400"
                data-aos-easing="ease-in-out"
              >
                <a
                  href="#"
                  onClick={gotoTop}
                  stlye={{ scrollBehavior: "smooth" }}
                >
                  <img
                    className="clickimage"
                    src={require("assets/img/up-arrow3.png")}
                  ></img>
                </a>
              </div>
            </Content2>
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
                src={require("assets/img/pubg1.jpg")}
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
                src={require("assets/img/pubg2.jpg")}
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
                src={require("assets/img/pubg3.png")}
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
                src={require("assets/img/pubg1.jpg")}
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

export default ATAKr;
