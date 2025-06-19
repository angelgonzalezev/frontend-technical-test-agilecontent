import { Stack } from "@chakra-ui/react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

const MainLayout = ({ children }) => {
	return (
		<Stack w="100%" minH="100vh" h="100%" flexDirection="column" justifyContent="space-between">
			<HeaderComponent />
			{children}
			<FooterComponent />
		</Stack>
	);
};
export default MainLayout;
