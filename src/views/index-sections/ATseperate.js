import React, { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { AnimationWrapper } from "react-hover-animation";
import styled, { keyframes } from "styled-components";
import ATAbutton from "../business/ATA";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./ATseperate.css";

const Ourstory = styled.div`
  width: 100%;
  height: 905px;
  border: solid 2px red;
`;

// const Content_section_oneline = styled.div`
//   width: 3000px;
//   max-width: 100%;
//   height: 450px;
//   position: relative;
//   display: flex;
// `;

const Content_section_img1 = styled.div`
  position: relative;
  display: flex;
  width: 50%;
  height: 450px;

  background-size: 100%;
`;

const Content_section_img3 = styled.div`
  position: relative;
  display: flex;
  width: 25%;
  height: 450px;
  background: url(http://corp.revu.net/wp-content/uploads/2019/07/home_category6.jpg);
  background-size: 100%;
`;

const Content_section_img6 = styled.div`
  position: relative;
  display: flex;
  width: 25%;
  height: 450px;

  // background: url(http://corp.revu.net/wp-content/uploads/2019/07/home_category7.jpg);
  background-size: 100%;
`;

const Content_section_img8 = styled.div`
  position: relative;
  display: flex;
  width: 25%;
  height: 450px;
`;

const CompanyStory = styled.div`
  position: relative;
  display: inblcok;
  width: 100%;
  height: 450px;
  text-align: center;
  margin: 0px;
  padding: 50px;
  background-color: #fafafa;
  &:hover {
    background-color: #f5e9dd;
  }
`;

const Divider = styled.div`
position: relative;
width: 50px;
background: #101010";
height: 2px;
margin: 0 auto
`;
const PText = styled.div`
  position: relative;
  font-size: 13px;
  margin-top: 10%;
  width: 100%;
  color: "white";
  &:hover {
  }
`;
const ATALink = styled.div`
  position: relative;
  width: 100%;
  height: 36px;
  margin: 0 auto;
  margin-top: 10%;
`;

const ButtonStyle = styled.button`
  margin-top: 3%;
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

const ATseperate = () => {
  React.useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      {/*History 화이트영역 */}
      <div
        className="text_start"

        // style={{ backgroundColor: "#eeeeee" }}
      >
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div className="empty_space_up" style={{ height: "50px" }}>
              {/* <span className="vc_empty_space_inner"></span> */}
            </div>

            <div className="wpb_text_column wpb_content_element  Headlineshadow2">
              <div className="wpb_wrapper">
                <div id="our_business">
                  <span
                    style={{ color: "#585858" }}
                    data-aos="fade-down"
                    data-aos-offset="100"
                    data-aos-delay="50"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                  >
                    OUR BUSINESS
                  </span>
                </div>
              </div>
            </div>

            <div
              className="empty_space_under_maintext"
              style={{ height: "30px" }}
            >
              {/* <span className="vc_empty_space_inner"></span> */}
            </div>
            <div className="gem-divider" style={{ height: "70px" }}></div>

            <div
              id="content_section_total"
              style={{
                width: "100%",
                height: "900px",
              }}
            >
              <div id="content_section_oneline">
                <div
                  id="content_section_img1"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in"
                >
                  {" "}
                  <img
                    alt="..."
                    className="n-logo"
                    src={require("assets/img/e-sports2.jpg")}
                  ></img>
                </div>

                <div id="content_section_img1">
                  <div id="content_section_img1_details">
                    <b>ATA</b>
                    <Divider></Divider>
                    <div id="ptext">
                      <AnimationWrapper>
                        <p>
                          We've been using platform technology and data that's
                          been stored for over a decade. Global to drive
                          continuous growth and innovation on the foundation A
                          influencer marketing platform company.
                        </p>
                      </AnimationWrapper>
                    </div>

                    <Link to="/ATA">
                      <a id="link_detail" target="top">
                        View Details
                      </a>
                    </Link>
                  </div>
                </div>

                <div
                  id="content_section_img1"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in"
                >
                  {" "}
                  <img
                    className="n-logo"
                    src={require("assets/img/blockchain.jpg")}
                  ></img>
                </div>

                <div id="content_section_img1">
                  <div id="content_section_img1_details">
                    <b>ATB</b>
                    <Divider></Divider>
                    <div id="ptext">
                      <AnimationWrapper>
                        <p>
                          We've been using platform technology and data that's
                          been stored for over a decade. Global to drive
                          continuous growth and innovation on the foundation A
                          influencer marketing platform company.
                        </p>
                      </AnimationWrapper>
                    </div>

                    <Link to="/ATB">
                      <a id="link_detail" target="top">
                        View Details
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div id="content_section_oneline">
                <div id="content_section_img1">
                  <div id="content_section_img1_details">
                    <b>ATC</b>
                    <Divider></Divider>
                    <div id="ptext">
                      <AnimationWrapper>
                        <p>
                          We've been using platform technology and data that's
                          been stored for over a decade. Global to drive
                          continuous growth and innovation on the foundation A
                          influencer marketing platform company.
                        </p>
                      </AnimationWrapper>
                    </div>

                    <Link to="/ATC">
                      <a id="link_detail" target="top">
                        View Details
                      </a>
                    </Link>
                  </div>
                </div>

                <div
                  id="content_section_img1"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in"
                >
                  {" "}
                  <img
                    alt="..."
                    className="n-logo"
                    src={require("assets/img/media3.jpg")}
                  ></img>
                </div>

                <div id="content_section_img1">
                  <div id="content_section_img1_details">
                    <b>HISTORY</b>
                    <Divider></Divider>
                    <div id="ptext">
                      <AnimationWrapper>
                        <p>
                          We've been using platform technology and data that's
                          been stored for over a decade. Global to drive
                          continuous growth and innovation on the foundation A
                          influencer marketing platform company.
                        </p>
                      </AnimationWrapper>
                    </div>

                    <Link to="/history">
                      <a id="link_detail" target="top">
                        View Details
                      </a>
                    </Link>
                  </div>
                </div>

                <div
                  id="content_section_img1"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in"
                >
                  {" "}
                  <img
                    className="n-logo"
                    src={require("assets/img/building.jpg")}
                  ></img>
                </div>
              </div>
              {/* <div
                className="empty_space_footer"
                style={{ height: "0px" }}
              ></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ATseperate;
