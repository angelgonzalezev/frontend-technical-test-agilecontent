import { Center, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { colors } from "../constants/colors";
import { useNavigate, useSearchParams } from "react-router";
import settingsIcon from "../assets/settings-icon.svg";
import userProfileImage from "../assets/user-profile.jpeg";
import GoogleIcon from "../assets/google_logo.png";
import SearchBarComponent from "./SearchBarComponent";
import { useEffect, useState } from "react";
import { PublicRoutes } from "../routes/routes";

const HeaderComponent = () => {
	// Get existing search param
	const [searchParams] = useSearchParams();
	const searchParam = searchParams.get("value");

	const [searchValue, setSearchValue] = useState();
	const navigate = useNavigate();

	// Sync param state when it changes
	useEffect(() => {
		setSearchValue(searchParam);
	}, [searchParam]);

	const handleOnSearch = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();

			navigate(`${PublicRoutes.Search}?value=${searchValue}`);
		}
	};

	const handleOnChangeInput = (e) => {
		setSearchValue(e.target.value);
	};

	const handleHomeRedirection = () => {
		setSearchValue(null);
		navigate(PublicRoutes.Home);
	};

	const handleCleanSearchValue = () => {
		setSearchValue("");
	};

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
			{typeof searchValue === "string" ? (
				<Stack flexDir="row" alignItems="center" w="100%">
					<Image src={GoogleIcon} maxW="92px" onClick={handleHomeRedirection} cursor="pointer" />
					<SearchBarComponent
						searchValue={searchValue}
						px={2}
						py={0}
						maxW="300px"
						handleOnChange={handleOnChangeInput}
						handleSearch={handleOnSearch}
						cleanSearchValue={handleCleanSearchValue}
					/>
				</Stack>
			) : (
				<Text fontSize="lg">
					<Text as="span" fontWeight="bold">
						Agile Content
					</Text>{" "}
					Frontend test
				</Text>
			)}
			<HStack>
				<Image src={settingsIcon} alt="Settings" />
				<Center h="40px" w="40px">
					<Image src={userProfileImage} rounded="full" />
				</Center>
			</HStack>
		</Stack>
	);
};
export default HeaderComponent;
