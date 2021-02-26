import IndexNavbar from "../../components/Navbars/IndexNavbar.js";

/*eslint-disable*/
import React, { useEffect, useRef } from "react";
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
  font-family: "NotoKR", "San-Serif";
  color: black;
  margin-top: 30px;
  letter-spacing: 0px;
  font-family: "Montserrat,Helvetica Neue";
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
  font-family: "Montserrat,Helvetica Neue";
`;

const ButtonStyle = styled.button`
  margin-top: 1%;
  background: transparent;
  border: solid 1px black;
  width: 130px;
  height: 40px;
  text-align: center;
  color: black;
  padding: 0;
  position: relative;
  font-weight: bold;
  &:hover {
    background: black;
    color: #fff;
    border: 1px solid black;
    font-weight: bold;
  }
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
  text-align: right;
  margin-right: 25%;
  font-family: NotoKR, San-Serif;
`;
const Underdivier = styled.div`
  width: 50px;
  border: 0.5px solid #f0ff87;
  margin-left: auto;
  margin-top: 2%;
`;
const ContentInner2 = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  justify-content: left;
  align-items: left;
`;
const ContentInnerDetails2 = styled.div`
  font-weight: 500;
  font-size: 20px;
  font-family: "NotoKR", "San-Serif";
  color: #fff;
  margin-top: 20px;
  font-family: "Montserrat,Helvetica Neue";
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

const ButtonToWebsite = styled.button`
  margin-top: 10%;
  background: transparent;
  border: solid 2px #fff;
  width: 230px;
  height: 50px;
  text-align: center;
  color: black;
  padding: 0;
  position: absolute;
  margin-left: -7%;
  font-size: 17px;
  font-weight: bold;
  &:hover {
    background: black;
    color: #fff;
    font-size: 17px;
    border: 1px solid black;
  }
`;

/*세번째영역 */
const EmptySpace3 = styled.div`
  height: 350px;
`;

const ButtonStyle3 = styled.button`
  margin-top: 1.5%;
  background: transparent;
  border: solid 1px #fff;
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
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/blockchain.jpg") + ")",
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
                  src={require("assets/img/ATB.png")}
                  style={{ width: "100px", height: "100px" }}
                ></img>
                <h1
                  style={{
                    margin: "0",
                    textAlign: "center",
                    marginLeft: "20px",
                    fontSize: "70px",
                    fontWeight: "1000",
                    fontFamily: "NotoKR,San-Serif",
                    color: "#025ab7",
                    fontFamily: "Montserrat,Helvetica Neue",
                  }}
                >
                  {/* ATA (A<span style={{ color: "#fff" }}>bout</span> T
                  <span style={{ color: "#fff" }}>he&nbsp;</span>A
                  <span style={{ color: "#fff" }}>pp</span>) */}
                  ATB (About The Block)
                </h1>
              </ContentInner>
              <ContentInnerDetails>
                ATB는 블록체인기반 기술투자자이자 운영자 입니다
              </ContentInnerDetails>
              <div style={{ position: "relative", display: "block" }}>
                <ButtonStyle onClick={gotoFirstSection}>NEXT</ButtonStyle>
                {/* <a
                  href={"http://atcworld.cafe24.com/default/"}
                  className="Link_detail"
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
                  }}
                >
                  공식 홈페이지 바로가기
                </a> */}
              </div>
            </Content>
          </div>
        </div>

        {/*두번째 */}

        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/data3.jpg") + ")",
            opacity: "0.9",
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
                    textAlign: "right",
                    marginLeft: "0px",
                    fontSize: "70px",
                    fontWeight: "1000",
                    fontFamily: "NotoKR,San-Serif",
                    color: "#fff",
                  }}
                  ref={commentSection}
                >
                  서버 솔루션
                </h1>
                <Underdivier></Underdivier>
                <img
                  alt="..."
                  className="n-logo"
                  src={require("assets/img/server.png")}
                  style={{ marginTop: "50px" }}
                  // style={{ width: "50px", height: "50px" }}
                ></img>
              </ContentInner2>
              <ContentInnerDetails2>
                기존 인터넷은 http 프로토콜 형식의 중앙 집중 클라우드 서버로써
                파일 업로드 및 저장 속도가 느리고 손실 및 보안에 취약합니다. 4차
                산업혁명시대에 블록체인 기술이 집중 조명받으면서 기존 취약점이
                보안된 ‘블록체인 기반의 IPFS 프로토콜’로 변화하고 있습니다.
              </ContentInnerDetails2>
              <ButtonStyle2 onClick={gotoSecondSection} style={{ top: "0" }}>
                Next
              </ButtonStyle2>
            </Content2>
          </div>
        </div>
        {/* </div> */}

        {/*세번째 */}

        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/nasa1.jpg") + ")",

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
                    textAlign: "right",
                    marginLeft: "0px",
                    fontSize: "70px",
                    fontWeight: "1000",
                    fontFamily: "NotoKR,San-Serif",
                    color: "#fff",
                  }}
                  ref={commentSection}
                >
                  인터넷
                </h1>
                <Underdivier></Underdivier>
                <img
                  alt="..."
                  className="n-logo"
                  src={require("assets/img/internet.png")}
                  style={{ marginTop: "50px" }}
                  // style={{ width: "50px", height: "50px" }}
                ></img>
              </ContentInner2>
              <ContentInnerDetails2>
                ATB는 IPFS 기반 IDC운영사업중이며 IPFS 클라우드 마이닝 해시파워
                임대 서비스를 제공합니다 번거로운 채광 프로세스를 최적화 하여
                채굴장치 구매, 설치, 운영 등 단계를 생략 하였고 사용자는 바로
                신속히 채광을 시작할수 있습니다
              </ContentInnerDetails2>
              <ButtonStyle3 onClick={gotoThirdSection} style={{ top: "0" }}>
                Next
              </ButtonStyle3>
              <div
                style={{
                  bottom: "-130%",
                  position: "absolute",
                  textAlign: "50%",
                  marginLeft: "60%",
                }}
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
