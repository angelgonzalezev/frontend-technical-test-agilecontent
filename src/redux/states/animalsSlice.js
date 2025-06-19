import { createSlice } from "@reduxjs/toolkit";
import { clearLocalStorage, persistLocalStorage } from "../../utilities/localStorage";

export const EmptyAnimalsState = {
	animals: "",
};

export const animalsSlice = createSlice({
	name: "animals",
	initialState: localStorage.getItem("animals") ? JSON.parse(localStorage.getItem("animals")) : EmptyAnimalsState,
	reducers: {
		createAnimals: (_state, action) => {
			persistLocalStorage("animals", action.payload);
			return action.payload;
		},
		updateAnimals: (state, action) => {
			const result = { ...state, ...action.payload };
			persistLocalStorage("animals", result);
			return result;
		},
		resetAnimals: () => {
			clearLocalStorage("animals");
			return EmptyAnimalsState;
		},
	},
});

export const { createAnimals, updateAnimals, resetAnimals } = animalsSlice.actions;

export default animalsSlice.reducer;
