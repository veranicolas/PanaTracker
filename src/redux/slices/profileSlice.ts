import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    summonerName: ''
}

export const profileSlice = createSlice({
    name:'profileData',
    initialState,
    reducers:{
        setProfile: (state, action) =>{
            state.summonerName = action.payload
        }
    }
})

export const { setProfile } = profileSlice.actions

export default profileSlice.reducer