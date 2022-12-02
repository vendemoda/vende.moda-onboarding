import { toast, TypeOptions } from "react-toastify";

export function toastError(error: any, type?: TypeOptions) {
  let message: string = "Erro desconhecido";
  if (error) {
    if (error.response?.data?.userMessage)
      message = error.response.data.userMessage;
    else if (error.response?.data?.message)
      message = error.response.data.message;
    else if (error.userMessage) message = error.userMessage;
    else if (error.message) message = error.message;
    else if (typeof error === "string") message = error;
  }
  toast(message, { type: type ?? "error" });
}

export const validatePhoneText = (value: string): boolean => {
  const regex = /\([1-9]\d\)9\d{4}-\d{4}/g;
  const result = value.match(regex);
  return result ? true : false;
};
