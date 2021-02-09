import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
  UncontrolledTooltip,
} from "reactstrap";

import styled from "styled-components";

const LogoText = styled.div`
  color: black;
  font-size: 30px;
  font-weight: 400;
`;

function IndexNavbarKr() {
  const CurrentPath = window.location.pathname;
  console.log(window.location.pathname);
  console.log(window.scrollY);
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  React.useEffect(() => {
    //렌더링 될때마다 실행 되는 곳.(네비바 색깔)
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 500 ||
        document.body.scrollTop > 500
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 501 ||
        document.body.scrollTop < 501
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);

    function handleClick(e) {
      e.preventDefault();
      console.log("The link was clicked.");
    }

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
      // window.scroll({ top: 700, left: 0, behavior: "smooth" });
    };
  });

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}

      <Container>
        <div className="navbar-translate">
          <NavbarBrand href="/index" target="" id="navbar-brand">
            <LogoText
              style={{
                color: CurrentPath === "/index" ? "black" : null,
                fontWeight: "bold",
              }}
            >
              AT GROUP
            </LogoText>
          </NavbarBrand>
        </div>
        <Collapse className="justify-content-end" isOpen={collapseOpen} navbar>
          <Nav navbar>
            {/* 어바웃어스 영역*/}
            <UncontrolledDropdown nav>
              <DropdownToggle
                style={
                  navbarColor !== ""
                    ? {
                        textShadow: "1px 1px 1px black, 1px 1px 1px black",
                      }
                    : null
                }
                caret
                color="default"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="now-ui-icons design_app mr-1"></i>
                <p>About Us</p>
              </DropdownToggle>
              <DropdownMenu>
                <Link to="AppKr/HistoryKr" style={{ color: "black" }}>
                  <DropdownItem>history</DropdownItem>
                </Link>
                {/* <DropdownItem href="/vision" target="">
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    Vision
                  </DropdownItem> */}
              </DropdownMenu>
            </UncontrolledDropdown>

            {/* 비지니스 영역*/}
            <UncontrolledDropdown nav>
              <DropdownToggle
                style={
                  navbarColor !== ""
                    ? {
                        textShadow: "1px 1px 1px black, 1px 1px 1px black",
                      }
                    : null
                }
                caret
                color="default"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="now-ui-icons design_app mr-1"></i>
                <p>Business</p>
              </DropdownToggle>
              <DropdownMenu>
                <Link to="/ATAKr">
                  <DropdownItem>ATAKr</DropdownItem>
                </Link>

                <Link to="/ATBKr" style={{ color: "black" }}>
                  <DropdownItem>ATB</DropdownItem>
                </Link>

                <Link to="/ATCKr" style={{ color: "black" }}>
                  <DropdownItem>ATC</DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>

            {/* 패밀리맵 영역*/}
            <UncontrolledDropdown nav>
              <DropdownToggle
                style={
                  navbarColor !== ""
                    ? {
                        textShadow: "1px 1px 1px black, 1px 1px 1px black",
                      }
                    : null
                }
                caret
                color="default"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="now-ui-icons design_app mr-1"></i>
                <p>Family Map</p>
              </DropdownToggle>
              <DropdownMenu>
                <div
                  style={{
                    width: "600px",
                    height: "200px",
                    position: "relative",
                    display: "flex",
                  }}
                >
                  <div
                    className="corp"
                    style={{
                      display: "flex",
                      width: "200px",
                      height: "210px",
                      // padding: "0 30px 10px 30px",
                      borderLeft: "1px solid #ddd",
                    }}
                  >
                    <ul>
                      <div
                        style={{
                          display: "flex",
                          position: "relative",
                          marginRight: "7px",
                        }}
                      >
                        <img
                          alt="..."
                          className="n-logo"
                          src={require("assets/img/ATAgray.png")}
                          style={{
                            width: "30px",
                            height: "30px",
                            // margin: "10px",
                          }}
                        ></img>
                        <h5>ATA</h5>
                      </div>

                      <div
                        style={{
                          borderBottom: "2px solid #0075c2",
                          width: "125px",
                        }}
                      ></div>
                      <li
                        style={{
                          padding: "14px 10px 14px 0",
                        }}
                      >
                        <Link to="ATA">
                          <div style={{ color: "black" }}>건설부문</div>
                        </Link>
                      </li>
                      <li
                        style={{
                          padding: "14px 10px 14px 0",
                          borderTop: "1px dotted #cbcbcb",
                        }}
                      >
                        <Link to="ATA">
                          <div style={{ color: "black" }}>건설부문</div>
                        </Link>
                      </li>
                      <li
                        style={{
                          padding: "14px 10px 14px 0",
                          borderTop: "1px dotted #cbcbcb",
                        }}
                      >
                        <Link to="ATA">
                          <div style={{ color: "black" }}>건설부문</div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div
                    className="corp"
                    style={{
                      display: "flex",
                      width: "200px",
                      height: "210px",
                      // padding: "0 30px 10px 30px",
                      borderLeft: "1px solid #ddd",
                    }}
                  >
                    <ul>
                      <div style={{ display: "flex", position: "relative" }}>
                        <img
                          alt="..."
                          className="n-logo"
                          src={require("assets/img/ATB.png")}
                          style={{
                            width: "30px",
                            height: "25px",
                            marginRight: "7px",
                            // margin: "10px",
                          }}
                        ></img>
                        <h5>ATB</h5>
                      </div>
                      <div
                        style={{
                          borderBottom: "2px solid #0075c2",
                          width: "125px",
                        }}
                      ></div>
                      <li
                        style={{
                          padding: "14px 10px 14px 0",
                        }}
                      >
                        <Link to="ATA">
                          <div style={{ color: "black" }}>건설부문</div>
                        </Link>
                      </li>
                      <li
                        style={{
                          padding: "14px 10px 14px 0",
                          borderTop: "1px dotted #cbcbcb",
                        }}
                      >
                        <Link to="ATA">
                          <div style={{ color: "black" }}>건설부문</div>
                        </Link>
                      </li>
                      <li
                        style={{
                          padding: "14px 10px 14px 0",
                          borderTop: "1px dotted #cbcbcb",
                        }}
                      >
                        <Link to="ATA">
                          <div style={{ color: "black" }}>건설부문</div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div
                    className="corp"
                    style={{
                      display: "flex",
                      width: "200px",
                      height: "210px",
                      // padding: "0 30px 10px 30px",
                      borderLeft: "1px solid #ddd",
                    }}
                  >
                    <ul>
                      <div
                        style={{
                          display: "flex",
                          position: "relative",
                          marginRight: "7px",
                        }}
                      >
                        <img
                          alt="..."
                          className="n-logo"
                          src={require("assets/img/ATC.png")}
                          style={{
                            width: "30px",
                            height: "30px",
                            // margin: "10px",
                          }}
                        ></img>
                        <h5>ATC</h5>
                      </div>
                      <div
                        style={{
                          borderBottom: "2px solid #0075c2",
                          width: "125px",
                        }}
                      ></div>
                      <li
                        style={{
                          padding: "14px 10px 14px 0",
                        }}
                      >
                        <Link to="ATA">
                          <div style={{ color: "black" }}>건설부문</div>
                        </Link>
                      </li>
                      <li
                        style={{
                          padding: "14px 10px 14px 0",
                          borderTop: "1px dotted #cbcbcb",
                        }}
                      >
                        <Link to="ATA">
                          <div style={{ color: "black" }}>건설부문</div>
                        </Link>
                      </li>
                      <li
                        style={{
                          padding: "14px 10px 14px 0",
                          borderTop: "1px dotted #cbcbcb",
                        }}
                      >
                        <Link to="ATA">
                          <div style={{ color: "black" }}>건설부문</div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </DropdownMenu>
            </UncontrolledDropdown>

            {/*세번째 영역 */}
            <Link to="/index">
              <Button
                className="nav-link btn-neutral"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  marginRight: "5px",
                }}
              >
                EN
              </Button>
            </Link>

            <Link to="/index">
              <Button
                className="nav-link btn-neutral"
                style={{ color: "black", fontWeight: "bold" }}
              >
                CN
              </Button>
            </Link>
            {/* 
              <NavItem>
                <Link to="/index">
                  <Button
                    className="nav-link btn-neutral"
                    color="info"
                    target=""
                  >
                    <p>ENGLISH</p>
                  </Button>
                </Link>
              </NavItem> */}
          </Nav>
        </Collapse>
      </Container>
    </>
  );
}

export default IndexNavbarKr;
