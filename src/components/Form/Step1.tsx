import * as React from "react";
import storeAnimationData from "../../assets/store.json";
import Lottie from "react-lottie";
import { useWindowSize } from "../../hooks";
import { FormValues } from ".";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSwiper } from "swiper/react";

import ReactLoading from "react-loading";
import { checkCompanyCodeAvailability } from "./helpers";

interface Step1Props {
  onDataChange: (data: FormValues) => void;
  onSuccess: () => void;
}

const Step1: React.FC<Step1Props> = ({ onDataChange, onSuccess }) => {
  const { width } = useWindowSize();
  const [loading, setLoading] = React.useState(false);
  const swiper = useSwiper();

  const {
    handleSubmit,
    register,
    setError,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearErrors("name");
    setValue("name", e.target.value);
    // replace all spaces with regex
    setValue(
      "code",
      e.target.value
        .replace(/\s/g, "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
    );
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    clearErrors();
    if (!/^[a-zA-Z]+$/.test(data.code)) {
      setError("code", {
        message:
          "O link só deve conter letras minúsculas e não deve conter caractéres especiais",
      });
      setLoading(false);
      return;
    }
    try {
      const isCodeAvailable = await checkCompanyCodeAvailability(data.code);
      if (!isCodeAvailable) {
        setError("code", { message: "Este link não está disponível" });
        setLoading(false);
      } else {
        onDataChange(data);
        onSuccess();
        swiper.slideNext();
        window.scrollTo(0, 0);
      }
    } catch (error) {
      setLoading(false);
      setError("code", { message: "Este link não está disponível1" });
    }
  };

  return (
    <>
      <div className={"basis-1/2 flex flex-col order-2 md:order-1"}>
        <div>
          <p className={"text-3xl font-bold"}>
            Não se preocupe. Vamos ajudar você a criar o seu{" "}
            <span className={"text-secondary"}>catálogo virtual</span>
            {" "}em menos de 5 minutos!
          </p>
          <p className={" text-gray-500 text-xl mt-1"}>
            Basta fornecer alguns dados
          </p>
        </div>
        <div className={"mt-6 "}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <span>Nome da sua marca</span>
              <input
                {...register("name", { required: true })}
                type="text"
                className="mt-1 block text-input w-full md:w-auto min-w-[300px]"
                placeholder=""
                onChange={handleNameInputChange}
              />
              {errors.name && (errors.name.message ?? "Nome obrigatório")}
            </div>
            <div className={"mt-4"}>
              <span>
                <span>Link do seu catálogo</span>
              </span>
              <div className="flex flex-row items-center">
                <input
                  {...register("code", { required: true })}
                  type="text"
                  className="mt-1 block text-input w-full md:w-auto"
                  placeholder=""
                />
                <span className="ml-2 mt-1">.modacentersantacruz.com.br</span>
              </div>
              <span className={"mt-4 text-red-500"}>
                {errors.code?.message}
              </span>
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
                  <span>Criar meu catálogo!</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className={
          "basis-1/2 order-1 md:order-2 flex flex-col justify-end items-center mb-5 md:mb-0"
        }
      >
        {width > 768 && (
          <div>
            <Lottie
              options={{
                loop: false,
                autoplay: true,
                animationData: storeAnimationData,
              }}
              height={width >= 768 ? 370 : 300}
              width={width >= 768 ? 370 : 300}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Step1;
