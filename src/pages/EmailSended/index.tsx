import Email from "@/assets/email.svg";
import VendemodaFooter from "@/components/Footers/Vendemoda";
import ModacenterHeader from "@/components/Headers/Modacenter";
import { useAppSelector } from "@/hooks/redux";
import { useWindowSize } from "@/hooks/useWindowSize";
export const EmailSended = () => {
  const { width } = useWindowSize();
  const { confirmationEmail } = useAppSelector((state) => state.app);
  return (
    <div className="flex flex-col h-screen">
      <ModacenterHeader />

      <div className="flex-grow flex justify-center items-center">
        <div
          className={`flex flex-row p-5 mx-4 items-center rounded-lg bg-slate-300 justify-evenly ${
            width > 768 ? "h-[350px] max-w-[700px]" : "max-h-[300px] max-w-[500px]"
          } `}
        >
          <div className="mx-10">
            <h2 className="text-2xl text-center font-bold text-gray-800 my-4">Falta pouco!</h2>
            <p className="text-gray-600 my-4 ">
              Ficamos felizes por você ter decidido criar seu catálogo conosco! Agora, precisamos que você clique no link que enviamos para o e-mail:{" "}
              <div className="inline-block underline text-blue-600">{confirmationEmail}</div>, a fim de continuar o cadastro.
            </p>
          </div>
          {width > 768 && <img src={Email} width={300} />}
        </div>
      </div>
      <VendemodaFooter />
    </div>
  );
};
