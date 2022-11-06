import * as React from "react";
import logo from "@/assets/logo.png";
import mdcLogo from "@/assets/mdc_logo.png";

const Header: React.FC = () => {
  return (
    <div className={"bg-secondary flex justify-center h-16 items-center"}>
      <img
        src={import.meta.env.VITE_PLATFORM === "mdc" ? mdcLogo : logo}
        className={import.meta.env.VITE_PLATFORM === "mdc" ? "h-10" : "h-8"}
      />
    </div>
  );
};

export default Header;
