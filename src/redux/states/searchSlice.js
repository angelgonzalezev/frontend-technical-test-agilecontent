import { createSlice } from "@reduxjs/toolkit";
import { clearLocalStorage, persistLocalStorage } from "../../utilities/localStorage";

export const EmptySearchState = {
	search: "",
};

export const searchSlice = createSlice({
	name: "search",
	initialState: localStorage.getItem("search") ? JSON.parse(localStorage.getItem("search")) : EmptySearchState,
	reducers: {
		createSearch: (_state, action) => {
			persistLocalStorage("search", action.payload);
			return action.payload;
		},
		updateSearch: (state, action) => {
			const result = { ...state, ...action.payload };
			persistLocalStorage("search", result);
			return result;
		},
		resetSearch: () => {
			clearLocalStorage("search");
			return EmptySearchState;
		},
	},
});

export const { createSearch, updateSearch, resetSearch } = searchSlice.actions;

export default searchSlice.reducer;
