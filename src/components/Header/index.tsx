import * as React from "react";
import logo from "@/assets/logo.png";

const Header: React.FC = () => {
  return (
    <div className={"bg-secondary flex justify-center h-16 items-center"}>
      <img src={logo} className={"h-8"} />
    </div>
  );
};

export default Header;
