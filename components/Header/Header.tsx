import React from "react";
import Image from "next/image";

// Components
import Section from "../Section";
import HeaderComponent from "../HeaderComponent/HeaderComponent";

const Header: React.FC = () => {
  return (
    <Section sectionClass="h-auto bg-slate-400">
      <div className="relative col-span-1 m-auto text-left">
        <article>
          <HeaderComponent>
            Frontend
            <br />
            Developer
          </HeaderComponent>
          <p className="mt-4 text-xl sm:text-xl md:mt-10 md:text-xl lg:text-2xl">
            I create complex and scalable frontend solutions with great user
            experience
          </p>
          <div className="xs:w-72 flex items-center justify-between">
            <ul className="mt-20 flex justify-between gap-x-2 py-12 leading-normal sm:gap-x-8 md:gap-x-6">
              <li className="text-xs lg:text-lg">
                Motivated to build efficient and progressive products utilizing
                optimzed designs and engineering
              </li>
              <li className="text-xs lg:text-lg">
                Built user friendly client solutions for businesses to handle
                complex business operations
              </li>
            </ul>
          </div>
        </article>
      </div>
      <div className="relative w-full justify-items-center max-[640px]:pb-10">
        <Image
          className="z-2 m-auto h-56 w-56 rounded-full bg-black ring-2 ring-gray-300 min-[715px]:h-56 min-[715px]:w-56 md:h-72 md:w-72 lg:h-96 lg:w-96"
          src="/avatar.jpg"
          alt="Rounded avatar"
          width={1}
          height={1}
        />
      </div>
      <div className="hidden">scroll index</div>
    </Section>
  );
};

export default Header;
