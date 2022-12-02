import * as React from "react";
import vendemodalOGO from "@/assets/LOGO.png";

const VendemodaHeader: React.FC = () => {
  return (
    <div className={"bg-[#0F299F] flex justify-center h-16 items-center"}>
      <img src={vendemodalOGO} className={"h-10"} />
    </div>
  );
};

export default VendemodaHeader;
