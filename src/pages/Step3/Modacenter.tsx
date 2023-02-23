import storeAnimation from "@/assets/store.json";
import ModacenterFooter from "@/components/Footers/Modacenter";
import ModacenterHeader from "@/components/Headers/Modacenter";
import ProgressIndicator from "@/components/ProgressIndicator";
import { toastError } from "@/helpers/functions";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useWindowSize } from "@/hooks/useWindowSize";
import Api from "@/services/Api";
import { setFormData } from "@/services/redux/reducers/app";
import { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import { checkCompanyCodeAvailability } from "./helpers";

interface FormValues {
  code: string;
}

const Step3Modacenter: FC = () => {
  const { width } = useWindowSize();
  const { companyFormData, modacenterAddressData, confirmationEmail } = useAppSelector((state) => state.app);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    clearErrors();
    if (!/^[a-zA-Z0-9]+$/.test(data.code)) {
      setError("code", {
        message: "O link só deve conter letras minúsculas e números. Não deve conter caractéres especiais",
      });
      setLoading(false);
      return;
    }

    try {
      const isCodeAvailable = await checkCompanyCodeAvailability(data.code, "modacenter");
      if (!isCodeAvailable) {
        setError("code", { message: "Este endereço já está sendo usado. Por favor, informe outro." });
        return setLoading(false);
      }
    } catch (error) {
      return toastError(error);
    }
    try {
      await Api.post(`/company`, {
        ...companyFormData,
        ...modacenterAddressData,
        email: confirmationEmail,
        code: data.code,
      });
      const login = await Api.post(`/user/login`, {
        username: confirmationEmail,
        password: companyFormData.admin_password,
      });
      console.log(login, "login response");
      console.log("login.data.token", login.data.token);
      dispatch(setFormData({ key: "code", value: data.code }));
      setLoading(false);
      navigate("/fim-modacenter");
    } catch (error) {
      setLoading(false);
      return toastError(error);
    }
  };

  useEffect(() => {
    if (!companyFormData.admin_name) {
      navigate("/");
    }
  }, [companyFormData]);

  return (
    <div className="h-screen flex flex-col justify-between">
      <ModacenterHeader />
      <div className="my-10">
        <ProgressIndicator step={72} />
      </div>
      <div className="flex justify-center mx-auto p-4 max-w-[1000px] pb-10">
        <div className={"self-center mx-auto"}>
          <div className="mb-5">
            <p className={"text-3xl font-bold"}>Crie o endereço do seu catálogo virtual</p>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={"mt-4"}>
                <div className="flex flex-row items-center mb-2">
                  <input {...register("code", { required: true })} required type="text" className="mt-1 block text-input w-full md:w-auto" placeholder="" />
                  <span className="ml-2 mt-1">.modacentersantacruz.com.br</span>
                </div>
                <span className={"text-red-500"}>{errors.code?.message}</span>
              </div>
              <div className="mt-4">
                <button type="submit" className="btn rounded-lg w-full font-bold" disabled={loading}>
                  {loading ? `Enviando...` : `Criar meu catálogo!`}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className={"self-center"}>
          {width > 768 && (
            <div>
              <Lottie
                options={{
                  loop: false,
                  autoplay: true,
                  animationData: storeAnimation,
                }}
                height={width >= 768 ? 370 : 300}
                width={width >= 768 ? 370 : 300}
              />
            </div>
          )}
        </div>
      </div>
      <ModacenterFooter />
    </div>
  );
};

export default Step3Modacenter;
