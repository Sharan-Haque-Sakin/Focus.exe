import React from "react";
import { Link } from "react-router-dom";
import "./css/HomePage.css";
export default function SectionContainer() {
  return (
    <article>
      <br />
      <h2 style={{ textAlign: "center" }}>
        <i>(Click on the BLUE Headings to visit or read anything..)</i>
      </h2>
      <br />
      <h1 className="sectionHeaders">Blogs ✍ </h1> <br />
      <br />
      <div className="SectionsContainer">
        <section className="Blogs">
          <h2 className="headersH2">
            <Link to={`blogs/dopaminedetox`}>
              How to train your brain to do hard things?🤔
            </Link>
          </h2>
          <div>
            Do you suffer from not being able to focus on your daily work or
            studies? Then you must Link DETOX!
          </div>
        </section>
        <section className="Blogs">
          <h2 className="headersH2">
            <Link to={`blogs/positiveattitudewillnotchangeyou`}>
              Your positive attitude will not work unless...
            </Link>
          </h2>
          <div>
            If you are Link kind of person who thinks that having Link possitive
            attitude is going to make you Link successfull person,then,brother
            you are living in Link dream!😱
          </div>
        </section>
        <br /> <br />
        <p>
          <Link to={`/blogs`}>More...</Link>
        </p>
      </div>
      {/* Book Summaries */}
      <br />
      <br />
      <h1 className="sectionHeaders">Book Summaries! 📚 </h1> <br /> <br />
      <div className="SectionsContainer">
        <section className="Blogs">
          <h1>
            <Link to={`/booksummaries/atomichabits`}>
              Atomic Habits by James Clear
            </Link>
          </h1>
          <div>
            Suffering to eliminate the bad habits?Or stick with the good ones?Or
            create Link new one? Than this is for you!
            <br />
            <br />
            "By far the best book on Habits!"
          </div>
        </section>
        <section className="Blogs">
          <h1>
            <Link to={`booksummaries/reviveyourheart`}>
              Revive your Heart by NOUMAN ALI KHAN
            </Link>
          </h1>
          <div>
            Even being Link Muslim,we are living the life from any directions
            like Link muslim.Sheikh Nouman Ali Khan tells very very simple way
            to get attach to Allah and live our lifes with Baraqah!
          </div>
        </section>{" "}
        <br /> <br />
        <p>
          <Link to={`/booksummaries`}>More...</Link>
        </p>
      </div>
    </article>
  );
}
