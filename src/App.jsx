import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import SearchResult from "./pages/SearchResult/SearchResult";
import { PublicRoutes } from "./routes/routes";

function App() {
	return (
		<Routes>
			<Route path={PublicRoutes.Home} element={<HomePage />} />
			<Route path={PublicRoutes.Search} element={<SearchResult />} />
		</Routes>
	);
}

export default App;
