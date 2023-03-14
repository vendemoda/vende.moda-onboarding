import mdcLogo from "@/assets/mdc_logo.png";
import * as React from "react";

const ModacenterHeader: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#F6F7FC", minHeight: "70px", maxHeight: "70px" }} className={"flex justify-center items-center"}>
      <img src={mdcLogo} className={"h-[45px]"} />
    </div>
  );
};

export default ModacenterHeader;
