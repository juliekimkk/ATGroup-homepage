import React, { useEffect, useState } from "react";
import Container from "reactstrap/lib/Container";
import styled, { keyframes } from "styled-components";
import { bounce, bounceInLeft, fadeInUp } from "react-animations";
import Aos from "aos";
import "aos/dist/aos.css";
import Strategy from "views/index-sections/Strategy";
import HistoryText2 from "./historyText2";
import "./historyText.css";

const bounceAnimation = keyframes`${fadeInUp}`;

const HistoryTextkr = () => {
  React.useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <div class="footer" style={{ height: "1500px", padding: "0px" }}>
        {/* <div style={{ height: "200px" }}></div> */}
        <div className="total_territory">
          <div style={{ height: "200px" }}></div>
          {/*첫번째 */}
          <div
            className="total_territory_inner"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="500"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
          >
            <img
              className="clickimage"
              src={require("assets/img/purchasing.png")}
              style={{
                width: "10%",
                // display: "block",
                align: "center",
                justifyContent: "center",
                position: "relative",
                marginBottom: "8px",
              }}
            ></img>
            <h4
              style={{
                // display: "block",
                height: "42px",
                margin: "0",
                fontWeight: "600",
                fontSize: "35px",
                textAlign: "center",
                transform: "translate(50%)",
                width: "50%",
              }}
            >
              HISTORY
            </h4>

            <div className="company_introduction_text">
              ​​Based on a trading company in the 70s, VOGO Group constructed
              Inchon Steal Plant and later focused on foreign trade. In the
              1990s, we operated IT KOSDAQ Company and Solar Energy related
              KOSPI Company. VOGO is headquartered in Hong Kong, has offices in
              Singapore and Korea specializing in Investment & Development and
              Trades a range of Natural Resource commodities on its global
              platform. These typically include a range of Nickel, Coal, Metals,
              Fuel oils and related products. We always strive to maintain
              brilliance in our work, to communicate and share our good
              experience and better solutions to our partners around the world,
              and this is creating the base with fundamental strength in our
              business.
            </div>
          </div>

          {/*두번째 */}
          <div
            className="total_territory_inner"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="500"
            data-aos-delay="600"
            data-aos-easing="ease-in-out"
          >
            <img
              className="clickimage"
              src={require("assets/img/vision.png")}
              style={{
                width: "10%",
                // display: "block",
                align: "center",
                justifyContent: "center",
                position: "relative",
                marginBottom: "8px",
              }}
            ></img>
            <h4
              style={{
                // display: "block",
                height: "42px",
                margin: "0",
                fontWeight: "600",
                fontSize: "35px",
                textAlign: "center",
                transform: "translate(50%)",
                width: "50%",
              }}
            >
              VISION
            </h4>

            <div className="company_introduction_text">
              VOGO is a leading Investor and Developer in the world's Natural
              resource and mining sectors, showing unparalleled development,
              operational and financial expertise in mining. Our unique
              strategy, formed in the 1970s, is to foster industry-leading
              technologies and companies, regardless of market environment, to
              actively manage the value of each investment and the development
              of each. With our team's extensive experience in the natural
              resource sector, we are focusing on the production and
              distribution of the most valuable products in the future. Focusing
              on sustainable and responsible development, we work closely with
              the communities, governments and global finance we operate.
              Currently VOGO invests in the production facilities and
              infrastructure of High Value Added Products such as Nickel which
              the Secondary Battery Base Materials, and Ferrosilicon which use
              in Ironworks, and more. We are investing on the World's First and
              Sole Innovative Eco-friendly Hydro Smelting Technology and
              Developing plant in our mining mouth in Indonesia and Kazakhstan,
              to lead Global Industry by focusing on the production and
              distribution business of Future High Value Raw Materials.
            </div>
          </div>
        </div>
        <div style={{ height: "300px" }}></div>
      </div>
      <HistoryText2></HistoryText2>
    </>
  );
};

export default HistoryTextkr;
