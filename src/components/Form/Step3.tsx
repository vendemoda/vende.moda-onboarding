import * as React from "react";
import { useWindowSize } from "../../hooks";
import youtube from "../../assets/youtube.png";

interface Step3Props {
  url: string;
}

const Step3: React.FC<Step3Props> = ({ url }) => {
  const { width } = useWindowSize();

  return (
    <div className={""}>
      <div className="my-10">
        <div className="bg-gray-300  rounded-lg w-full h-52"></div>
      </div>
      <div className={"text-center"}>
        <p className={"font-bold text-3xl mb-4"}>Tudo pronto!</p>
        <div className="mt-6">
          <p>O link do seu catálogo ficou assim:</p>
          <a href={url} className={"btn rounded-lg mt-2"}>
            {url.replace("https://", "")}
          </a>
          <span className="text-gray-500 text-sm">
            Clique para acessar seu catálogo
          </span>
        </div>

        <div className="mt-10">
          <p>Acesse seu painel de controle:</p>
          <a
            href={"https://painelcatalogo.modacentersantacruz.com.br"}
            className={"btn rounded-lg mt-2"}
          >
            {"painelcatalogo.modacentersantacruz.com.br"}
          </a>
          <span className="text-gray-500 text-sm">
            Clique para acessar seu painel
          </span>
        </div>
        <div className="mt-10">
          <div>
            Acesse nosso canal no YouTube para saber como utilizar melhor o seu
            catálogo.
          </div>
        </div>
        <div className="bg-gray-300 flex justify-center p-3 rounded-lg max-w-[150px] mx-auto mt-4">
          <img src={youtube} style={{ height: 20 }} />
        </div>
      </div>
    </div>
  );
};

export default Step3;
