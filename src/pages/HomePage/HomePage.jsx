import { Button, Center, Image } from "@chakra-ui/react";
import GoogleIcon from "../../assets/google_logo.png";
import SearchBarComponent from "../../components/SearchBarComponent";
import { useState } from "react";
import { colors } from "../../constants/colors";
import { useNavigate } from "react-router";
import { PublicRoutes } from "../../routes/routes";

const HomePage = () => {
	const navigate = useNavigate();

	const [searchValue, setSearchValue] = useState("");

	const handleSearch = () => {
		navigate(`${PublicRoutes.Search}?value=${searchValue}`);
	};

	const handleKeyDown = (e) => {
		if (searchValue && e.key === "Enter") {
			e.preventDefault();
			handleSearch();
		}
	};

	const handleClick = (e) => {
		if (e.target.name === "search") {
			handleSearch();
		}
	};

	const handleOnChangeInput = (e) => {
		setSearchValue(e.target.value);
	};

	const handleCleanSearchValue = () => {
		setSearchValue("");
	};

	return (
		<Center flexDirection="column" w="100" h="100%" px={20} gap={8}>
			<Image src={GoogleIcon} maxW="272px" />
			<SearchBarComponent
				maxW="720px"
				handleOnChange={handleOnChangeInput}
				handleSearch={handleKeyDown}
				searchValue={searchValue}
				cleanSearchValue={handleCleanSearchValue}
			/>

			<Button
				onClick={handleClick}
				disabled={!searchValue}
				bgColor={colors.GREYLIGHT}
				color={colors.GREYDARK}
				_focusVisible={{ border: "none", boxShadow: "none", outline: "none" }}
				_hover={{ border: "none" }}
				name="search"
			>
				Buscar
			</Button>
		</Center>
	);
};
export default HomePage;
