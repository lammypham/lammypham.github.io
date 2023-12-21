"use client";

import React, { useState } from "react";
import Image from "next/image";
const StickyHeader: React.FC = () => {
  const [showNav, setShowNav] = useState<boolean>(true);

  const handleClick = (): void => {
    setShowNav(!showNav);
  };
  return (
    <header className="fixed z-40 flex w-full items-center justify-between max-[700px]:px-5 min-[701px]:px-8">
      <div className="z-10">
        <Image
          className="h-20 w-40"
          width={12}
          height={12}
          src={"/lampham.svg"}
          alt={"Lam Pham"}
        ></Image>
      </div>
      <div
        onClick={handleClick}
        className={`z-10 flex h-20 w-8 flex-col flex-wrap justify-around `}
      >
        <div
          className={`inline-flex before:fixed before:h-0.5 before:w-8 before:w-full before:rounded-lg before:bg-black before:duration-500 before:content-[''] after:fixed after:h-0.5 after:w-8 after:w-full after:rounded-lg after:bg-black after:duration-500 ${
            showNav
              ? "before:right-8 before:top-12 before:rotate-45 after:right-8 after:top-12 after:-rotate-45"
              : "before:rotate-0 after:top-12 after:-rotate-0"
          }`}
        />
      </div>

      <nav
        aria-hidden={true}
        className={`${
          !showNav ? "hidden" : ""
        } absolute right-6 top-6 h-auto w-60 bg-white p-12 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:box-border before:h-full before:w-full before:origin-top-right max-[700px]:fixed max-[700px]:bottom-0 max-[700px]:left-0 max-[700px]:right-0 max-[700px]:top-0 max-[700px]:h-screen max-[700px]:w-screen max-[700px]:p-24 sm:before:content-['']`}
      >
        <ul>
          <li>My Resume</li>

          <div>
            <p>MY CONTACT</p>
            <ul>
              <li>Email</li>
              <li>Phone</li>
            </ul>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default StickyHeader;
