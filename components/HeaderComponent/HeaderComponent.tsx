import React, { ReactNode } from "react";

interface IHeaderComponentProps {
  headerClass?: string;
  children?: ReactNode;
}
const HeaderComponent: React.FC<IHeaderComponentProps> = ({
  headerClass,
  children,
}) => {
  return (
    <h1>
      <span
        className={`${headerClass} text-5xl font-black tracking-tight sm:text-5xl md:text-5xl lg:text-7xl`}
      >
        {children}
      </span>
    </h1>
  );
};

export default HeaderComponent;
