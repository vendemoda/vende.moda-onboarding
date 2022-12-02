import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormData, setAcceptedTerms, setFormData, setPrivacyPolicyModalOpen, setTermsOfUseModalOpen } from "@/services/redux/reducers/app";
import InputMask from "react-input-mask";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { toastError, validatePhoneText } from "@/helpers/functions";
import Checkbox from "@/components/Checkbox";
import { useNavigate } from "react-router-dom";

const GeneralDataForm: FC = () => {
  const { termsAccepted } = useAppSelector((state) => state.app);
  const [documentType, setDocumentType] = useState("cpf");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    clearErrors();
    if (data.admin_password !== data.admin_password_confirmation) {
      setError("admin_password_confirmation", {
        message: "As senhas não conferem",
      });
      return toastError("As senhas não conferem");
    }
    if (!validatePhoneText(data.phone)) {
      setError("phone", { message: "Telefone inválido" });
      return toastError("Telefone inválido");
    }
    console.log(data, "data");
    if (!termsAccepted) {
      return toastError("Você precisa aceitar os termos de uso");
    }
    dispatch(setFormData(data));
    navigate("/passo-2");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="admin_name">Nome da marca</label>
        <span className={"block text-sm text-gray-500"}>Informe o nome da sua marca</span>
        <input
          {...register("name", { required: true })}
          required
          type="text"
          className={`mt-1 block text-input w-full md:w-auto min-w-[300px] ${errors.name && "error"}`}
        />
        {errors.admin_name && <p>{errors.admin_name.message}</p>}
      </div>
      <div className="mt-4">
        <label htmlFor="admin_name">Nome do responsável</label>
        <span className={"block text-sm text-gray-500"}>Informe o nome completo</span>
        <input
          {...register("admin_name", { required: true })}
          required
          type="text"
          className={`mt-1 block text-input w-full md:w-auto min-w-[300px] ${errors.admin_name && "error"}`}
        />
        {errors.admin_name && <p>{errors.admin_name.message}</p>}
      </div>
      <div className={"mt-4"}>
        <div className="flex flex-row">
          <label htmlFor="document">Documento</label>
          <div className="flex flex-row items-center ml-4">
            <input
              onChange={(e) => setDocumentType(e.target.checked ? "cnpj" : "cpf")}
              id={"cnpj-check"}
              type={"checkbox"}
              value={documentType === "cnpj" ? 1 : 0}
              className={"accent-secondary"}
            />
            <label className="ml-2" htmlFor={"cnpj-check"}>
              Pessoa jurídica
            </label>
          </div>
        </div>
        <span className={"block text-sm text-gray-500"}>Informe o número do documento</span>
        <div className="flex">
          <InputMask
            {...register("document", { required: true })}
            required
            id="document"
            mask={documentType === "cpf" ? "999.999.999-99" : "99.999.999/9999-99"}
            type="text"
            alwaysShowMask={false}
            className={`mt-1 block text-input w-full md:w-auto min-w-[300px] ${errors.document && `error`}`}
          />
        </div>
      </div>
      <div className={"mt-4"}>
        <label htmlFor="whatsapp">Whatsapp comercial</label>
        <span className={"block text-sm text-gray-500"}>Os pedidos serão enviados para este número por padrão.</span>
        <InputMask
          {...register("phone", { required: true })}
          mask="(99)99999-9999"
          id="whatsapp"
          type="text"
          className={`mt-1 block text-input w-full md:w-auto min-w-[300px] ${errors.phone && `error`}`}
        />
        <span className={"mt-4 text-red-500"}>{errors.phone?.message}</span>
      </div>
      <div className={"mt-4"}>
        <label htmlFor="email">Email</label>
        <span className={"block text-sm text-gray-500"}>Esta será seu email de acesso ao painel.</span>
        <input
          {...register("email", { required: true })}
          type="email"
          id="email"
          className={`mt-1 block text-input w-full md:w-auto min-w-[300px] ${errors.email && `error`}`}
        />
      </div>

      <div className={"mt-4"}>
        <label htmlFor="password">Defina uma senha</label>
        <span className={"block text-sm text-gray-500"}>Esta será sua senha de acesso ao painel.</span>
        <input
          {...register("admin_password", { required: true })}
          type="password"
          id="password"
          className={`mt-1 block text-input w-full md:w-auto min-w-[300px] ${errors.admin_password && `error`}`}
        />
      </div>
      <div className={"mt-4"}>
        <label htmlFor="repassword">Repita a senha</label>
        <span className={"block text-sm text-gray-500"}>Informe a mesma senha do campo acima</span>
        <input
          {...register("admin_password_confirmation", {
            required: true,
          })}
          id="repassword"
          type="password"
          className={`mt-1 block text-input w-full md:w-auto min-w-[300px] ${errors.admin_password_confirmation && "error"}`}
        />
      </div>
      <div className="flex items-center gap-4 my-5 max-w-sm">
        <Checkbox
          id={"policy-check"}
          onChange={(e) => {
            dispatch(setAcceptedTerms(e.target.checked));
          }}
        />
        <label className="text-slate-600" htmlFor="policy-check">
          Concordo que li e estou de acordo com a{" "}
          <button
            type={"button"}
            className={"text-secondary underline"}
            onClick={() => {
              dispatch(setPrivacyPolicyModalOpen(true));
            }}
          >
            Política de privacidade
          </button>{" "}
          e os{" "}
          <button
            type={"button"}
            className={"text-secondary underline"}
            onClick={() => {
              dispatch(setTermsOfUseModalOpen(true));
            }}
          >
            Termos de Uso
          </button>
        </label>
      </div>
      <div>
        <button type={"submit"} className={"btn rounded-lg min-w-[200px]"}>
          <span>Finalizar!</span>
        </button>
      </div>
    </form>
  );
};

export default GeneralDataForm;
