import { Button, HStack } from "@chakra-ui/react";
import { Search } from "lucide-react";
import { colors } from "../constants/colors";
import InputComponent from "./InputComponent";

const SearchBarComponent = ({ searchValue, maxW, handleOnChange, w = "100%", px = 4, py = 2, handleSearch }) => {
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
		</HStack>
	);
};
export default SearchBarComponent;
