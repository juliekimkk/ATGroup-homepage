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
        <div
          className="marketing"
          style={{
            fontFamily: "Helvetica Neue, Arial, sans-serif",
            maxWidth: "1600px",
            margin: "0 auto",
          }}
        >
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
          <div style={{ height: "200px" }}></div>
          {/*첫번째 */}
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
            >
              {/* <img
                className="clickimage"
                src={require("assets/img/1.5x/handout.png")}
                style={{ width: "10%" }}
              ></img> */}
              전략 · 기획
            </h4>

            <div
              className="company_marketing_detail"
              style={{
                height: "130px",
                textAlign: "center",
                marginTop: "20px",
                color: "#878890",
              }}
            >
              사전 인터뷰, 요구사항 분석 단계를 통해 <br />
              고객사의 프로젝트를 파악하고,
              <br /> 시사점을 도출해 프로젝트 전략과
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
              디자인
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
              최신 트렌드 디자인을 적용 및 <br />
              사용자 편의성을 증대할 수 있는 <br />
              매력적인 디자인을 제공해 드리고 있습니다.
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
              개발 · 구현
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
              사용자 및 관리자 목적 중심으로 개발하며, <br />
              유연한 내부 시스템 연계, 인프라 재정립을 통해
              <br />
              성공적으로 오픈할 수 있도록 구현합니다. <br />
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
              영상 · 이미지
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
              보다 풍부한 기업 및 제품 브랜딩을 위한 <br />
              디지털 이미지 및 영상물을 촬영, 제작하고 있습니다.
              <br />
              더불어 컨텐츠 사업또한 진행중입니다
            </div>
          </div>
        </div>
        <div style={{ height: "300px" }}></div>
      </div>
    </div>
  );
};

export default Strategy;
