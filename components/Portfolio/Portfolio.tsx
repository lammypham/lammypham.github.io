import React from "react";

// Components
import Header from "../Header";
import StickyHeader from "../StickyHeader";
import AboutMe from "../AboutMe";

const Portfolio = () => {
  return (
    <div className="h-screen w-full">
      <StickyHeader />
      <Header />
      <section>
        <AboutMe />
      </section>
      <section>
        <div className="h-screen">contact</div>
      </section>
    </div>
  );
};

export default Portfolio;
