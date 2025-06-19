import { Stack, Text } from "@chakra-ui/react";
import { colors } from "../constants/colors";

const FooterComponent = () => {
	return (
		<Stack
			p={4}
			bgColor={colors.GREYLIGHT}
			color={colors.GREYDARK}
			flexDir="row"
			alignItems="center"
			justifyContent="space-between"
		>
			<Text>@ Google 2021</Text>
			<Text>version: 0.1.0</Text>
		</Stack>
	);
};
export default FooterComponent;
