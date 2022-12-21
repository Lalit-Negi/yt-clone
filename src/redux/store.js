import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./reducers/authreducer";
import { homeVideosApi } from "../services/post";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
	reducer: {
		auth: authreducer,
		[homeVideosApi.reducerPath]: homeVideosApi.reducer,		
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(homeVideosApi.middleware),
});

setupListeners(store.dispatch);
