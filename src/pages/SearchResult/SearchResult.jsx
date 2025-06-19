import { Stack } from "@chakra-ui/react";
import { useSearchParams } from "react-router";

const SearchResult = () => {
	const [searchParams] = useSearchParams();
	const searchParam = searchParams.get("value");
	console.log("🚀 ~ SearchResult ~ searchParam:", searchParam);

	return <Stack>Test</Stack>;
};
export default SearchResult;
