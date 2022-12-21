import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	accessToken: sessionStorage.getItem("user-accesstoken")
		? sessionStorage.getItem("user-accesstoken")
		: null,
	user: sessionStorage.getItem("user-profile")
		? JSON.parse(sessionStorage.getItem("user-profile"))
		: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		LOGIN: (state, { payload }) => {
			state.accessToken = payload.accessToken;
			state.user = payload.profile;
		},
		LOGOUT: (state) => {
			state.accessToken = null;
			state.user = null;
		},
	},
});

export const { LOGIN, LOGOUT } = authSlice.actions;
export default authSlice.reducer;
