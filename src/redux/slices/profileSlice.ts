import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    summonerData: {},
    currentPatch: ''
}

export const profileSlice = createSlice({
    name:'profileData',
    initialState,
    reducers:{
        setProfile: (state, action) =>{
            state.summonerData = action.payload
        },
        setCurrentPatch: (state, action) =>{
            state.currentPatch = action.payload
        }
    }
})

export const { setProfile , setCurrentPatch } = profileSlice.actions

export default profileSlice.reducer