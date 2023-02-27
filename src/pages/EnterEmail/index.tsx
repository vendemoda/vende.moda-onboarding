import BackgroundPhone from "@/assets/background-phone.svg";
import VendemodaFooter from "@/components/Footers/Vendemoda";
import ModacenterHeader from "@/components/Headers/Modacenter";
import { toastError } from "@/helpers/functions";
import { useAppDispatch } from "@/hooks/redux";
import Api from "@/services/Api";
import { setConfirmationEmail, setEmailValidatedToken } from "@/services/redux/reducers/app";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const EnterEmail = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const onSubmit = async () => {
    try {
      const { data } = await Api.post("/leads/send_email_confirmation", { email });
      if (data?.alreadyValidated && data?.token) {
        dispatch(setEmailValidatedToken(data.token));
        dispatch(setConfirmationEmail(data.email));
        toast("Email já validado, redirecionando para o cadastro");
        navigate("/passo-1");
      } else {
        dispatch(setConfirmationEmail(email));
        navigate("/email-enviado");
      }
    } catch (error) {
      toastError(error);
    }
  };
  return (
    <div className="h-screen flex flex-col justify-between">
      <ModacenterHeader />
      <div className={`flex items-center justify-evenly flex-col`}>
        <div className="relative w-[350px] flex flex-row p-5">
          <img src={BackgroundPhone} height={270} />
          <span className="absolute flex flex-col left-[180px] top-10" style={{ lineHeight: 1 }}>
            <b className="text-4xl" style={{ lineHeight: 1 }}>
              Crie o <div style={{ color: "#7429B2", display: "inline" }}>catálogo virtual </div>
              da sua marca grátis!
            </b>
            <span className="mt-5">*Grátis para marcas que estão no Moda Center!</span>
          </span>
        </div>
        <div className="m-8 flex flex-col items-center max-w-[350px]">
          <b>Informe seu e-mail comercial para receber o link de cadastro</b>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="E-mail"
            className="my-3 block text-input rounded-3xl p-3 w-full"
          ></input>
          <button onClick={onSubmit} className="block rounded-3xl p-3 w-full font-bold text-white" style={{ backgroundColor: "#03A430" }}>
            Enviar link de cadastro
          </button>
        </div>
      </div>
      <VendemodaFooter />
    </div>
  );
};
