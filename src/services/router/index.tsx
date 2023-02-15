import { SendConfirmationEmail } from "@/pages/SendConfirmationEmail";
import Step1 from "@/pages/Step1";
import Step2 from "@/pages/Step2";
import Step3Modacenter from "@/pages/Step3/Modacenter";
import Step3Vendemoda from "@/pages/Step3/Vendemoda";
import Step4Modacenter from "@/pages/Step4/Modacenter";
import Step4Vendemoda from "@/pages/Step4/Vendemoda";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Step1 />,
  },
  {
    path: "/enviar-email-confirmacao",
    element: <SendConfirmationEmail />,
  },
  {
    path: "/passo-2",
    element: <Step2 />,
  },
  {
    path: "/passo-3",
    element: <Step3Modacenter />,
  },
  {
    path: "/passo-3-vendemoda",
    element: <Step3Vendemoda />,
  },
  {
    path: "/fim-modacenter",
    element: <Step4Modacenter />,
  },
  {
    path: "/fim-vendemoda",
    element: <Step4Vendemoda />,
  },
]);

export default router;
