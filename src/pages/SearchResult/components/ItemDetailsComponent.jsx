import { Image, Stack, Text } from "@chakra-ui/react";
import { colors } from "../../../constants/colors";

const ItemDetailsComponent = ({ item }) => {
	const { url, title, description, id } = item;

	return (
		<Stack borderWidth="1px" borderColor={colors.GREYLIGHT} borderRadius="sm" key={id} p={3}>
			<Image src={item.image} h="100%" />
			<Text fontSize="xs">{url}</Text>
			<Text fontSize="lg" fontWeight="semibold">
				{title}
			</Text>
			<Text fontSize="xs">{description}</Text>
		</Stack>
	);
};
export default ItemDetailsComponent;
