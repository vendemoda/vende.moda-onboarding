import * as React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const ProgressIndicator: React.FC<{ step: number; color?: string }> = ({ step = 0, color }) => {
  return (
    <div className={"scale-75 md:max-w-xl mx-auto"}>
      <ProgressBar percent={step} filledBackground={color ?? "#9841E2"} hasStepZero={true}>
        <Step transition="scale">
          {({ accomplished }: { accomplished: boolean }) => (
            <div
              className={`${
                accomplished ? (color ? `bg-[${color}]` : "bg-secondary") : "bg-gray-300"
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
                accomplished ? (color ? `bg-[${color}]` : "bg-secondary") : "bg-gray-300"
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
                accomplished ? (color ? `bg-[${color}]` : "bg-secondary") : "bg-gray-300"
              } flex w-12 h-12 items-center justify-center rounded-full text-white font-bold text-2xl`}
            >
              3
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }: { accomplished: boolean }) => (
            <div
              className={`${
                accomplished ? (color ? `bg-[${color}]` : "bg-secondary") : "bg-gray-300"
              } flex w-12 h-12 items-center justify-center rounded-full text-white font-bold text-2xl`}
            >
              4
            </div>
          )}
        </Step>
      </ProgressBar>
    </div>
  );
};

export default ProgressIndicator;
