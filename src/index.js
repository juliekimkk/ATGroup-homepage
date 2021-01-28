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
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
// import LoginPage from "views/examples/LoginPage.js";
// import LandingPage from "views/examples/LandingPage.js";
// import ProfilePage from "views/examples/ProfilePage.js";

import History from "views/aboutus/history";
import Vision from "views/aboutus/vision";
import ATA from "views/business/ATA";
import ATB from "views/business/ATB";
import ATC from "views/business/ATC";
import ATN from "views/business/ATN";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />

        <Route path="/history" render={(props) => <History {...props} />} />
        <Route path="/ATA" render={(props) => <ATA {...props} />} />
        <Route path="/ATB" render={(props) => <ATB {...props} />} />
        <Route path="/ATC" render={(props) => <ATC {...props} />} />
        {/* 
        <Route exact path="/history" component={History} />
        <Route exact path="/vision" component={Vision} />

        <Route exact path="/ATA" component={ATA} />
        <Route exact path="/ATB" component={ATB} />
        <Route exact path="/ATC" component={ATC} />
        <Route exact path="/ATN" component={ATN}></Route> */}

        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();
