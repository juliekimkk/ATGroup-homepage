import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Strategy.css";

const Strategy = () => {
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
            <h4>Design</h4>

            <div className="company_marketing_detail">
              Docker is an open platform for developing, shipping, and running
              applications. Docker enables you to separate your applications
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
              Design
            </h4>

            <div
              className="company_marketing_detail"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="350"
              data-aos-easing="ease-in-out"
            >
              Apply the latest trend design and for greater user convenience We
              are providing you with an attractive design. for more future
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
              Development
            </h4>

            <div
              className="company_marketing_detail"
              data-aos="fade-up"
              data-aos-delay="900"
              data-aos-duration="350"
              data-aos-easing="ease-in-out"
            >
              Developed for user and administrator purposes, Flexible internal
              system connectivity, re-establishment of infrastructure Implement
              to successfully open.
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
              Image
            </h4>

            <div
              className="company_marketing_detail"
              data-aos="fade-up"
              data-aos-delay="1200"
              data-aos-duration="350"
              data-aos-easing="ease-in-out"
            >
              for richer corporate and product branding We are filming and
              producing digital images and videos. In addition, the content
              business is under way.
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "300px" }}></div>
    </div>
    // </div>
  );
};

export default Strategy;
