import VendemodaFooter from "@/components/Footers/Vendemoda";
import ModacenterHeader from "@/components/Headers/Modacenter";
import { toastError } from "@/helpers/functions";
import { useAppDispatch } from "@/hooks/redux";
import Api from "@/services/Api";
import { setConfirmationEmail, setEmailValidatedToken } from "@/services/redux/reducers/app";
import React from "react";
import ReactLoading from "react-loading";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ReceivedToken = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const validateToken = async () => {
    try {
      const { data } = await Api.post(`/leads/validate_email_confirmation_token/?token=${token}`);
      if (data?.ok) {
        toast("Email confirmado com sucesso!");
        console.log(data);
        dispatch(setConfirmationEmail(data?.email ?? ""));
        dispatch(setEmailValidatedToken(token ?? ""));
        navigate("/passo-1");
      }
    } catch (error) {
      toastError(error);
    }
  };

  React.useEffect(() => {
    if (!token) return;
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
