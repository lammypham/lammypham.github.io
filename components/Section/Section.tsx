import React, { ReactNode } from "react";

interface ISectionProps {
  children: ReactNode;
  sectionClass?: string;
}
const Section: React.FC<ISectionProps> = ({ children, sectionClass }) => {
  return (
    <section className={sectionClass}>
      <div className="relative m-auto w-full items-center justify-between px-16 pt-36 sm:flex sm:max-md:px-16 lg:px-16 xl:max-w-screen-2xl">
        {children}
      </div>
    </section>
  );
};

export default Section;
