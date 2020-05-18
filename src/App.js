import React, { Component } from "react";
import NavBar from "./mainPage/navBar/navBar";
import Hero from "./mainPage/hero/hero";
import AboutMe from "./mainPage/aboutMe/aboutMe";
import ShowCase from "./mainPage/showCase/ShowCase";
import CssLab from "./lab/CssLab/lab";
import ContactMe from "./contact/contactMe";
import Resume from "./resume/resume";
// import LendingTree from "./lab/lendingTree";


//css labs
import CssLoader from "./lab/CssLab/loader/cssLoader";
import Hearts from "./lab/CssLab/hearts/hearts";
import Circle from "./lab/CssLab/circle/circle";
import Meltaway from "./lab/CssLab/meltaway/meltaway";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Route exact path="/lab" component={CssLab} />
          <Route exact path="/contact" component={ContactMe} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/resume" component={Resume} />
          {/* <Route exact path="/lendingTree" component={LendingTree} /> */}
          <Route exact path="/lab/css-loader" component={CssLoader} />
          <Route exact path="/lab/hearts" component={Hearts} />
          <Route exact path="/lab/circle" component={Circle} />
          <Route exact path="/lab/meltaway" component={Meltaway} />
          
          <Route
            exact
            path="/"
            component={() => {
              return (
                <React.Fragment>
                  <Hero />
                  <ShowCase />
                </React.Fragment>
              );
            }}
          />
        </Router>
      </div>
    );
  }
}

export default App;
