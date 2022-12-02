import { FC } from "react";
import ModacenterHeader from "@/components/Headers/Modacenter";
import ProgressIndicator from "@/components/ProgressIndicator";
import Lottie from "react-lottie";
import { useWindowSize } from "@/hooks/useWindowSize";
import ecommerceAnimationData from "@/assets/ecommerce.json";
import GeneralDataForm from "./components/Form";

const Step1: FC = () => {
  const { width } = useWindowSize();
  return (
    <div>
      <ModacenterHeader />
      <div className="my-10">
        <ProgressIndicator step={1} />
      </div>
      <div className="flex justify-center mx-auto p-4 max-w-[1000px] pb-10">
        <div className={"self-center mx-auto"}>
          <div>
            <p className={"text-3xl font-bold"}>
              Não se preocupe. Vamos ajudar você a criar o seu <span className={"text-secondary"}>catálogo virtual GRÁTIS</span> em menos de 5 minutos!
            </p>
            <p className={" text-gray-500 text-xl my-6"}>Preencha os dados abaixo para criar o seu catálogo</p>
          </div>
          <GeneralDataForm />
        </div>
        <div className={"self-center"}>
          {width > 768 && (
            <div>
              <Lottie
                options={{
                  loop: false,
                  autoplay: true,
                  animationData: ecommerceAnimationData,
                }}
                height={width >= 768 ? 370 : 300}
                width={width >= 768 ? 370 : 300}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step1;
