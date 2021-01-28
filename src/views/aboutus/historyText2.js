import React, { useEffect, useState } from "react";
import Container from "reactstrap/lib/Container";
import styled, { keyframes } from "styled-components";
import { bounce, bounceInLeft, fadeInUp } from "react-animations";
import Aos from "aos";
import "aos/dist/aos.css";
import DarkFooter from "components/Footers/DarkFooter";

const Content = styled.div`
  position: relative;
  text-align: center;
  font-family: "NotoKR", "San-Serif";
  background: #f8f8f8;
`;
const ATALink = styled.div`
  position: relative;
  width: 140px;
  height: 30px;
  margin: 0 auto;
  &:hover {
    background: #fff;
    color: black;
    font-weight: bold;
    border: 1px solid #fff;
    border-radius: 50px 50px 50px 50px;
  }
`;

const HistoryText2 = () => {
  React.useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      <Content
        style={{
          position: "relative",
          display: "flex",
          height: "500px",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "inline-block",
            margin: "auto",
            width: "100%",
            display: "flex",
            marginTop: "5%",
            marginLeft: "20%",
            marginRight: "20%",

            // justifyContent: "space-between",
          }}
        >
          <div
            style={{ width: "25%" }}
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-delay="200"
            style={{
              backgroundColor: "#fff",
              borderRadius: "100px 100px 100px 100px",
              width: "200px",
              height: "200px",
              position: "relative",
              display: "inline-block",
              margin: "0 auto",
            }}
          >
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/ATA.png")}
              style={{
                width: "100px",
                height: "100px",
                margin: "10px",
                align: "center",
              }}
            ></img>
            <ATALink>
              <a
                href="/ATA"
                className="Link_detail"
                style={{
                  border: "solid black 2px",
                  display: "block",
                  width: "140px",
                  height: "30px",
                  margin: "0 auto",
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                  borderRadius: "50px 50px 50px 50px",
                }}
              >
                바로가기
              </a>
            </ATALink>
          </div>

          <div
            style={{ width: "25%" }}
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
            style={{
              backgroundColor: "#fff",
              borderRadius: "100px 100px 100px 100px",
              width: "200px",
              height: "200px",
              position: "relative",
              margin: "0 auto",
            }}
          >
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/ATB.png")}
              style={{
                width: "100px",
                height: "100px",
                margin: "10px",
                position: "relative",
                marginTop: "15px",
              }}
            ></img>{" "}
            <ATALink>
              <a
                href="/ATB"
                className="Link_detail"
                style={{
                  border: "solid black 2px",
                  display: "block",
                  width: "140px",
                  height: "30px",
                  margin: "0 auto",
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                  borderRadius: "50px 50px 50px 50px",
                }}
              >
                바로가기
              </a>
            </ATALink>
          </div>
          <div
            style={{ width: "25%" }}
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
            style={{
              backgroundColor: "#fff",
              borderRadius: "100px 100px 100px 100px",
              width: "200px",
              height: "200px",
              position: "relative",
              margin: "0 auto",
            }}
          >
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/ATC.png")}
              style={{ width: "100px", height: "100px", margin: "10px" }}
            ></img>{" "}
            <ATALink>
              <a
                href="/ATC"
                className="Link_detail"
                style={{
                  border: "solid black 2px",
                  display: "block",
                  width: "140px",
                  height: "30px",
                  margin: "0 auto",
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                  borderRadius: "50px 50px 50px 50px",
                }}
              >
                바로가기
              </a>
            </ATALink>
          </div>
          {/* <div
            style={{ width: "25%" }}
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
            style={{
              backgroundColor: "#fff",
              borderRadius: "100px 100px 100px 100px",
              width: "200px",
              height: "200px",
              position: "relative",
              margin: "0 auto",
            }}
          >
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/ATN.png")}
              style={{ width: "100px", height: "100px", margin: "10px" }}
            ></img>{" "}
            <ATALink>
              <a
                href="/ATB"
                className="Link_detail"
                style={{
                  border: "solid black 2px",
                  display: "block",
                  width: "140px",
                  height: "30px",
                  margin: "0 auto",
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                  borderRadius: "50px 50px 50px 50px",
                }}
              >
                바로가기 >
              </a>
            </ATALink>
          </div> */}
          <div style={{ height: "300px" }}></div>
        </div>
      </Content>
      <DarkFooter></DarkFooter>
    </>
  );
};

export default HistoryText2;
