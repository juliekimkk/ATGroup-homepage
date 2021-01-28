import IndexNavbar from "../../components/Navbars/IndexNavbar.js";

/*eslint-disable*/
import React, { useEffect, useRef } from "react";
import { TimelineLite, TweenMax, Power3 } from "gsap";
import styled from "styled-components";

// reactstrap components
import { Container } from "reactstrap";
// core components

const Styles1 = styled.div`
.hero {
  visibility: hidden;
  height: 50vh;
  width:1000px;
  .container {
    width: 1440px;
    min-width: 1000px;
    margin: 0 auto;
    .hero-inner {
      position: relative;
      width:1200px;
      height: 50vh; 
      display: flex;
      align-items: center; 
      justify-content: space-between;
      .hero-content {
        width: 50%;
        .hero-content-inner {
          position: relative;
          left:0px;
          width: 400px;
          margin: 0 auto;
          h1 {
            
            font-weight: 400;
            font-size: 30px;
            margin-bottom: 24px;
            .hero-content-line { 
              //한 문장 사이즈 
              // border: solid 2px red; 
              position:relative;
              margin: 0;
              height: 80px;
              width:1200px;
              overflow: hidden;
              color: black;
              top:0px;
              right:50%;
              word-spacing: 0px;
              margin-bottom:30px;
              .hero-content-line-inner {
                 
              }
            }
          }
          p {
            
            position:relative;
            top:300px;
            left:600px;
            font-size: 14px;
            line-height: 24px;
            font-weight: 300;
            padding-right: 48px;
            margin-bottom: 56px;
            
          }

          .VogoNameText{
            position:relative;
            width:500px;
            left:350px;
            font-weight: 600;
            font-size:50px;
            color:black;
          }
`;

function vision() {
  let app = useRef(null);
  let pageHeader = React.createRef();
  let content = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });

  React.useEffect(() => {
    //content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    // const headlineThird = headlineSecond.nextSibling;
    // const headlineFourth = headlineThird.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    TweenMax.to(app, 0, { css: { visibility: "visible" } });

    //Content Animation 택스트 세가지 y:80이 올라가는 높이 Y축
    tl.staggerFrom(
      [headlineFirst.children, headlineSecond.children],
      1,
      {
        y: 80,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.2,
      "Start"
    ).from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 2.5);
  }, [tl]);

  return (
    <>
      <div className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/vision.jpg") + ")",
            opacity: 0.8,
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <IndexNavbar />
          <Styles1>
            <div className="hero" ref={(el) => (app = el)}>
              <div className="container">
                {/* <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png")}
            ></img> */}

                <div className="hero-inner">
                  <div className="hero-content">
                    <div
                      className="hero-content-inner"
                      ref={(el) => (content = el)}
                    >
                      <h1>
                        <div className="hero-content-line">
                          <div className="hero-content-line-inner VogoNameText">
                            VISION
                          </div>
                        </div>
                        <div className="hero-content-line">
                          <div className="hero-content-line-inner">
                            Outstanding Realization through Innovative
                            Technology
                          </div>
                        </div>
                      </h1>
                      <p>CEO DUHYEON KIM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Styles1>
        </Container>
      </div>
    </>
  );
}

export default vision;
