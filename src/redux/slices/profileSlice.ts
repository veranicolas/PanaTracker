import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    summonerData: {}
}

export const profileSlice = createSlice({
    name:'profileData',
    initialState,
    reducers:{
        setProfile: (state, action) =>{
            state.summonerData = action.payload
        }
    }
})

export const { setProfile } = profileSlice.actions

export default profileSlice.reducer