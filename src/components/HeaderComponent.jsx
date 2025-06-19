import { Center, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { colors } from "../constants/colors";
import { useSearchParams } from "react-router";
import settingsIcon from "../assets/settings-icon.svg";
import userProfileImage from "../assets/user-profile.jpeg";

const HeaderComponent = () => {
	const [searchParams] = useSearchParams();
	const searchParam = searchParams.get("value");
	console.log("🚀 ~ Header Param:", searchParam);

	return (
		<Stack
			flexDir="row"
			alignItems="center"
			justifyContent="space-between"
			p={4}
			color={colors.GREYDARK}
			borderBottomWidth="1px"
			borderColor={colors.GREYLIGHT}
		>
			<Text fontSize="lg">
				<Text as="span" fontWeight="bold">
					Agile Content
				</Text>{" "}
				Frontend test
			</Text>
			<HStack>
				<Image src={settingsIcon} alt="Settings" />
				<Center>
					<Image src={userProfileImage} h="40px" w="40px" rounded="full" />
				</Center>
			</HStack>
		</Stack>
	);
};
export default HeaderComponent;
