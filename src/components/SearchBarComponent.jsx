import { Button, HStack, Icon } from "@chakra-ui/react";
import { Search, X } from "lucide-react";
import { colors } from "../constants/colors";
import InputComponent from "./InputComponent";

const SearchBarComponent = ({
	searchValue,
	maxW,
	handleOnChange,
	w = "100%",
	px = 4,
	py = 2,
	handleSearch,
	cleanSearchValue,
}) => {
	return (
		<HStack px={px} py={py} borderWidth="1px" borderRadius="4xl" borderColor={colors.GREYLIGHT} w={w} maxW={maxW}>
			<Search color={colors.GREYDARK} size={16} />
			<InputComponent
				onChange={handleOnChange}
				name="search"
				value={searchValue}
				w="100%"
				handleSearch={handleSearch}
			/>
			{searchValue && (
				<Icon color={colors.GREYDARK} size={22} cursor="pointer" onClick={cleanSearchValue}>
					<X />
				</Icon>
			)}
		</HStack>
	);
};
export default SearchBarComponent;
