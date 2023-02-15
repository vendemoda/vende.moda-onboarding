import ModacenterHeader from "@/components/Headers/Modacenter";
import { useAppSelector } from "@/hooks/redux";
import { useWindowSize } from "@/hooks/useWindowSize";
import Email from "../../assets/email.svg";
export const SendConfirmationEmail = () => {
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
              Ficamos felizes que você decidiu criar seu catálogo conosco! Agora precisamos que você clique no link que enviamos para o email:{" "}
              <div className="inline-block underline text-blue-600">{confirmationEmail}</div> para continuar o cadastro.
            </p>
          </div>
          {width > 768 && <img src={Email} width={300} />}
        </div>
      </div>
    </div>
  );
};
