import modacenterlogo from "@/assets/mdc_logo.png";
import * as React from "react";

const ModacenterFooter: React.FC = () => {
  return (
    <div
      style={{ backgroundColor: "#F6F7FC", bottom: 0, width: "100%", minHeight: "200px", maxHeight: "200px" }}
      className={`flex flex-col justify-evenly h-44 items-center`}
    >
      <span className="w-80 text-gray-400" style={{ fontSize: 13 }}>
        O Catálogo Virtual é uma parceria entre o Moda Center com a empresa de soluções em comércio online Vende Moda.
      </span>
      <img src={modacenterlogo} width={125} height={20} />
    </div>
  );
};

export default ModacenterFooter;
