import { Stack, Text } from "@chakra-ui/react";

const SearchItemComponent = ({ item, handleSelectItem }) => {
	const { url, title, description, id } = item;
	return (
		<Stack key={id} gap={0}>
			<Text fontSize="xs">{url}</Text>
			<Text
				fontSize="lg"
				fontWeight="semibold"
				color="blue.600"
				cursor="pointer"
				onClick={() => handleSelectItem(item)}
			>
				{title}
			</Text>
			<Text fontSize="xs">{description}</Text>
		</Stack>
	);
};
export default SearchItemComponent;
