import mdcLogo from "@/assets/mdc_logo.png";
import * as React from "react";

const ModacenterHeader: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#F6F7FC" }} className={" flex justify-center h-16 items-center"}>
      <img src={mdcLogo} className={"h-[45px]"} />
    </div>
  );
};

export default ModacenterHeader;
