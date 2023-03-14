import { createSlice } from "@reduxjs/toolkit";

const initialState={
    users:[],
};
export const PostSlice=createSlice({
    name: 'post',
    initialState,
    reducers: {
        addUser:(state,action)=>{
            console.log(action.payload);
            state.users = [...state.users, action.payload];
        }
    }
})
export const {addUser}= PostSlice.actions;

export default PostSlice.reducer;