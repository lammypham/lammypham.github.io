import React from "react";
import Image from "next/image";

// Components
import Section from "../Section";
import HeaderComponent from "../HeaderComponent/HeaderComponent";

const COL_FLEX_DIRECTION_QUERY = "767px";
const SKILLS_SVGS = [
  "next.svg",
  "react.svg",
  "redux.svg",
  "tailwindcss.svg",
  "kubernetes.svg",
];
const AboutMe: React.FC = () => {
  return (
    <Section sectionClass="h-auto sm:h-screen">
      <div className="flex w-full flex-col">
        <article className="mb-6 flex flex-wrap justify-between text-left">
          <div className="flex max-w-prose flex-col md:max-w-md lg:max-w-lg">
            <HeaderComponent>Engineering</HeaderComponent>
            <p className="my-4 text-xs lg:text-lg">
              My career and love for the craft began with solving complex
              solutions for large business data. I love to use tools like
              React.js, Next.js, and other leading front end technologies, to
              create solid solutions that are efficient, maintainable, and
              testable.
            </p>
          </div>
          <Image
            className="m-auto h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32"
            src={"engineer.svg"}
            alt={"engineer"}
            width={1}
            height={1}
          />
        </article>
        <article className="mb-6 flex flex-wrap justify-between">
          <Image
            className={`m-auto hidden h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 min-[${COL_FLEX_DIRECTION_QUERY}]:block`}
            src={"design.svg"}
            alt={"engineer"}
            width={1}
            height={1}
          />
          <div className="flex flex-col md:max-w-sm lg:max-w-prose">
            <HeaderComponent>UX Design</HeaderComponent>
            <p className="my-4 text-xs lg:text-lg ">
              I am always learning to find the best user experience for every
              product. I am use to working with UX Designers and Product in
              order to discuss what new features creates the most efficient and
              highest quality of experience for users.
            </p>
          </div>
          <Image
            className={`m-auto h-20 w-20 md:h-32 md:w-32 min-[${COL_FLEX_DIRECTION_QUERY}]:hidden`}
            src={"design.svg"}
            alt={"engineer"}
            width={1}
            height={1}
          />
        </article>
        <article className="my-12">
          <ul className="flex justify-between">
            {SKILLS_SVGS.map((svg) => (
              <li key={svg}>
                <Image
                  className="m-auto h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32"
                  src={svg}
                  alt={"engineer"}
                  width={1}
                  height={1}
                />
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
};

export default AboutMe;
