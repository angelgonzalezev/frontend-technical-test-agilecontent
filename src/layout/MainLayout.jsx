import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

const MainLayout = ({ children }) => {
	return (
		<div style={{ display: "flex", height: "100%", flexDirection: "column", justifyContent: "space-between" }}>
			<HeaderComponent />
			{children}
			<FooterComponent />
		</div>
	);
};
export default MainLayout;
