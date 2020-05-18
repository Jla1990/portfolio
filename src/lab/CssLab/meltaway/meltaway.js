import React from "react";
import inspiration from '../../../assets/pictures/lab/inspiration.jpeg';

const Meltaway = () => {
  return (
    <div className="meltaway">
    <div id="position">
      <div className="circle bottom planet-bg">
        <div className="line3"></div>
      </div>
      <div className="surrounding-ring"></div>
      <div className="circle top planet-bg">
        <div className="line1"></div>
        <div className="line2"></div>
      </div>
    </div>
    <div className="inspiration">
      <h2>Inspiration:</h2>
      <h3>Zhao's album "Meltaway" cover</h3>
      <img src={inspiration} classNam="img-responsive"></img>
    </div>
    </div>
  );
};

export default Meltaway;

