import * as React from "react";
import "react-step-progress-bar/styles.css";
import Progress from "./Progress";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export interface FormValues {
  name: string;
  email: string;
  phone: string;
  code: string;
  admin_name: string;
  admin_password: string;
}

const Form: React.FC = () => {
  const [progress, setProgress] = React.useState(0);
  const [data, setData] = React.useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    code: "",
    admin_name: "",
    admin_password: "",
  });

  return (
    <div className={"pb-10"}>
      <div className={"max-w-xl mt-14 mx-auto"}>
        <Progress step={progress} />
      </div>
      <Swiper
        className="max-w-4xl mx-auto"
        noSwiping={true}
        noSwipingClass="no-swap"
      >
        <SwiperSlide className="mt-5 md:mt-20 flex flex-col md:flex-row items-center nosw no-swap px-1">
          <Step1
            onDataChange={(formData) => {
              setData({ ...data, ...formData });
            }}
            onSuccess={() => {
              setProgress(51);
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="mt-5 md:mt-20 flex flex-col md:flex-row items-center nosw no-swap px-1">
          <Step2
            formData={data}
            onSuccess={() => {
              setProgress(100);
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="mt-0 md:mt-20 flex flex-col md:flex-row justify-center nosw no-swap px-1">
          <Step3 url={`https://${data.code}.modacentersantacruz.com.br`} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Form;
