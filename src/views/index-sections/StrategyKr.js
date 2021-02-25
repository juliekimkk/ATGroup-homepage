import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Strategy.css";

const Strategykr = () => {
  React.useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div>
      <div className="marketing" id="main">
        {/*첫번째 */}
        <div className="marketing_second_onebox">
          <div id="onebyone">
            <img
              className="clickimage"
              src={require("assets/img/1.5x/handout.png")}
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="350"
              data-aos-easing="ease-in-out"
              style={{ width: "auto" }}
            ></img>
            <h4>전략 · 기획</h4>

            <div className="company_marketing_detail">
              사전 인터뷰, 요구사항 분석 단계를 통해 고객사의 프로젝트를
              파악하고, 시사점을 도출해 프로젝트 전략과
            </div>
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
        <div className="marketing_second_onebox">
          <div id="onebyone">
            <img
              className="clickimage"
              src={require("assets/img/1.5x/design.png")}
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="350"
              data-aos-easing="ease-in-out"
              style={{ width: "auto" }}
            ></img>
            <h4
              data-aos="fade-down"
              data-aos-delay="600"
              data-aos-duration="350"
              data-aos-easing="ease-in-out"
            >
              디자인
            </h4>

            <div
              className="company_marketing_detail"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="350"
              data-aos-easing="ease-in-out"
            >
              최신 트렌드 디자인을 적용 및 사용자 편의성을 증대할 수 있는
              매력적인 디자인을 제공해 드리고 있습니다.
            </div>
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
      </div>

      <div className="marketing2" id="main">
        {/*세번째 */}
        <div className="marketing_second_onebox">
          <div id="onebyone">
            <img
              className="clickimage"
              src={require("assets/img/1.5x/widget.png")}
              data-aos="fade-up"
              data-aos-delay="900"
              data-aos-duration="350"
              data-aos-easing="ease-in-out"
              style={{ width: "auto" }}
            ></img>
            <h4
              data-aos="fade-up"
              data-aos-delay="900"
              data-aos-duration="350"
              data-aos-easing="ease-in-out"
            >
              개발 · 구현
            </h4>

            <div
              className="company_marketing_detail"
              data-aos="fade-up"
              data-aos-delay="900"
              data-aos-duration="350"
              data-aos-easing="ease-in-out"
            >
              사용자 및 관리자 목적 중심으로 개발하며, 유연한 내부 시스템 연계,
              인프라 재정립을 통해 성공적으로 오픈할 수 있도록 구현합니다.
            </div>
          </div>
        </div>
        {/*네번째 */}
        <div className="marketing_second_onebox">
          <div id="onebyone">
            <img
              className="clickimage"
              src={require("assets/img/1.5x/video.png")}
              data-aos="fade-up"
              data-aos-delay="1200"
              data-aos-duration="350"
              data-aos-easing="ease-in-out"
              style={{ width: "auto" }}
            ></img>
            <h4
              data-aos="fade-up"
              data-aos-delay="1200"
              data-aos-duration="350"
              data-aos-easing="ease-in-out"
            >
              영상 · 이미지
            </h4>

            <div
              className="company_marketing_detail"
              data-aos="fade-up"
              data-aos-delay="1200"
              data-aos-duration="350"
              data-aos-easing="ease-in-out"
            >
              보다 풍부한 기업 및 제품 브랜딩을 위한 디지털 이미지 및 영상물을
              촬영, 제작하고 있습니다. 더불어 컨텐츠 사업또한 진행중입니다
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "300px" }}></div>
    </div>
    // </div>
  );
};

export default Strategykr;
