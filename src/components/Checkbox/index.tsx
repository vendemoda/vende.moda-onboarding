import { FC, useRef } from "react";
import { BsCheckLg } from "react-icons/bs";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox: FC<CheckboxProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="relative mt-2">
      <input
        ref={inputRef}
        type={"checkbox"}
        {...props}
        className={`appearance-none outline-none h-6 w-6 border-[1px] border-gray-600 checked:bg-secondary checked:border-gray-300 rounded-md ${props.className}`}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold" onClick={props.onClick}>
        <BsCheckLg
          size={12}
          className="mb-1"
          onClick={() => {
            inputRef?.current?.click();
          }}
        />
      </div>
    </div>
  );
};

export default Checkbox;
