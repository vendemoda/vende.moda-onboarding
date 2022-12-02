import { configureStore } from "@reduxjs/toolkit";
import { formDataSlice } from "./reducers/app";

export const store = configureStore({
  reducer: {
    app: formDataSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
