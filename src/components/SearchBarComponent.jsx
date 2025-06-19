import { Button, HStack } from "@chakra-ui/react";
import { Search } from "lucide-react";
import { colors } from "../constants/colors";
import InputComponent from "./InputComponent";

const SearchBarComponent = ({ searchValue, maxW, handleOnChange }) => {
	return (
		<HStack px={4} py={2} borderWidth="1px" borderRadius="4xl" borderColor={colors.GREYLIGHT} w="100%" maxW={maxW}>
			<Search color={colors.GREYDARK} size={16} />
			<InputComponent onChange={handleOnChange} name="search" value={searchValue} />
		</HStack>
	);
};
export default SearchBarComponent;
