import React, { Component } from "react";
import NavBar from "./mainPage/navBar/navBar";
import Hero from "./mainPage/hero/hero";
import AboutMe from "./mainPage/aboutMe/aboutMe";
import ShowCase from "./lab/lab";
import ContactMe from "./contact/contactMe";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Route exact path="/lab" component={ShowCase} />
          <Route exact path="/contact" component={ContactMe} />
          <Route exact path="/about" component={AboutMe} />
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
