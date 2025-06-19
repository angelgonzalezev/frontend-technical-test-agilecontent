import { Center, Image, Stack, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const ItemDetailsDialogComponent = ({ selectedItem, setOpenDetailsDialog }) => {
	const dialogRef = useRef();

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dialogRef.current && !dialogRef.current.contains(event.target)) {
				setOpenDetailsDialog(false); // your close function
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<Center w="100vw" h="100vh" bgColor="rgba(0, 0, 0, 0.5)" position="absolute" top={0} left={0} px={10}>
			<Stack ref={dialogRef} borderWidth="1px" bgColor="white" borderRadius="sm" key={selectedItem.id} p={3}>
				<Image src={selectedItem.image} w="100%" />
				<Text fontSize="xs">{selectedItem.url}</Text>
				<Text fontSize="lg" fontWeight="semibold">
					{selectedItem.title}
				</Text>
				<Text fontSize="xs">{selectedItem.description}</Text>
			</Stack>
		</Center>
	);
};

export default ItemDetailsDialogComponent;
