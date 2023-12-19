import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <section className="bg-slate-400 pb-20">
      <div className="relative grid h-96 w-full grid-cols-1 justify-between sm:grid-cols-2">
        <div className="relative col-span-1 m-auto text-left">
          <article>
            <h1>
              <span className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                Frontend
                <br />
                Developer
              </span>
            </h1>
            <p className="sm:text-1xl text-md mt-10 md:text-2xl">
              I create complex and scalable frontend solutions with great user
              experience
            </p>
          </article>
        </div>
        <div className="col-span-1 justify-items-center">
          <Image
            className="z-2 h-96 w-96 rounded-full bg-black ring-2 ring-gray-300"
            src="/avatar2.jpg"
            alt="Rounded avatar"
            width={72}
            height={72}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
