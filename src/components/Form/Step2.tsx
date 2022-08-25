import * as React from "react";
import { useWindowSize } from "../../hooks";
import { FormValues } from ".";
import { SubmitHandler, useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { toastError, validatePhoneText } from "../../utils/functions";
import ReactLoading from "react-loading";
import ecommerceAnimationData from "../../assets/ecommerce.json";
import Lottie from "react-lottie";
import Api from "../../services/Api";
import { useSwiper } from "swiper/react";

interface Step2Props {
  formData: FormValues;
  onSuccess: () => void;
}

const Step2: React.FC<Step2Props> = ({ formData, onSuccess }) => {
  const { width } = useWindowSize();
  const [loading, setLoading] = React.useState(false);
  const swiper = useSwiper();

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
    if (!validatePhoneText(data.phone)) {
      setError("phone", { message: "Telefone inválido" });
      return setLoading(false);
    }
    try {
      await Api.post(`/company`, {
        ...formData,
        phone: data.phone,
        email: data.email,
        admin_name: data.admin_name,
        admin_password: data.admin_password,
      });
      setLoading(false);
      swiper.slideNext();
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
            Você está a apenas um passo de{" "}
            <span className={"font-bold"}>vender mais</span>
          </p>{" "}
          <div>
            <span>Nome do responsável</span>
            <input
              {...register("admin_name", { required: true })}
              type="text"
              className="mt-1 block text-input w-full md:w-auto min-w-[300px]"
            />
          </div>
          <div className={"mt-3"}>
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
          <div className={"mt-3"}>
            <span>Telefone</span>
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
          <div className={"mt-3"}>
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
      <div
        className={
          "basis-1/2 order-1 md:order-2 flex flex-col justify-end items-center mb-5 md:mb-0"
        }
      >
        <div>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: ecommerceAnimationData,
            }}
            height={width >= 768 ? 370 : 300}
            width={width >= 768 ? 370 : 300}
          />
        </div>
      </div>
    </>
  );
};

export default Step2;
