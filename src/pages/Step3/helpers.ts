import { toastError } from "@/helpers/functions";
import Api from "@/services/Api";

export async function checkCompanyCodeAvailability(companyCode: string, platform: "vendemoda" | "modacenter") {
  const url =
    platform === "vendemoda"
      ? `https://api.vende.moda/v1/company/by_code/${companyCode}`
      : `https://apicatalogo.modacentersantacruz.com.br/v1/company/by_code/${companyCode}`;
  try {
    const { data } = await Api.get(url);
    return data.company ? false : true;
  } catch (error: any) {
    if (error?.response?.data?.message === "company-not-found") return true;
    toastError(error);
  }
}
