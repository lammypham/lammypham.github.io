import React from "react";

// Components
import Header from "../Header";
import StickyHeader from "../StickyHeader";
import AboutMe from "../AboutMe";
import Contact from "../Contact";

const Portfolio = () => {
  return (
    <div className="h-screen w-full">
      <StickyHeader />
      <Header />
      <AboutMe />
      <Contact />
    </div>
  );
};

export default Portfolio;
