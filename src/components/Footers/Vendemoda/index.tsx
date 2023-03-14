import vendemodaLogo from "@/assets/logo.png";
import * as React from "react";

const VendemodaFooter: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#F6F7FC", width: "100%", minHeight: "200px", maxHeight: "200px" }} className={`flex flex-col justify-evenly items-center`}>
      <span className="w-80 text-gray-400" style={{ fontSize: 13 }}>
        O Catálogo Virtual é uma parceria entre o Moda Center com a empresa de soluções em comércio online Vende Moda.
      </span>
      <img src={vendemodaLogo} width={125} height={20} />
    </div>
  );
};

export default VendemodaFooter;
