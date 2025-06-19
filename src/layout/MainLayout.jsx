import { Stack } from "@chakra-ui/react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

const MainLayout = ({ children }) => {
	return (
		<Stack w="100%" h="100vh" flexDirection="column">
			<HeaderComponent />
			{children}
			<FooterComponent />
		</Stack>
	);
};
export default MainLayout;
