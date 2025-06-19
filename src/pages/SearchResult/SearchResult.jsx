import { Stack } from "@chakra-ui/react";
import { useSearchParams } from "react-router";

const SearchResult = () => {
	const [searchParams] = useSearchParams();
	const searchParam = searchParams.get("value");

	return (
		<Stack flexDirection="column" w="100" h="100%" px={20} gap={8} bgColor="red">
			{searchParam}
		</Stack>
	);
};
export default SearchResult;
