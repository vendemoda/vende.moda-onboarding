import * as React from "react";
import mdcLogo from "@/assets/mdc_logo.png";

const ModacenterHeader: React.FC = () => {
  return (
    <div className={"bg-secondary flex justify-center h-16 items-center"}>
      <img src={mdcLogo} className={"h-10"} />
    </div>
  );
};

export default ModacenterHeader;
