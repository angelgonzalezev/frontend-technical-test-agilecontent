import { configureStore } from "@reduxjs/toolkit";
import searchSliceReducer from "../states/searchSlice";

export const store = configureStore({
	reducer: {
		search: searchSliceReducer,
	},
});
