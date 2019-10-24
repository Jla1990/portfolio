import React, { Component } from "react";
import LT from "../assets/pictures/Lendingtree/lendingtreeLogo.png";
import Gap from "../assets/pictures/Gap/gapLogo.svg";
import Amp from "../assets/pictures/Lendingtree/ampproject-official.svg";
import Keyboard from "../assets/pictures/keyboard.png";

class Showcase extends Component {
  render() {
    return (
      <div className="lab">
        <ul>
          <li>
            <a href="/lendingtree">
              <div className="placeholder">
                <span>
                  LendingTree
                  <br />
                  Rebuild & Reskin
                </span>

                <img src={LT} className="img-responsive lt" />
              </div>
            </a>
          </li>
          <li>
            <div className="placeholder">
              <span>
                Gap Inc.
                <br />
                Rebuild & Reskin
              </span>
              <img src={Gap} className="img-responsive gap" />
            </div>
          </li>
          <li>
            <div className="placeholder">
              <span>
                AMP by Google
                <br />
                Page Speed
                <br />
                Optimization
              </span>
              <img src={Amp} className="img-responsive amp" />
            </div>
          </li>
          <li>
            <div className="placeholder" />
            <span>Coming Soon</span>
            <img src={Keyboard} className="img-responsive keyboard" />
          </li>
          <li>
            <div className="placeholder" />
            <span>Coming Soon</span>
            <img src={Keyboard} className="img-responsive keyboard" />
          </li>
          <li>
            <div className="placeholder" />
            <span>Coming Soon</span>
            <img src={Keyboard} className="img-responsive keyboard" />
          </li>
        </ul>
      </div>
    );
  }
}

export default Showcase;
