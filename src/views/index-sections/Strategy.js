import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Strategy = () => {
  React.useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div>
      <div class="footer" style={{ height: "700px", padding: "0px" }}>
        {/* <div style={{ height: "200px" }}></div> */}
        <div className="marketing" id="main">
          {/* <h2
            style={{
              fontWeight: "500",
              lineHeight: "1.4",
              fontSize: "33px",
              textAlign: "center",
              fontFamily: "NotoKR San-Serif",
            }}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="350"
            data-aos-easing="ease-in-out"
          >
            프로젝트별 명쾌한 자사, 경쟁사 분석 및 <br />
            IT 트렌드 반영을 통해 고객사의 문제를 해결하고, <br />
            비지니스 성장을 돕고 있습니다.
          </h2> */}
          <div id="squareTop"></div>
          {/*첫번째 */}
          <div
            className="marketing_second_onebox"
            id="onebyone"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="350"
            data-aos-easing="ease-in-out"
          >
            <img
              className="clickimage"
              src={require("assets/img/1.5x/handout.png")}
              style={{
                width: "10%",
                // display: "block",
                align: "center",
                justifyContent: "center",
                position: "relative",
                marginBottom: "8px",
              }}
            ></img>
            <b id="logoname">
              {/* <img
                className="clickimage"
                src={require("assets/img/1.5x/handout.png")}
                style={{ width: "10%" }}
              ></img> */}
              Strategy
            </b>

            <div
              className="company_marketing_detail"
              style={{
                height: "130px",
                textAlign: "center",
                marginTop: "20px",
                color: "#878890",
              }}
            >
              Pre-interview, requirement analysis steps Identify your client's
              projects.
              <br /> Derive Implications for Project Strategy and Korean Version
            </div>
            <div
              style={{
                display: "block;",
                width: "1px",
                backgroundColor: "#eee",
                position: "absolute",
                top: "0",
                bottom: "0",
                left: "100%",
              }}
            ></div>
          </div>

          {/*두번째 */}
          <div
            className="marketing_second_onebox"
            style={{
              // border: "solid green 1px",
              position: "relative",
              display: "inline-block",
              margin: "0 auto",
              // padding: "1%",
              width: "25%",
              textAlign: "center",
            }}
          >
            <img
              className="clickimage"
              src={require("assets/img/1.5x/design.png")}
              style={{
                width: "10%",
                // display: "block",
                align: "center",
                justifyContent: "center",
                position: "relative",
                marginBottom: "8px",
              }}
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="350"
              data-aos-easing="ease-in-out"
            ></img>
            <h4
              style={{
                // display: "block",
                height: "42px",
                margin: "0",
                fontWeight: "600",
                fontSize: "27px",
                textAlign: "center",

                transform: "translate(50%)",
                width: "50%",
              }}
              data-aos="fade-down"
              data-aos-delay="600"
              data-aos-duration="350"
              data-aos-easing="ease-in-out"
            >
              Design
            </h4>

            <div
              className="company_marketing_detail"
              style={{
                height: "130px",
                textAlign: "center",
                marginTop: "20px",
                color: "#878890",
              }}
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="350"
              data-aos-easing="ease-in-out"
            >
              Apply the latest trend design and for greater user convenience We
              are providing you with an attractive design.
              <br />
              for more future
            </div>
            <div
              style={{
                display: "block;",
                width: "1px",
                backgroundColor: "#eee",
                position: "absolute",
                top: "0",
                bottom: "0",
                left: "100%",
              }}
            ></div>
          </div>

          {/*세번째 */}
          <div
            className="marketing_second_onebox"
            style={{
              // border: "solid green 1px",
              position: "relative",
              display: "inline-block",
              margin: "0 auto",
              // padding: "1%",
              width: "25%",
              textAlign: "center",
            }}
          >
            <img
              className="clickimage"
              src={require("assets/img/1.5x/widget.png")}
              style={{
                width: "10%",
                // display: "block",
                align: "center",
                justifyContent: "center",
                position: "relative",
                marginBottom: "8px",

                // margin: "0 auto",
              }}
              data-aos="fade-up"
              data-aos-delay="900"
              data-aos-duration="350"
              data-aos-easing="ease-in-out"
            ></img>
            <h4
              style={{
                height: "42px",
                margin: "0",
                fontWeight: "700",
                fontSize: "27px",
                textAlign: "center",
                // backgroundColor: "#F1F1F1",
                transform: "translate(50%)",
                width: "50%",
              }}
              data-aos="fade-up"
              data-aos-delay="900"
              data-aos-duration="350"
              data-aos-easing="ease-in-out"
            >
              Development
            </h4>

            <div
              className="company_marketing_detail"
              style={{
                height: "130px",
                textAlign: "center",
                marginTop: "20px",
                color: "#878890",
              }}
              data-aos="fade-up"
              data-aos-delay="900"
              data-aos-duration="350"
              data-aos-easing="ease-in-out"
            >
              Developed for user and administrator purposes, Flexible internal
              system connectivity, re-establishment of infrastructure
              <br />
              Implement to successfully open. <br />
            </div>
            <div
              style={{
                display: "block;",
                width: "1px",
                backgroundColor: "#eee",
                position: "absolute",
                top: "0",
                bottom: "0",
                left: "100%",
              }}
            ></div>
          </div>
          {/*네번째 */}
          <div
            className="marketing_second_onebox"
            style={{
              // border: "solid green 1px",
              position: "relative",
              display: "inline-block",
              margin: "0 auto",
              // padding: "1%",
              width: "25%",
              textAlign: "center",
            }}
          >
            <img
              className="clickimage"
              src={require("assets/img/1.5x/video.png")}
              style={{
                width: "10%",
                // display: "block",
                align: "center",
                justifyContent: "center",
                position: "relative",
                marginBottom: "8px",

                // margin: "0 auto",
              }}
              data-aos="fade-up"
              data-aos-delay="1200"
              data-aos-duration="350"
              data-aos-easing="ease-in-out"
            ></img>
            <h4
              style={{
                display: "block",
                height: "42px",
                margin: "0",
                fontWeight: "600",
                fontSize: "27px",
                textAlign: "center",
                // backgroundColor: "rgb(241 241 241 / 73%)",
                transform: "translate(50%)",
                width: "50%",
              }}
              data-aos="fade-up"
              data-aos-delay="1200"
              data-aos-duration="350"
              data-aos-easing="ease-in-out"
            >
              Image
            </h4>

            <div
              className="company_marketing_detail"
              style={{
                height: "130px",
                textAlign: "center",
                marginTop: "20px",
                color: "#878890",
              }}
              data-aos="fade-up"
              data-aos-delay="1200"
              data-aos-duration="350"
              data-aos-easing="ease-in-out"
            >
              for richer corporate and product branding We are filming and
              producing digital images and videos.
              <br />
              In addition, the content business is under way.
            </div>
          </div>
        </div>
        <div style={{ height: "300px" }}></div>
      </div>
    </div>
  );
};

export default Strategy;
