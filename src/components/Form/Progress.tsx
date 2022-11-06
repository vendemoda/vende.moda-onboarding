import * as React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const Progress: React.FC<{ step: number }> = ({ step = 0 }) => {
  return (
    <div className={"scale-90 md:max-w-2xl mx-auto"}>
      <ProgressBar
        percent={step}
        filledBackground={import.meta.env.VITE_SECONDARY_COLOR}
        hasStepZero={true}
      >
        <Step transition="scale">
          {({ accomplished }: { accomplished: boolean }) => (
            <div
              className={`${
                accomplished ? "bg-secondary" : "bg-gray-300"
              } flex w-12 h-12 items-center justify-center rounded-full text-white font-bold text-2xl`}
            >
              1
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }: { accomplished: boolean }) => (
            <div
              className={`${
                accomplished ? "bg-secondary" : "bg-gray-300"
              } flex w-12 h-12 items-center justify-center rounded-full text-white font-bold text-2xl`}
            >
              2
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }: { accomplished: boolean }) => (
            <div
              className={`${
                accomplished ? "bg-secondary" : "bg-gray-300"
              } flex w-12 h-12 items-center justify-center rounded-full text-white font-bold text-2xl`}
            >
              3
            </div>
          )}
        </Step>
      </ProgressBar>
    </div>
  );
};

export default Progress;
