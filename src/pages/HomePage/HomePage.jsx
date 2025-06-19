import { Button, Center, Image } from "@chakra-ui/react";
import GoogleIcon from "../../assets/google_logo.png";
import SearchBarComponent from "../../components/SearchBarComponent";
import { useState } from "react";
import { colors } from "../../constants/colors";

const HomePage = () => {
	const [searchValue, setSearchValue] = useState();
	console.log("🚀 ~ HomePage ~ searchValue:", searchValue);

	const handleOnSearch = () => {};

	const handleOnChangeInput = (e) => {
		setSearchValue(e.target.value);
	};

	return (
		<Center flexDirection="column" w="100" h="100%" px={20} gap={8}>
			<Image src={GoogleIcon} maxW="272px" />
			<SearchBarComponent maxW="720px" handleOnChange={handleOnChangeInput} />

			<Button
				onClick={handleOnSearch}
				_disabled={searchValue}
				bgColor={colors.GREYLIGHT}
				color={colors.GREYDARK}
				_focusVisible={{ border: "none", boxShadow: "none", outline: "none" }}
				_hover={{ border: "none" }}
			>
				Buscar
			</Button>
		</Center>
	);
};
export default HomePage;
