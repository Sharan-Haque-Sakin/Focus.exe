import React from "react";
import "./css/HomePage.css";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import SectionContainer from "./SectionContainercs";
import Navbar from "./Navbar";

export default function HomePage2() {
  return (
    <main>
      <header>
        <Navbar />
        <h1>Welcome to Our Blogs!--</h1>
        <SectionContainer />
      </header>
    </main>
  );
}
