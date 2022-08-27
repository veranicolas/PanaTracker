import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./slices/profileSlice";
import splashSlice from "./slices/splashSlice";

export const store = configureStore({
    reducer: {
        profileData:profileSlice,
        mainChampionSplash:splashSlice
    }
})