import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface FormData {
  name: string;
  email: string;
  document: string;
  phone: string;
  code: string;
  admin_name: string;
  admin_password: string;
  admin_password_confirmation: string;
}

export interface ModaCenterAddress {
  modacenter_block: string;
  modacenter_address: string;
}

export const initialFormDataState: FormData = {
  name: "",
  email: "",
  document: "",
  phone: "",
  code: "",
  admin_name: "",
  admin_password: "",
  admin_password_confirmation: "",
};

export const initialModaCenterAddresDataState: ModaCenterAddress = {
  modacenter_block: "",
  modacenter_address: "",
};

export const formDataSlice = createSlice({
  name: "app_data",
  initialState: {
    companyFormData: initialFormDataState,
    modacenterAddressData: initialModaCenterAddresDataState,
    isPrivacyPolicyModalOpen: false,
    isTermsOfUseModalOpen: false,
    termsAccepted: false,
    confirmationEmail: "",
  },
  reducers: {
    setFormData: (state, action: PayloadAction<{ key: keyof FormData; value: string } | FormData>) => {
      if ("key" in action.payload) {
        state.companyFormData[action.payload.key] = action.payload.value;
      } else {
        state.companyFormData = action.payload;
      }
    },
    setModaCenterAddressData: (state, action: PayloadAction<{ key: keyof ModaCenterAddress; value: string } | ModaCenterAddress>) => {
      if ("key" in action.payload) {
        state.modacenterAddressData[action.payload.key] = action.payload.value;
      } else {
        state.modacenterAddressData = action.payload;
      }
    },
    setPrivacyPolicyModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isPrivacyPolicyModalOpen = action.payload;
    },
    setTermsOfUseModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isTermsOfUseModalOpen = action.payload;
    },
    setAcceptedTerms: (state, action: PayloadAction<boolean>) => {
      state.termsAccepted = action.payload;
    },
    setConfirmationEmail: (state, action: PayloadAction<string>) => {
      state.confirmationEmail = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFormData, setPrivacyPolicyModalOpen, setTermsOfUseModalOpen, setAcceptedTerms, setModaCenterAddressData, setConfirmationEmail } =
  formDataSlice.actions;

export default formDataSlice.reducer;
