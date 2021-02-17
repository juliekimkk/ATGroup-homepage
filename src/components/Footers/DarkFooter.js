/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import styled from "styled-components";

const FooterTotal = styled.div`
  height: 100px;
`;
const Underdivier = styled.div`
  height: 1px;
  border: 0.5px solid #3f3f40;
  margin-left: 0;
  margin-top: 1%;
  position: relative;
`;

const Info = styled.div`
  margin-top: 0px;

  text-align: center;
  position: relative;
  margin: 0 auto;
`;

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <FooterTotal>
        <Info>
          주소 : 서울특별시 금천구 가산디지털1로 75-15 1011~1012호
          &nbsp;&nbsp;|&nbsp;&nbsp;전화 : 02-6956-8800
          &nbsp;&nbsp;|&nbsp;&nbsp;이메일 : info@atg.camp
        </Info>
        <Underdivier></Underdivier>

        <Container>
          <div
            style={{
              display: "table",
              margin: "0 auto",
              marginTop: "20px",
              tableLayout: "fixed",
            }}
          >
            <nav>
              <ul
                style={{
                  textAlign: "center",
                  display: "table-cell",
                }}
              >
                <li>Creative by AT GROUP</li> &nbsp;&nbsp;&nbsp;
                <li>About Us</li>&nbsp;
                <li>Blog</li>&nbsp;&nbsp;
              </ul>
            </nav>
            <div className="copyright" id="copyright">
              © {new Date().getFullYear()}, Designed by Invision . Coded by{" "}
              Copyright © 1996-2017 AT GROUP. All Rights reserved.
            </div>
          </div>
        </Container>
      </FooterTotal>
    </footer>
  );
}

export default DarkFooter;
