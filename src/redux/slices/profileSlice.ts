import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    summonerData: {},
    status:'',
    currentPatch: ''
}

export const profileSlice = createSlice({
    name:'profileData',
    initialState,
    reducers:{
        setProfile: (state, action) =>{
            state.summonerData = action.payload
        },
        setStatus: (state, action) =>{
            state.status = action.payload
        },
        setCurrentPatch: (state, action) =>{
            state.currentPatch = action.payload
        }
    }
})

export const { setProfile , setCurrentPatch, setStatus } = profileSlice.actions

export default profileSlice.reducer