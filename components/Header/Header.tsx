import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <section className="bg-slate-400 pb-20">
      <div className="relative m-auto grid h-96 w-full grid-cols-1 items-center justify-between sm:grid-flow-col 2xl:max-w-screen-2xl">
        <div className="relative col-span-1 m-auto text-left">
          <article className="px-5">
            <h1>
              <span className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                Frontend
                <br />
                Developer
              </span>
            </h1>
            <p className="mt-4 text-xl sm:text-2xl md:mt-10 md:text-2xl">
              I create complex and scalable frontend solutions with great user
              experience
            </p>
            <div className="xs:w-72 flex items-center justify-between">
              <ul className="my-9 flex justify-between gap-x-12 leading-normal">
                <li className="lg:text-lg">
                  Motivated to build efficient and progressive products
                  utilizing optimzed designs and engineering
                </li>
                <li className="lg:text-lg">
                  Built user friendly client solutions for businesses to handle
                  complex business operations
                </li>
              </ul>
            </div>
          </article>
        </div>
        <div className="col-span-1 mt-3.5 justify-items-center sm:max-2xl:px-7">
          <Image
            className="z-2 m-auto h-56 w-56 rounded-full bg-black ring-2 ring-gray-300 min-[660px]:h-80 min-[660px]:w-80 md:h-96 md:w-96"
            src="/avatar2.jpg"
            alt="Rounded avatar"
            width={1}
            height={1}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
