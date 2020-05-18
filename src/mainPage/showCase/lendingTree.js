import React from "react";
import Tabs from "../tabs/tabs";
import LtBefore from "../assets/pictures/Lendingtree/lendingtree2016.png";
import LtAfter from "../assets/pictures/Lendingtree/lt2018.png";

const LendingTree = () => {
  return (
    <div className="tabs-grid">
      <Tabs>
        <div label="before">
          <img src={LtBefore} class="img-responsive" />
        </div>
        <div label="after">
          <img src={LtAfter} class="img-responsive" />
        </div>
      </Tabs>

      <div className="about-project">
        <h2>LendingTree</h2>
        <ul>
          <li>
            <b>Project:</b> Redesign and rebuild of the LendingTree website
          </li>
          <li>
            {" "}
            <b>Team size:</b> 3 people for Frontend Development
          </li>
          <li>
            <b>Tech stack:</b> Wordpress and mySQL
          </li>
          <li>
            <b>Languages:</b> PHP, Javascript, html, css
          </li>
          <li>
            <b>Overview:</b> Helped review designs for the redesign/reskin of
            the LendingTree website and then helped build the framework for the
            wordpress instance. We used a custom theme, and I was in charge of
            building out advanced custom fields for reusable components on the
            website using PHP, HTML, and CSS. We used gitflow and did weekly
            commits.{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LendingTree;
