import { FC } from "react";
import supportButton from "@/assets/support.png";

const ContactButton: FC = () => {
  return (
    <a
      style={{ position: "fixed", right: 7, bottom: 7, zIndex: 2 }}
      href={"https://api.whatsapp.com/send?phone=5581993897649&text=Olá, gostaria de mais informações sobre o catálogo"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={supportButton} style={{ height: 57, width: 142 }} />
    </a>
  );
};

export default ContactButton;
