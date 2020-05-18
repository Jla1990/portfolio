import React, { Component } from "react";

const NavBar = () => {
  return (
    <header role="banner" className="nav-bar">
      <div className="name">
        <a href="/">
          <h1>Jessica Lair</h1>
        </a>
      </div>
      <nav role="navigation">
        <ul>
          <li>
            <a href="/lab">Lab</a>
          </li>
          <li>
            <a href="/about">About Me</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/16WxB_uDV0ptkLUpXLJSZOUUMNsIXrInv/view?usp=sharing" target="_blank">Resume</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
