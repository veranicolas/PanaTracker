import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from '@react-native-async-storage/async-storage'

import friendsSlice from "./slices/friendsSlice";
import profileSlice from "./slices/profileSlice";
import splashSlice from "./slices/splashSlice";

// TODO add typescript for redux configs https://redux.js.org/usage/usage-with-typescript

const persistConfig = {
    key: 'root',
    storage,
}

// TODO check that the persisted store works

const rootReducer = combineReducers({
    profileData: profileSlice,
    friendsArrayData: friendsSlice,
    mainChampionSplash: splashSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer:persistedReducer,
    devTools:true,
})

export const persistor = persistStore(store)
