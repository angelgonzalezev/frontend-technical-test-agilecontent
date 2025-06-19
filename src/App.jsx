import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import SearchResult from "./pages/SearchResult/SearchResult";
import { PublicRoutes } from "./routes/routes";
import MainLayout from "./layout/MainLayout";
import { useAllFakeAnimals } from "./hooks/useFakeAnimals";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { createAnimals } from "./redux/states/animalsSlice";

function App() {
	const { animalData, animalTypes } = useAllFakeAnimals();
	const dispatch = useDispatch();

	useEffect(() => {
		if (animalData) {
			const initAnimals = () => {
				dispatch(
					createAnimals({
						animals: animalData,
						types: animalTypes,
					})
				);
			};
			initAnimals();
		}
	}, [animalData, animalTypes, dispatch]);

	return (
		<Routes>
			<Route
				path={PublicRoutes.Home}
				element={
					<MainLayout>
						<HomePage />
					</MainLayout>
				}
			/>
			<Route
				path={PublicRoutes.Search}
				element={
					<MainLayout>
						<SearchResult />
					</MainLayout>
				}
			/>
		</Routes>
	);
}

export default App;
