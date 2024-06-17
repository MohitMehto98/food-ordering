import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userInfo: {
		userId: "",
		userName: "",
		profileUrl: "",
		loginStatus: false,
	},
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action) => {
			state.userId = action.payload.userId;
			state.userName = action.payload.userName;
			state.profileUrl = action.payload.profileUrl;
			state.loginStatus = true;
		},
		logout: (state, action) => {
			state.userId = null;
			state.userName = null;
			state.profileUrl = null;
			state.loginStatus = false;
		},
	},
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
