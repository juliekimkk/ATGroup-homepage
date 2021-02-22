/*global kakao */
import React, { useEffect } from "react";
import styled from "styled-components";
import "./kakaomap.css";

const Location = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  margin-bottom: 100px;
`;

// const script = document.createElement("script");
// script.async = true;
// script.src = "/km.js?apikey=18df447c17187c3c03e9cfaa7b8c84f6";
// //  alert(script.src);
// document.head.appendChild(script);
// alert(script.innerText);

export default function GenerateMap() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    /*
    const script = document.createElement("script");
    script.async = true;
    script.src = "/km.js?apikey=18df447c17187c3c03e9cfaa7b8c84f6";
    document.head.appendChild(script);
    */

    let container = document.getElementById("map");
    // alert(window);
    let options = {
      center: new kakao.maps.LatLng(37.47226318266345, 126.88421079198216),
      level: 5,
    };
    // const script = document.createElement("script");
    // script.async = true;
    // script.src =
    //   "/km.js?appkey=18df447c17187c3c03e9cfaa7b8c84f6&autoload=false";

    //map
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(
      37.62197524055062,
      127.16017523675508
    );

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: map.getCenter(),
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  };

  return (
    <div id="margintop">
      <p>LOCATION</p>
      <div id="bottom"></div>
      <div
        style={{
          display: "block",
          position: "relative",
          justifyContent: "center",
        }}
      >
        <div id="map"></div>
      </div>
    </div>
  );
}
