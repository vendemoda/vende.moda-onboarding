import * as React from "react";
import { FormValues } from ".";
import { SubmitHandler, useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { toastError, validatePhoneText } from "../../utils/functions";
import ReactLoading from "react-loading";
import Api from "../../services/Api";
import { useSwiper } from "swiper/react";

interface Step2Props {
  formData: FormValues;
  onSuccess: () => void;
}

const Step2: React.FC<Step2Props> = ({ formData, onSuccess }) => {
  const [loading, setLoading] = React.useState(false);
  const swiper = useSwiper();
  const [documentType, setDocumentType] = React.useState("cpf");

  const {
    handleSubmit,
    register,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (data.admin_password !== data.admin_password_confirmation) {
      setError("admin_password_confirmation", {
        message: "As senhas não conferem",
      });
      return toastError("As senhas não conferem");
    }
    setLoading(true);
    clearErrors();
    if (!validatePhoneText(data.phone)) {
      setError("phone", { message: "Telefone inválido" });
      return setLoading(false);
    }
    try {
      await Api.post(`/company`, {
        ...formData,
        phone: data.phone,
        email: data.email,
        document: data.document,
        admin_name: data.admin_name,
        admin_password: data.admin_password,
        admin_password_confirmation: data.admin_password_confirmation,
      });
      setLoading(false);
      swiper.slideNext();
      window.scrollTo(0, 0);
      onSuccess();
    } catch (error) {
      toastError(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className={"basis-1/2 flex flex-col order-2 md:order-1"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className={"text-2xl font-bold"}>Configure sua conta</p>
          <p className={"text-gray-500 text-md mb-6"}>
            Informe os dados que serão usados para administrar sua conta
          </p>
          <div>
            <span>Nome do responsável</span>
            <span className={"block text-sm text-gray-500"}>
              Informe o nome completo
            </span>
            <input
              {...register("admin_name", { required: true })}
              type="text"
              className="mt-1 block text-input w-full md:w-auto min-w-[300px]"
            />
          </div>
          <div className={"mt-4"}>
            <div className="flex flex-row justify-between">
              <span>Documento</span>
              <div className="flex flex-row items-center">
                <label className="mr-2">Pessoa jurídica</label>
                <input
                  onChange={(e) =>
                    setDocumentType(e.target.checked ? "cnpj" : "cpf")
                  }
                  type={"checkbox"}
                  value={documentType === "cnpj" ? 1 : 0}
                />
              </div>
            </div>
            <span className={"block text-sm text-gray-500"}>
              Informe o número do documento
            </span>
            <div className="flex">
              <InputMask
                {...register("document", { required: true })}
                mask={
                  documentType === "cpf"
                    ? "999.999.999-99"
                    : "99.999.999/9999-99"
                }
                type="text"
                alwaysShowMask={false}
                className="mt-1 block text-input w-full md:w-auto min-w-[300px]"
              />
            </div>
          </div>
          <div className={"mt-4"}>
            <span>Whatsapp comercial</span>
            <span className={"block text-sm text-gray-500"}>
              Os pedidos serão enviados para este número por padrão.
            </span>
            <InputMask
              {...register("phone", { required: true })}
              mask="(99)99999-9999"
              type="text"
              className="mt-1 block text-input w-full md:w-auto min-w-[300px]"
            />
            <span className={"mt-4 text-red-500"}>{errors.phone?.message}</span>
          </div>
          <div className={"mt-4"}>
            <span>Email</span>
            <span className={"block text-sm text-gray-500"}>
              Esta será seu email de acesso ao painel.
            </span>
            <input
              {...register("email", { required: true })}
              type="email"
              className="mt-1 block text-input w-full md:w-auto min-w-[300px]"
            />
          </div>

          <div className={"mt-4"}>
            <span>Defina uma senha</span>
            <span className={"block text-sm text-gray-500"}>
              Esta será sua senha de acesso ao painel.
            </span>
            <input
              {...register("admin_password", { required: true })}
              type="password"
              className="mt-1 block text-input w-full md:w-auto min-w-[300px]"
            />
          </div>
          <div className={"mt-4"}>
            <span>Repita a senha</span>
            <span className={"block text-sm text-gray-500"}>
              Informe a mesma senha do campo acima
            </span>
            <input
              {...register("admin_password_confirmation", { required: true })}
              type="password"
              className={`mt-1 block text-input w-full md:w-auto min-w-[300px] ${
                errors.admin_password_confirmation && "error"
              }`}
            />
          </div>
          <div className={"mt-5"}>
            <button
              type={"submit"}
              className={"btn rounded-lg min-w-[200px]"}
              disabled={loading}
            >
              {loading ? (
                <ReactLoading
                  type={"bubbles"}
                  color={"white"}
                  height={24}
                  width={24}
                />
              ) : (
                <span>Finalizar!</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Step2;
