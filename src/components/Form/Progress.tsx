import * as React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const Progress: React.FC<{ step: number }> = ({ step = 0 }) => {
  return (
    <div className={"scale-75 md:scale-100"}>
      <ProgressBar
        percent={step}
        filledBackground="linear-gradient(to right, #00CE92, #0226A5)"
        hasStepZero={true}
      >
        <Step transition="scale">
          {({ accomplished }: { accomplished: boolean }) => (
            <div
              className={`${
                accomplished ? "bg-secondary" : "bg-gray-500"
              } flex w-8 h-8 md:w-12 md:h-12 items-center justify-center rounded-full text-white font-extrabold`}
            >
              1
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }: { accomplished: boolean }) => (
            <div
              className={`${
                accomplished ? "bg-secondary" : "bg-gray-500"
              } flex w-8 h-8 md:w-12 md:h-12 items-center justify-center rounded-full text-white font-extrabold`}
            >
              2
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }: { accomplished: boolean }) => (
            <div
              className={`${
                accomplished ? "bg-secondary" : "bg-gray-500"
              } flex w-8 h-8 md:w-12 md:h-12 items-center justify-center rounded-full text-white font-extrabold`}
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
