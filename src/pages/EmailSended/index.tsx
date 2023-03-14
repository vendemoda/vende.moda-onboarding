import Email from "@/assets/sended-email.svg";
import VendemodaFooter from "@/components/Footers/Vendemoda";
import ModacenterHeader from "@/components/Headers/Modacenter";
import { useAppSelector } from "@/hooks/redux";
export const EmailSended = () => {
  const { confirmationEmail } = useAppSelector((state) => state.app);
  return (
    <div className="h-screen flex flex-col justify-between">
      <ModacenterHeader />
      <div className="flex w-full flex-col items-center h-full my-10">
        <img src={Email} width={140} />
        <b style={{ width: "350px" }} className=" text-center my-4">
          Um e-mail com o link de cadastro foi enviado para: <div className="inline-block text-green-600">{confirmationEmail}</div>
        </b>
        <span style={{ width: "350px" }} className="text-center">
          Se você não encontrar o e-mail na caixa de entrada, tente procurá-lo em sua pasta de Spam
        </span>
      </div>
      <VendemodaFooter />
    </div>
  );
};
