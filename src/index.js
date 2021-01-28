/*

=========================================================
* Now UI Kit React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2020 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
// pages for this kit
import App from "App.js";
import NucleoIcons from "views/NucleoIcons.js";
// import LoginPage from "views/examples/LoginPage.js";
// import LandingPage from "views/examples/LandingPage.js";
// import ProfilePage from "views/examples/ProfilePage.js";

import History from "views/aboutus/history";
// import Vision from "views/aboutus/vision";
import ATA from "views/business/ATA";
import ATB from "views/business/ATB";
import ATC from "views/business/ATC";
import ATN from "views/business/ATN";
import reportWebVitals from "./reportWebVitals";
import HistoryText from "views/aboutus/historyText";
import HistoryText2 from "views/aboutus/historyText2";
import ATseperate from "views/index-sections/ATseperate";
import BasicElements from "views/index-sections/BasicElements";
import CarouselSection from "views/index-sections/Carousel";
import CompleteExamples from "views/index-sections/CompleteExamples";
import Content from "views/index-sections/Content";
import Download from "views/index-sections/Download";
import Examples from "views/index-sections/Examples";
import Footer from "views/index-sections/Footer";
import HeaderText from "views/index-sections/HeaderText";
import Javascript from "views/index-sections/Javascript";
import Navbars from "views/index-sections/Navbars";
import Notifications from "views/index-sections/Notifications";
import PaginationSection from "views/index-sections/Pagination";
import SignUp from "views/index-sections/SignUp";
import Strategy from "views/index-sections/Strategy";
import Tabs from "views/index-sections/Tabs";
import Typography from "views/index-sections/Typography";
import DarkFooter from "components/Footers/DarkFooter";
import DefaultFooter from "components/Footers/DefaultFooter";
import TransparentFooter from "components/Footers/TransparentFooter";
import IndexHeader from "components/Headers/IndexHeader";
import LandingPageHeader from "components/Headers/LandingPageHeader";
import ProfilePageHeader from "components/Headers/ProfilePageHeader";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import IndexNavbar from "components/Navbars/IndexNavbar";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/App" render={(props) => <App {...props} />} />

      <Route path="/history" render={(props) => <History {...props} />} />
      <Route path="/ATA" render={(props) => <ATA {...props} />} />
      <Route path="/ATB" render={(props) => <ATB {...props} />} />
      <Route path="/ATC" render={(props) => <ATC {...props} />} />

      <Route
        path="/historyText"
        render={(props) => <HistoryText {...props} />}
      />
      <Route
        path="/historyText2"
        render={(props) => <HistoryText2 {...props} />}
      />
      <Route path="/ATN" render={(props) => <ATN {...props} />} />
      <Route path="/ATseperate" render={(props) => <ATseperate {...props} />} />
      <Route
        path="/BasicElements"
        render={(props) => <BasicElements {...props} />}
      />
      <Route
        path="/Carousel"
        render={(props) => <CarouselSection {...props} />}
      />
      <Route
        path="/completeExamples"
        render={(props) => <CompleteExamples {...props} />}
      />
      <Route path="/Content" render={(props) => <Content {...props} />} />
      <Route path="/Download" render={(props) => <Download {...props} />} />
      <Route path="/Examples" render={(props) => <Examples {...props} />} />
      <Route path="/Footer" render={(props) => <Footer {...props} />} />
      <Route path="/HeaderText" render={(props) => <HeaderText {...props} />} />
      <Route path="/Javascript" render={(props) => <Javascript {...props} />} />
      <Route path="/Navbars" render={(props) => <Navbars {...props} />} />
      <Route
        path="/Notifications"
        render={(props) => <Notifications {...props} />}
      />
      <Route
        path="/NucleoIcons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/Pagination"
        render={(props) => <PaginationSection {...props} />}
      />
      <Route path="/SignUp" render={(props) => <SignUp {...props} />} />
      <Route path="/Strategy" render={(props) => <Strategy {...props} />} />
      <Route path="/Tabs" render={(props) => <Tabs {...props} />} />

      <Route path="/Typography" render={(props) => <Typography {...props} />} />
      <Route
        path="/NucleoIcons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/reportWebVitals"
        render={(props) => <reportWebVitals {...props} />}
      />
      <Route path="/DarkFooter" render={(props) => <DarkFooter {...props} />} />

      <Route
        path="/DefaultFooter"
        render={(props) => <DefaultFooter {...props} />}
      />

      <Route
        path="/TransparentFooter"
        render={(props) => <TransparentFooter {...props} />}
      />
      <Route
        path="/IndexHeader"
        render={(props) => <IndexHeader {...props} />}
      />
      <Route
        path="/LandingPageHeader"
        render={(props) => <LandingPageHeader {...props} />}
      />
      <Route
        path="/ProfilePageHeader"
        render={(props) => <ProfilePageHeader {...props} />}
      />
      <Route
        path="/ExamplesNavbar"
        render={(props) => <ExamplesNavbar {...props} />}
      />
      <Route
        path="/IndexNavbar"
        render={(props) => <IndexNavbar {...props} />}
      />

      {/* 
        <Route exact path="/history" component={History} />
        <Route exact path="/vision" component={Vision} />

        <Route exact path="/ATA" component={ATA} />
        <Route exact path="/ATB" component={ATB} />
        <Route exact path="/ATC" component={ATC} />
        <Route exact path="/ATN" component={ATN}></Route> */}
      {/* 
      <Redirect path="*" to="/" /> */}
      <Redirect from="/" to="/App" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();
