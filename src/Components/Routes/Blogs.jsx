import React from "react";
import Navbar from "../Navbar";
import "./Routes.css";
import Data from "./../../DataBase/Blogs.json";
import { Link } from "react-router-dom";
export default function Blogs() {
  return (
    <>
      <header>
        {/* <Navbar /> */}
        <h1>Welcome to Our Blogs!--</h1>
      </header>
      <main>
        <div className="itemsContainer">
          {Data.map((blogs) => {
            return (
              <section className="Blogs">
                <h2 className="headersH2">
                  <Link to={blogs.route}>{blogs.title}</Link>
                </h2>
                <div>{blogs.shortDetail}</div>
              </section>
            );
          })}
        </div>
      </main>
    </>
  );
}
