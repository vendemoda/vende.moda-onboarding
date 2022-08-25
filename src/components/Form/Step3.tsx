import * as React from "react";
import readyAnimationData from "../../assets/ready.json";
import Lottie from "react-lottie";
import { useWindowSize } from "../../hooks";

interface Step3Props {
  url: string;
}

const Step3: React.FC<Step3Props> = ({ url }) => {
  const { width } = useWindowSize();

  return (
    <div className={""}>
      <div>
        <div>
          <Lottie
            options={{
              loop: false,
              autoplay: true,
              animationData: readyAnimationData,
            }}
            height={width >= 768 ? 300 : 300}
            width={width >= 768 ? 300 : 300}
          />
        </div>
      </div>
      <div className={"text-center"}>
        <p className={"font-bold text-4xl mb-4"}>Tudo pronto!</p>
        <p>
          Acesseu seu painel{" "}
          <a
            href={"https://painelcatalogo.modacentersantacruz.com.br"}
            className="underline text-blue-500"
          >
            clicando aqui
          </a>
        </p>
        <p>
          E o seu catálogo{" "}
          <a
            href={url}
            className="underline text-blue-500"
          >
            clicando aqui
          </a>
        </p>
      </div>
    </div>
  );
};

export default Step3;
