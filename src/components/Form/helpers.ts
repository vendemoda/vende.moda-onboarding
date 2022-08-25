import Api from "../../services/Api";
import { toastError } from "../../utils/functions";

export async function checkCompanyCodeAvailability(companyCode: string) {
  try {
    const { data } = await Api.get(`/company/by_code/${companyCode}`);
    return data.company ? false : true;
  } catch (error: any) {
    if (error?.response?.data?.message === "company-not-found") return true;
    toastError(error);
  }
}
