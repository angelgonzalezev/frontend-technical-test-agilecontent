import { Button, Center, Image } from "@chakra-ui/react";
import GoogleIcon from "../../assets/google_logo.png";
import SearchBarComponent from "../../components/SearchBarComponent";
import { useState } from "react";
import { colors } from "../../constants/colors";
import { useNavigate } from "react-router";
import { PublicRoutes } from "../../routes/routes";

const HomePage = () => {
	const navigate = useNavigate();

	const [searchValue, setSearchValue] = useState();

	const handleOnSearch = () => {
		navigate(`${PublicRoutes.Search}?value=${searchValue}`);
	};

	const handleOnChangeInput = (e) => {
		setSearchValue(e.target.value);
	};

	return (
		<Center flexDirection="column" w="100" h="100%" px={20} gap={8}>
			<Image src={GoogleIcon} maxW="272px" />
			<SearchBarComponent maxW="720px" handleOnChange={handleOnChangeInput} />

			<Button
				onClick={handleOnSearch}
				disabled={!searchValue}
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
