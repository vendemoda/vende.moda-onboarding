import { useAppSelector } from "@/hooks/redux";
import { FC } from "react";
import { IoClose } from "react-icons/io5";
import { Props } from "react-modal";
import { Link } from "react-router-dom";
import Modal from "../Modal";

const VendemodaModal: FC<Props> = (props) => {
  return (
    <Modal {...props}>
      <div className="w-full flex justify-end">
        <div
          onClick={(e) => {
            props.onRequestClose?.(e);
          }}
        >
          <IoClose size={32} />
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold">Não se preocupe</h2>
        <p className="my-5"> O Catálogo Virtual é uma parceria do Moda Center com a Vende Moda.</p>{" "}
        <p className="my-5">
          Ele é GRÁTIS para as marcas que possuem ponto físico no Moda Center. Mas você também pode adquirir seu catálogo pagando uma pequena taxa por mês!
        </p>
        <p className="my-5">Selecione um dos planos abaixo e teste um mês sem compromisso!</p>
        <div className="mt-6 mb-10">
          <div className="bg-white mx-auto drop-shadow-2xl shadow-2xl rounded-xl w-full flex justify-center md:max-w-[250px]">
            <div className="flex justify-center flex-col items-center">
              <p className="text-[#2546BB] text-3xl font-bold text-center my-4">Teste 30 dias GRÁTIS</p>
              <ul className="list-disc text-slate-500">
                <li className="my-3">Produtos ilimitados</li>
                <li className="my-3">Pedidos ilimitados</li>
                <li className="my-3">Painel de controle</li>
                <li className="my-3">Pagamento integrado</li>
                <li className="my-3">Antifraude</li>
                <li className="my-3">Suporte via WhatsApp</li>
              </ul>
              <Link to={"/passo-3-vendemoda"} className="p-4 bg-primary text-white font-bold rounded-lg self-center w-[80%] text-center">
                Eu quero!
              </Link>
              <p className="text-[#2546BB] text-xl font-bold text-center my-4">R$49,90/mês</p>
            </div>
          </div>
        </div>
        <div className="w-full text-center">
          <a href={"https://vendemoda.com.br"} className={"text-red-500"} target="_blank" rel="noopener noreferrer">
            Não quero agora
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default VendemodaModal;
