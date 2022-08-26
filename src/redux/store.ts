import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./slices/profileSlice";

export const store = configureStore({
    reducer: {
        profileData:profileSlice
    }
})