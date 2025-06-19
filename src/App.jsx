import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import SearchResult from "./pages/SearchResult/SearchResult";
import { PublicRoutes } from "./routes/routes";
import MainLayout from "./layout/MainLayout";

function App() {
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
			<Route path={PublicRoutes.Search} element={<SearchResult />} />
		</Routes>
	);
}

export default App;
