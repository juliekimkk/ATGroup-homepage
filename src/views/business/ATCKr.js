import IndexNavbar from "../../components/Navbars/IndexNavbar.js";

/*eslint-disable*/
import React, { useEffect, useRef, Component } from "react";
import { BrowserRouter as Route, Link, useParams } from "react-router-dom";

import { TimelineLite, TweenMax, Power3 } from "gsap";
import styled from "styled-components";
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
  color: #fff;
  margin-top: 30px;
  fontfamily: "Montserrat,Helvetica Neue";
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
  height: 400px;
`;

const ButtonStyle = styled.button`
  margin-top: 1%;
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
const Underdivier2 = styled.div`
  width: 50px;
  border: 0.5px solid #fff;
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

const ButtonStyle2 = styled.button`
  margin-top: 3%;
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

const ButtonToWebsite = styled.a`
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

const ContentInnerDetails3 = styled.div`
  font-weight: 500;
  font-size: 20px;
  font-family: "NotoKR", "San-Serif";
  color: black;
  margin-top: 20px;
`;

const ButtonStyle3 = styled.button`
  margin-top: 3%;
  background: transparent;
  border: solid 1px black;
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

  const [user, setUser] = React.useState(null);
  const { account } = useParams();
  // React.useEffect(() => {
  //   fetch(`http://atcworld.cafe24.com/default/${account}`).then(setUser);
  // }, account);

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
            backgroundImage: "url(" + require("assets/img/media3.jpg") + ")",
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
                <img
                  alt="..."
                  className="n-logo"
                  src={require("assets/img/ATCwhite2.png")}
                  style={{ width: "100px", height: "100px" }}
                ></img>
                <h1
                  style={{
                    margin: "0",
                    textAlign: "center",
                    marginLeft: "20px",
                    fontSize: "70px",
                    fontWeight: "1000",
                    color: "#fff",
                    fontFamily: "Montserrat,Helvetica Neue",
                  }}
                >
                  {/* ATA (A<span style={{ color: "#fff" }}>bout</span> T
                  <span style={{ color: "#fff" }}>he&nbsp;</span>A
                  <span style={{ color: "#fff" }}>pp</span>) */}
                  ATC (About The Contents)
                </h1>
              </ContentInner>
              <ContentInnerDetails>
                ATC는 콘텐츠 데이터 전달을 중심으로
                <br />
                국내 뉴미디어 콘텐츠를 제작·유통해 <br />
                다양한 주요 크리에이터와 미디어 파트너들이 협업해 <br />
                <b style={{ fontSize: "20px" }}>
                  "고품질 멀티미디어 데이터를 제공합니다."
                </b>
              </ContentInnerDetails>
              <div style={{ position: "relative", display: "block" }}>
                <ButtonStyle onClick={gotoFirstSection}>Next</ButtonStyle>
                {/* <Route
                  render={({ history }) => (
                    <ButtonToWebsite
                      onClick={() => {
                        history.push("/ATA");
                      }}
                    >
                      공식홈페이지 바로가기
                    </ButtonToWebsite>
                  )}
                /> */}

                {/* <ButtonToWebsite>공식홈페이지 바로가기 </ButtonToWebsite> */}

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
            backgroundImage: "url(" + require("assets/img/media6.jpg") + ")",
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
                  콘텐츠
                </h1>
                <Underdivier2></Underdivier2>
                <img
                  alt="..."
                  className="n-logo"
                  src={require("assets/img/content.png")}
                  style={{ marginTop: "50px" }}
                  // style={{ width: "50px", height: "50px" }}
                ></img>
              </ContentInner2>
              <ContentInnerDetails2>
                한국의 뉴미디어 크리에이터들이 <br />
                양질의 콘텐츠를 제작할 수 있도록 돕고
                <br />전 세계 시청자들과 소통할수 있도록 제공하고있습니다.
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
            backgroundImage: "url(" + require("assets/img/creator2.jpg") + ")",
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
                    fontSize: "55px",
                    fontWeight: "600",
                    fontFamily: "NotoKR,San-Serif",
                    color: "black",
                  }}
                  ref={commentSection}
                >
                  소셜마케팅 · 플랫폼
                </h1>
                <Underdivier></Underdivier>
                <img
                  alt="..."
                  className="n-logo"
                  src={require("assets/img/content-management.png")}
                  style={{ marginTop: "50px" }}
                  // style={{ width: "50px", height: "50px" }}
                ></img>
              </ContentInner2>
              <ContentInnerDetails3>
                한국의 뉴미디어 크리에이터들이 양질의 콘텐츠를 <br />
                제작할 수 있도록 돕고 전 세계 시청자들과 <br />
                소통할수 있도록 제공하고있습니다.
                <br />
                <b style={{ fontSize: "15px" }}>
                  "여러분의 콘텐츠를 가장 완벽한 형태로 중국의 모든 플랫폼과
                  연결합니다"
                </b>
              </ContentInnerDetails3>
              <ButtonStyle3 onClick={gotoThirdSection} style={{ top: "0" }}>
                Next
              </ButtonStyle3>
              <div
                style={{
                  bottom: "-130%",

                  position: "absolute",
                  textAlign: "50%",
                  marginLeft: "30%",
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
                src={require("assets/img/broadcast.jpg")}
                style={{
                  maxWidth: "800px",
                  height: "500px",
                  position: "relative",
                }}

                // style={{ width: "50px", height: "50px" }}
              ></img>
            </div>

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
                src={require("assets/img/creator2.png")}
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
