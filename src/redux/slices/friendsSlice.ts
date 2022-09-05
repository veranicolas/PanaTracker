import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RiotUserData } from "../../models/Props";

interface FriendsState {
    friends: RiotUserData[]
}

const initialState:FriendsState = {
    friends:[]
}

export const friendsSlice = createSlice({
    name:'friendsArrayData',
    initialState,
    reducers:{
        setFriends: (state, action)=>{
            state.friends = [...state.friends, action.payload]
        },
        deleteFriend: (state, action:PayloadAction<string>)=>{
            state.friends = state.friends.filter((friend:RiotUserData)=>{
                return friend.id !== action.payload
            })
        }
    }
})

export const { setFriends } = friendsSlice.actions

export default friendsSlice.reducer