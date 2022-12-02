import VendemodaModal from "@/components/VendemodaModal";
import { toastError } from "@/helpers/functions";
import { useAppDispatch } from "@/hooks/redux";
import { ModaCenterAddress, setModaCenterAddressData } from "@/services/redux/reducers/app";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Step2Form: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isVendeModaModalOpen, setIsVendeModaModalOpen] = useState(false);

  const {
    handleSubmit,
    register,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<ModaCenterAddress>();

  const onSubmit: SubmitHandler<ModaCenterAddress> = async (data) => {
    clearErrors();
    if (!data.modacenter_block) {
      setError("modacenter_block", { message: "Você precisa informar o bloco" });
      return toastError("Informe o bloco");
    }
    if (!data.modacenter_address) {
      setError("modacenter_address", { message: "Você precisa informar o endereço" });
      return toastError("Informe o endereço");
    }
    dispatch(setModaCenterAddressData(data));
    navigate("/passo-3");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="sector">Setor</label>
        <span className={"block text-sm text-gray-500"}>Informe o setor do seu ponto no Moda Center</span>
        <select
          {...register("modacenter_block", { required: true })}
          placeholder={"Selecione uma opção"}
          required
          className={`mt-1 block text-input w-full md:w-auto min-w-[300px] ${errors.modacenter_block && "error"}`}
        >
          <option value={""} selected disabled>
            Selecione uma opção
          </option>
          <option value={"azul"}>Azul</option>
          <option value={"azul"}>Verde</option>
          <option value={"azul"}>Amarelo</option>
        </select>
        {errors.modacenter_block && <p>{errors.modacenter_block.message}</p>}
      </div>
      <div className="mt-4">
        <label htmlFor="sector">Endereço</label>
        <span className={"block text-sm text-gray-500"}>Informe o endereço do seu ponto no Moda Center</span>
        <input
          {...register("modacenter_address", { required: true })}
          className={`mt-1 block text-input w-full md:w-auto min-w-[300px] ${errors.modacenter_address && "error"}`}
          required
        />
      </div>
      <div className="mt-4">
        <button type={"submit"} className={"btn rounded-lg min-w-[200px]"}>
          <span>Enviar!</span>
        </button>
      </div>
      <div className="mt-4">
        <button
          className="underline"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setIsVendeModaModalOpen(true);
          }}
        >
          Não tenho ponto no Moda Center
        </button>
      </div>
      <VendemodaModal
        isOpen={isVendeModaModalOpen}
        onRequestClose={() => {
          setIsVendeModaModalOpen(false);
        }}
      />
    </form>
  );
};

export default Step2Form;
