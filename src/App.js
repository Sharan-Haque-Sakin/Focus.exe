import React from "react";
import "./index.css";
import HomePage from "./Components/HomePage";
import About from "./Components/Routes/About";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import BookSummaries from "./Components/Routes/BookSummaries";
import Blogs from "./Components/Routes/Blogs";
import AtomicHabits from "./Book Summaries/AtomicHabits";
import LightOfIslam from "./Components/Routes/LightOfIslam";
import FullFocus from "./Blogs/FullFocus";
import Navbar from "./Components/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="Container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booksummaries" element={<BookSummaries />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/booksummaries/atomichabits"
            element={<AtomicHabits />}
          />
          <Route path="/light-of-islam" element={<LightOfIslam />} />
          <Route path="/blogs/dopaminedetox" element={<FullFocus />} />

          {/* <Route path="/booksummaries" element={<BookSummaries />} /> */}
        </Routes>
      </div>
    </>
  );
};

export default App;
