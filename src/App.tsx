import * as React from "react";
import Header from "./components/Header";
import "./styles/index.css";

import Form from "./components/Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <div className={"h-screen"}>
      <Header />
      <div className={"container mx-auto md:px-20 md:max-w-7xl"}>
        <Form />
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
