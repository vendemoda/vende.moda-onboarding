import ModacenterHeader from "@/components/Headers/Modacenter";
import ProgressIndicator from "@/components/ProgressIndicator";
import { useWindowSize } from "@/hooks/useWindowSize";
import ecommerceAnimationData from "@/assets/ecommerce.json";
import { FC, useEffect } from "react";
import Lottie from "react-lottie";
import { useAppSelector } from "@/hooks/redux";
import { useNavigate } from "react-router-dom";
import Step2Form from "./components/Form";

const Step2: FC = () => {
  const { width } = useWindowSize();
  const { companyFormData } = useAppSelector((state) => state.app);
  const navigate = useNavigate();

  useEffect(() => {
    if (!companyFormData.admin_name) {
      //navigate("/");
    }
  }, [companyFormData]);

  return (
    <div>
      <ModacenterHeader />
      <div className="my-10">
        <ProgressIndicator step={35} />
      </div>
      <div className="flex justify-center mx-auto p-4 max-w-[1000px] pb-10">
        <div className={"self-center mx-auto"}>
          <div className="mb-5">
            <p className={"text-3xl font-bold"}>Informe o endereço do seu ponto comercial principal no Moda Center </p>
          </div>
          <Step2Form />
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

export default Step2;
