import React, { Component } from "react";

const NavBar = () => {
  return (
    <header role="banner">
      <h1>Jessica Lair</h1>
      <nav role="navigation">
        <ul>
          <li>
            <a href="/">Lab</a>
          </li>
          <li>
            <a href="/about">About Me</a>
          </li>
          <li>
            <a href="/resume">Resume</a>
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
