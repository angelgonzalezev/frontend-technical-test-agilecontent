import { configureStore } from "@reduxjs/toolkit";
import animalsSliceReducer from "../states/animalsSlice";

export const store = configureStore({
	reducer: {
		animals: animalsSliceReducer,
	},
});
