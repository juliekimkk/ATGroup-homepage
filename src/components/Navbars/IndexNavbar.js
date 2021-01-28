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
  UncontrolledTooltip,
} from "reactstrap";

import styled from "styled-components";

const LogoText = styled.div`
  color: black;
  font-size: 30px;
  font-weight: 400;
`;

function IndexNavbar() {
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
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
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
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
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
                  <DropdownItem href="/history" target="">
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    History
                  </DropdownItem>
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
                  <DropdownItem href="/atgroup.netlify.app/ATA" target="">
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    ATA
                  </DropdownItem>
                  <DropdownItem href="/ATB" target="">
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    ATB
                  </DropdownItem>
                  <DropdownItem href="/ATC" target="">
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    ATC
                  </DropdownItem>
                  {/* <DropdownItem href="/ATN" target="">
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    ATN
                  </DropdownItem> */}
                </DropdownMenu>
              </UncontrolledDropdown>
              {/*세번째 영역 */}
              <NavItem>
                <Link to="/ATA">
                  <Button
                    className="nav-link btn-neutral"
                    color="info"
                    target=""
                  >
                    <p>ENGLISH</p>
                  </Button>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
