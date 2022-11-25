import * as React from "react";
import "react-step-progress-bar/styles.css";
import Progress from "./Progress";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import supportButton from "../../assets/support.png";

import "swiper/css";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export interface FormValues {
  name: string;
  email: string;
  document: string;
  phone: string;
  code: string;
  admin_name: string;
  admin_password: string;
  admin_password_confirmation: string;
}

const Form: React.FC = () => {
  const [progress, setProgress] = React.useState(0);
  const [data, setData] = React.useState<FormValues>({
    name: "",
    email: "",
    document: "",
    phone: "",
    code: "",
    admin_name: "",
    admin_password: "",
    admin_password_confirmation: "",
  });

  return (
    <>
    <a style={{ position: "fixed", right: 7 , bottom: 7, zIndex: 2 }} href={'https://api.whatsapp.com/send?phone=5581993897649&text=Olá, gostaria de mais informações sobre o catálogo'} target="_blank" rel="noopener noreferrer">
      <img src={supportButton} style={{ height: 57, width: 142}} />
    </a>
    <div className={"pb-10 p-4"}>
      <div className={"mt-8"}>
        <Progress step={progress} />
      </div>
      <Swiper className="mx-auto" noSwiping={true} noSwipingClass="no-swap">
        <SwiperSlide className="mt-5 md:mt-20 flex flex-col md:flex-row items-center nosw no-swap">
          <Step1
            onDataChange={(formData) => {
              setData({ ...data, ...formData });
            }}
            onSuccess={() => {
              setProgress(51);
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="mt-5 md:mt-20 flex flex-col md:flex-row items-center nosw no-swap">
          <Step2
            formData={data}
            onSuccess={() => {
              setProgress(100);
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="mt-0 md:mt-20 flex flex-col md:flex-row justify-center nosw no-swap">
          <Step3 url={`https://${data.code}.modacentersantacruz.com.br`} />
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  );
};

export default Form;
