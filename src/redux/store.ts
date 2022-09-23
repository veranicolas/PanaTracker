import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from '@react-native-async-storage/async-storage'
import thunk from 'redux-thunk'

import friendsSlice from "./slices/friendsSlice";
import profileSlice from "./slices/profileSlice";
import splashSlice from "./slices/splashSlice";

// TODO add typescript for redux configs https://redux.js.org/usage/usage-with-typescript

const persistConfig = {
    key: 'root',
    storage,
} 

const rootReducer = combineReducers({
    profileData:profileSlice,
    mainChampionSplash:splashSlice,
    friendsArrayData:friendsSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools:true,
    middleware:[thunk]
})

export const persistor = persistStore(store)

