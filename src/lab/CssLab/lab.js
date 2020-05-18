import React, { Component } from "react";
//images
import loader from'../../assets/pictures/lab/loader.png';
import heart from '../../assets/pictures/lab/heart.png';
import circle from '../../assets/pictures/lab/circle.png';
import meltaway from '../../assets/pictures/lab/meltaway.png';

class CssLab extends Component {
  render() {
    return (

<div className="lab">
  <h1> Experiments with Css</h1>
<ul>
            <li>
              <a href="/lab/css-loader">
            <div className="placeholder">
                <span>
                  CSS
                  Loader
                </span>

                <img src={loader} className="img-responsive lab-css" />
              </div>
              </a>
            </li>
            <li>
              <a href="/lab/hearts">
            <div className="placeholder">
                <span>
                  CSS
                  Hearts
                </span>
                <img src={heart} className="img-responsive lab-css" />
              </div>
              </a>
            </li>
            <li>
              <a href="/lab/circle">
            <div className="placeholder">
                <span>
                  CSS
                  Circle <br/>
                  Transition
                </span>
                <img src={circle} className="img-responsive lab-css" />
              </div>
              </a>
            </li>
            <li>
              <a href="/lab/meltaway">
            <div className="placeholder">
                <span>
                  CSS
                  Meltaway 
                </span>
                <img src={meltaway} className="img-responsive lab-css" />
              </div>
              </a>
            </li>
           
          </ul>
      </div>
    );
  }
}

export default CssLab;
