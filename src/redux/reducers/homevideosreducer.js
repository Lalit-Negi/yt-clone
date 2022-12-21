import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    homeVideos:[],
    nextPageToken:null,
}

export const homeVideoSlice = createSlice({
    name:"videos",
    initialState,
    reducers:{
        HOMEVIDEOS:(state,{payload}) => {  
            state.homeVideos = payload.homeVideos;
            state.nextPageToken = payload.nextPageToken;
        },
        UPDATEHOMEVIDEOS:(state,{payload}) => {
            state.homeVideos = [...state.homeVideos , payload.homeVideos]
            state.nextPageToken = payload.nextPageToken;
        }
    }
})

export const { HOMEVIDEOS , UPDATEHOMEVIDEOS } = homeVideoSlice.actions;
export default homeVideoSlice.reducer;