import React from "react";

// Components
import Header from "../Header";
import StickyHeader from "../StickyHeader";

const Portfolio = () => {
  return (
    <div className="h-screen w-full">
      <StickyHeader />
      <Header />
      <section>
        <div className="h-screen">about me</div>
      </section>
      <section>
        <div className="h-screen">contact</div>
      </section>
    </div>
  );
};

export default Portfolio;
