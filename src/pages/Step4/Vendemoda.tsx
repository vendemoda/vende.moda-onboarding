import * as React from "react";
import youtube from "@/assets/youtube.png";
import { useAppSelector } from "@/hooks/redux";
import ProgressIndicator from "@/components/ProgressIndicator";
import VendemodaHeader from "@/components/Headers/Vendemoda";

const Step4Vendemoda: React.FC = () => {
  const { companyFormData } = useAppSelector((state) => state.app);

  const url = `https://${companyFormData.code}.vende.moda`;

  return (
    <div>
      <VendemodaHeader />
      <div className="my-10">
        <ProgressIndicator step={100} color={"#0F299F"} />
      </div>
      <div className="flex justify-center mx-auto p-4 max-w-[1000px] pb-10">
        <div className={"self-center mx-auto"}>
          <div className="my-10">
            <div className="bg-gray-300  rounded-lg w-full h-52"></div>
          </div>
          <div className={"text-center"}>
            <p className={"font-bold text-3xl mb-4"}>Tudo pronto!</p>
            <div className="mt-6">
              <p>O link do seu catálogo ficou assim:</p>
              <p className="text-vendemodaBlue font-bold">{companyFormData.code}.vende.moda</p>
            </div>

            <div className="mt-6">
              <p>Acesse seu painel e cadastre seus produtos agora mesmo!</p>
              <a href={"https://painel.vende.moda"} target="_blank" rel="noopener noreferrer" className={"btn bg-vendemodaBlue rounded-lg mt-2"}>
                {"painel.vende.moda"}
              </a>
              <span className="text-gray-500 text-sm">Clique para acessar seu painel</span>
            </div>
            <div className="mt-10">
              <div>Acesse nosso canal no YouTube para saber como utilizar melhor o seu catálogo.</div>
            </div>
            <div className="bg-gray-300 flex justify-center p-3 rounded-lg max-w-[150px] mx-auto mt-4">
              <img src={youtube} style={{ height: 20 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4Vendemoda;
