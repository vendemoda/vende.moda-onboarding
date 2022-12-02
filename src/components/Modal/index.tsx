import { defaultStyle } from "@/config/reactModal";
import { useWindowSize } from "@/hooks/useWindowSize";
import { FC } from "react";
import ReactModal, { Props } from "react-modal";

ReactModal.setAppElement("#root");
const Modal: FC<Props> = ({ children, ...props }) => {
  const { width } = useWindowSize();

  return (
    <ReactModal
      {...props}
      style={{ content: { ...defaultStyle.content, maxWidth: width >= 768 ? "500px" : "92%", maxHeight: width >= 768 ? "500px" : "80%" } }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
