import { Stack, Text } from "@chakra-ui/react";

const SearchItemComponent = ({ item }) => {
	const { url, image, title, type, description, id } = item;
	return (
		<Stack key={id} gap={0}>
			<Text fontSize="xs">{url}</Text>
			<Text fontSize="lg" fontWeight="semibold" color="blue.600">
				{title}
			</Text>
			<Text fontSize="xs" maxW="70%">
				{description}
			</Text>
		</Stack>
	);
};
export default SearchItemComponent;
