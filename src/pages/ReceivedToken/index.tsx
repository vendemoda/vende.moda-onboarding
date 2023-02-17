import VendemodaFooter from "@/components/Footers/Vendemoda";
import ModacenterHeader from "@/components/Headers/Modacenter";
import { toastError } from "@/helpers/functions";
import Api from "@/services/Api";
import React from "react";
import ReactLoading from "react-loading";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export const ReceivedToken = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const [isToastShown, setIsToastShown] = React.useState(false);

  const validateToken = async () => {
    console.log("called", isToastShown);
    try {
      const { data } = await Api.post(`/leads/validate_email_confirmation_token/?token=${token}`);
      if (data?.ok && !isToastShown) {
        toast("Email confirmado com sucesso!");
      }
    } catch (error) {
      toastError(error);
    }
    setIsToastShown(true);
  };

  React.useEffect(() => {
    if (!token || isToastShown) return;
    validateToken();
  }, []);

  return (
    <div className="h-screen flex flex-col justify-between">
      <ModacenterHeader />
      <div className="w-full flex flex-col items-center">
        <ReactLoading type={"spinningBubbles"} color={"#808080"} height={"100px"} width={"100px"} />
      </div>

      <VendemodaFooter />
    </div>
  );
};
