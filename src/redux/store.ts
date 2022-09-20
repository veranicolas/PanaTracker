import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from '@react-native-async-storage/async-storage'

import friendsSlice from "./slices/friendsSlice";
import profileSlice from "./slices/profileSlice";
import splashSlice from "./slices/splashSlice";

// TODO add typescript for redux configs https://redux.js.org/usage/usage-with-typescript

export const store = configureStore({
    reducer: {
        profileData:profileSlice,
        mainChampionSplash:splashSlice,
        friendsArrayData:friendsSlice
    },
    devTools:true
})

