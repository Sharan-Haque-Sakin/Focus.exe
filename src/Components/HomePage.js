import React from "react";
import "./css/HomePage.css";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import SectionContainer from "./SectionContainercs";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <header className="Heading">
        {/* <Navbar /> */}
        <h1 className="Header">
          Welcome to <span style={{ color: "#ff6c00" }}>Focus.exe!</span>
        </h1>
        <h2 style={{ fontSize: "2rem", fontWeight: "502" }}>
          Hey there? Are you wanting to be productive in your daily life ?{" "}
        </h2>

        <div>
          <h2>
            You can scroll and explore!and if you find something that matches
            your interest than explore that section!
          </h2>
        </div>
        <div>
          <h2>
            {" "}
            {}
            Also if you are a muslim,than you can check out this section and
            Explore your Deen! 👉 <Link to={`/light-of-islam`}>Click Me</Link>
          </h2>
        </div>

        <div>
          <h2>
            You can also follow us in our <a href="#">Youtube Channel</a>!
          </h2>
        </div>
        <br />
        <br />
        <section className="greetingTag">
          <h2>Enjoy your journey! 👍 </h2>
          <h2 style={{ fontSize: "4rem" }}>↓</h2>
        </section>
      </header>

      <SectionContainer />

      {/* <div className="end">
        
      </div> */}
    </>
  );
};

export default HomePage;
