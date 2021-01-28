import React, { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { AnimationWrapper } from "react-hover-animation";
import styled, { keyframes } from "styled-components";
import ATAbutton from "../business/ATA";
import { BrowserRouter as NavLink } from "react-router-dom";

const Ourstory = styled.div`
  width: 100%;
  height: 905px;
  border: solid 2px red;
`;

const Content_section_oneline = styled.div`
  width: 100%;
  height: 450px;
  position: relative;
  display: flex;
`;

const Content_section_img1 = styled.div`
  position: relative;
  display: flex;
  width: 25%;
  height: 450px;
  background: url(http://corp.revu.net/wp-content/uploads/2019/07/home_category5.jpg);
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

  background: url(http://corp.revu.net/wp-content/uploads/2019/07/home_category7.jpg);
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
    <div>
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
                <h2
                  className="content_maintext"
                  style={{ textAlign: "center" }}
                >
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
                </h2>
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
              className="content_section_total"
              style={{
                width: "100%",
                height: "900px",
              }}
            >
              <Content_section_oneline>
                <Content_section_img1
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in"
                >
                  {" "}
                  <img
                    alt="..."
                    className="n-logo"
                    src={require("assets/img/e-sports2.jpg")}
                    style={{ width: "100%", height: "100%" }}
                  ></img>
                </Content_section_img1>
                <div style={{ width: "25%" }}>
                  <CompanyStory>
                    <h2>ATA</h2>
                    <Divider></Divider>
                    <PText>
                      <AnimationWrapper>
                        <p>
                          우리는 플랫폼 기술과 10여 년간 축전된 데이터를
                          기반으로 지속적인 성장과 혁신을 창출하는 글로벌
                          인플루언서 마케팅 플랫폼 기업입니다.
                        </p>
                      </AnimationWrapper>
                    </PText>

                    <ATALink>
                      <a
                        href="/ATA"
                        className="Link_detail"
                        style={{
                          border: "solid black 1px",
                          display: "block",
                          width: "200px",
                          height: "30px",
                          margin: "0 auto",
                          marginTop: "50px",
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        View Details
                      </a>
                    </ATALink>
                  </CompanyStory>
                </div>

                <Content_section_img3
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in"
                >
                  {" "}
                  <img
                    alt="..."
                    className="n-logo"
                    src={require("assets/img/blockchain.jpg")}
                    style={{ width: "100%", height: "100%" }}
                  ></img>
                </Content_section_img3>
                <div style={{ width: "25%" }}>
                  <CompanyStory>
                    <h2>ATB</h2>
                    <Divider></Divider>
                    <PText>
                      <AnimationWrapper>
                        <p>
                          우리는 플랫폼 기술과 10여 년간 축전된 데이터를
                          기반으로 지속적인 성장과 혁신을 창출하는 글로벌
                          인플루언서 마케팅 플랫폼 기업입니다.
                        </p>
                      </AnimationWrapper>
                    </PText>

                    <ATALink>
                      <a
                        href="/ATB"
                        className="Link_detail"
                        style={{
                          border: "solid black 1px",
                          display: "block",
                          width: "200px",
                          height: "30px",
                          margin: "0 auto",
                          marginTop: "50px",
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        View Details
                      </a>
                    </ATALink>
                  </CompanyStory>
                </div>
              </Content_section_oneline>

              <Content_section_oneline>
                <div style={{ width: "25%" }}>
                  <CompanyStory>
                    <h2>ATC</h2>
                    <Divider></Divider>
                    <PText>
                      <AnimationWrapper>
                        <p>
                          우리는 플랫폼 기술과 10여 년간 축전된 데이터를
                          기반으로 지속적인 성장과 혁신을 창출하는 글로벌
                          인플루언서 마케팅 플랫폼 기업입니다.
                        </p>
                      </AnimationWrapper>
                    </PText>

                    <ATALink>
                      <a
                        href="/ATC"
                        className="Link_detail"
                        style={{
                          border: "solid black 1px",
                          display: "block",
                          width: "200px",
                          height: "30px",
                          margin: "0 auto",
                          marginTop: "50px",
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        View Details
                      </a>
                    </ATALink>
                  </CompanyStory>
                </div>

                <Content_section_img6
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in"
                >
                  {" "}
                  <img
                    alt="..."
                    className="n-logo"
                    src={require("assets/img/media3.jpg")}
                    style={{ width: "100%", height: "100%" }}
                  ></img>
                </Content_section_img6>

                <div style={{ width: "25%" }}>
                  <CompanyStory>
                    <h2>HISTORY</h2>
                    <Divider></Divider>
                    <PText>
                      <AnimationWrapper>
                        <p>
                          AT 그룹은 국제 비지니스 인프라를 투자, 개발 및
                          배포하고있는 <br />
                          5개의 개별 기업으로 구성된 그룹입니다.
                        </p>
                      </AnimationWrapper>
                    </PText>

                    <ATALink>
                      <a
                        href="/History"
                        className="Link_detail"
                        style={{
                          border: "solid black 1px",
                          display: "block",
                          width: "200px",
                          height: "30px",
                          margin: "0 auto",
                          marginTop: "50px",
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        View Details
                      </a>
                    </ATALink>
                  </CompanyStory>
                </div>

                <Content_section_img8
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in"
                >
                  {" "}
                  <img
                    alt="..."
                    className="n-logo"
                    src={require("assets/img/building.jpg")}
                    style={{ width: "100%", height: "100%" }}
                  ></img>
                </Content_section_img8>
              </Content_section_oneline>

              <div></div>
              {/* <div
                className="empty_space_footer"
                style={{ height: "0px" }}
              ></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ATseperate;
