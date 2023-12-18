import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="w-full">
        header
        <div>- menu items</div>
      </div>
      <Image
        className="w-72 h-72 rounded-full"
        src="/vercel.svg"
        alt="Rounded avatar"
        width={72}
        height={72}
      />
    </div>
  );
};

export default Header;
