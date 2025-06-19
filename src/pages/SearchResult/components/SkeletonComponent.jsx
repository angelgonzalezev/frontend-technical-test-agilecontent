import { SkeletonText, Stack, VStack } from "@chakra-ui/react";

const SkeletonComponent = () => {
	return (
		<Stack gap="6" maxW="xl">
			<VStack width="full" gap={3}>
				<SkeletonText noOfLines={1} w={"sm"} />
				<SkeletonText noOfLines={1} w={"lg"} />
				<SkeletonText noOfLines={1} w={"2xl"} />
			</VStack>
		</Stack>
	);
};
export default SkeletonComponent;
