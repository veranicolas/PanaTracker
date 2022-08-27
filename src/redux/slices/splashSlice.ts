import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg'
}

const splashSlice = createSlice({
    name:'mainChampionSplash',
    initialState,
    reducers:{
        setSplash:(state, action)=>{
            state.splash = action.payload
        }
    }
})

export const { setSplash } = splashSlice.actions

export default splashSlice.reducer