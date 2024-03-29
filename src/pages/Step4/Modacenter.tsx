import youtube from "@/assets/youtube.png";
import ModacenterHeader from "@/components/Headers/Modacenter";
import ProgressIndicator from "@/components/ProgressIndicator";
import { toastError } from "@/helpers/functions";
import { useAppSelector } from "@/hooks/redux";
import Api from "@/services/Api";
import * as React from "react";

const Step4Modacenter: React.FC = () => {
  const { companyFormData, confirmationEmail } = useAppSelector((state) => state.app);

  const handleRedirect = async () => {
    try {
      const { data } = await Api.post(`/user/login`, {
        username: confirmationEmail,
        password: companyFormData.admin_password,
      });
      localStorage.setItem("user_token", data.token);
      localStorage.setItem("user_id", data.userId);
      localStorage.setItem("user_name", data.userName);
      localStorage.setItem("user_role", data.userRole);
      localStorage.setItem("company_code", data.company_code);
    } catch (error) {
      toastError(error);
    }
  };

  return (
    <div>
      <ModacenterHeader />
      <div className="my-10">
        <ProgressIndicator step={100} />
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
              <p className="text-vendemodaBlue font-bold">{companyFormData.code}.modacentersantacruz.com.br</p>
            </div>
            <div className="mt-6">
              <p>Acesse seu painel e cadastre seus produtos agora mesmo!</p>
              <a onClick={handleRedirect} href={"http://qualquerdominio.com:3000"} target="_blank" rel="noopener noreferrer" className={"btn rounded-lg mt-2"}>
                {"painelcatalogo.modacentersantacruz.com.br"}
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

export default Step4Modacenter;
