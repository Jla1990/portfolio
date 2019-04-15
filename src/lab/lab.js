import React, { Component } from "react";
import LT from "../assets/pictures/Lendingtree/lendingtreeLogo.png";
import Gap from "../assets/pictures/Gap/gapLogo.svg";
import Amp from "../assets/pictures/Lendingtree/ampproject-official.svg";

class Showcase extends Component {
  render() {
    return (
      <div>
        <div className="lab">
          <ul>
            <li>
              <a>
                <div className="placeholder">
                  <img src={LT} className="img-responsive lt" />
                  {/* <div className="text">
                    <h4>LendingTree</h4>
                    <p>Redesign, Rebuild</p>
                  </div> */}
                </div>
              </a>
            </li>
            <li>
              <div className="placeholder">
                <img src={Gap} className="img-responsive gap" />
              </div>
            </li>
            <li>
              <div className="placeholder">
                <img src={Amp} className="img-responsive amp" />
              </div>
            </li>
            <li>
              <div className="placeholder" />
            </li>
            <li>
              <div className="placeholder" />
            </li>
            <li>
              <div className="placeholder" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Showcase;
