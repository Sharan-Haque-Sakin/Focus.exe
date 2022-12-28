import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
export default function Navbar() {
  const [isOn, setOn] = useState(false);

  function handleMenu() {
    setOn(!isOn);
  }
  return (
    <>
      <div id="menu" onClick={() => handleMenu()}>
        <div className="bar" id="bar1"></div>
        <div className="bar" id="bar2"></div>
        <div className="bar" id="bar3"></div>
      </div>
      <nav className={isOn ? "show nav n-h" : "nav n-h"}>
        <ul id="navUl">
          <li>
            <Link className="navLink" to={`/`}>
              Home
            </Link>
          </li>
          <li>
            <Link to={`/blogs`} className="navLink">
              Blogs
            </Link>
          </li>
          <li>
            <Link className="navLink" to={`/booksummaries`}>
              Book Summaries
            </Link>
          </li>
          <li>
            <Link className="navLink" to={`/light-of-islam`}>
              Islamic Section
            </Link>
          </li>
          <li>
            <Link className="navLink" to={`/aboutus`}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
