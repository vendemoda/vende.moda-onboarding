import vendemodaLogo from "@/assets/logo.png";
import * as React from "react";

const VendemodaHeader: React.FC = () => {
  return (
    <div style={{ minHeight: "70px", maxHeight: "70px" }} className={"bg-[#0F299F] flex justify-center items-center"}>
      <img src={vendemodaLogo} className={"h-10"} />
    </div>
  );
};

export default VendemodaHeader;
