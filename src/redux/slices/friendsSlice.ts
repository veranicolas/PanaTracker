import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RiotUserData } from "../../models/Props";

interface FriendsState {
    friends: RiotUserData[],
}

const initialState:FriendsState = {
    friends:[],
}

const friendsSlice = createSlice({
    name:'friendsArrayData',
    initialState,
    reducers:{
        addFriend: (state, action)=>{
            if(state.friends.length){
                state.friends = [...state.friends, action.payload]
            } else {
                state.friends = [action.payload]
            }
            
        },
        deleteFriend: (state, action:PayloadAction<string>)=>{
            state.friends = state.friends.filter((friend:RiotUserData)=>{
                return friend.id !== action.payload
            })
        },
        updateFriends: (state, action) =>{
            if(state.friends.length){
                state.friends = [...action.payload]
            } else {
                console.log('nada para actualizar')
            }            
        },
        deleteAllFriends: (state, action?)=>{
            state.friends = []
        }
    }
})

export const { addFriend, deleteAllFriends, deleteFriend, updateFriends } = friendsSlice.actions

export default friendsSlice.reducer