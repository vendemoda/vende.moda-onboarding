import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import router from "@/services/router";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import "./styles/index.css";
import PrivacyAndTermsModals from "./components/PrivacyAndTermsModal";
import ContactButton from "./components/ContactButton";

const App: FC = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
      <PrivacyAndTermsModals />
      <ContactButton />
    </>
  );
};

export default App;
