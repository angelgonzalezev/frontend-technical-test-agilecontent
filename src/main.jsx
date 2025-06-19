import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { BrowserRouter } from "react-router";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/stores/store.js";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ReduxProvider store={store}>
			<Provider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		</ReduxProvider>
	</StrictMode>
);
