import { Box, Center, Grid, Image, Stack, Text } from "@chakra-ui/react";
import { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { getFakeDataService } from "../../services/animalServices";
import SkeletonComponent from "./components/SkeletonComponent";
import SearchItemComponent from "./components/SearchItemComponent";
import { animalTypes } from "../../constants/animals";
import ItemDetailsComponent from "./components/ItemDetailsComponent";
import ItemDetailsDialogComponent from "./components/ItemDetailsDialogComponent";
import { useIsMobile } from "../../hooks/useIsMobile";

const SearchResult = () => {
	const isMobile = useIsMobile();

	const [searchParams] = useSearchParams();
	const searchParam = searchParams.get("value");

	const [searchList, setSearchList] = useState();
	const [loading, setLoading] = useState(true);
	const [searchSuccess, setSearchSuccess] = useState(false);
	const [selectedItem, setSelectedItem] = useState();

	const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

	useEffect(() => {
		setLoading(true);
		const getFakeData = async () => {
			const { success, data } = await getFakeDataService(searchParam);

			setSearchSuccess(success);
			setSearchList(data);
			setLoading(false);
		};

		getFakeData();
	}, [searchParam]);

	const handleSelectItem = (item) => {
		setSelectedItem(item);

		if (isMobile) {
			setOpenDetailsDialog(true);
		}
	};

	const renderSearch = () => {
		if (loading) {
			return [...Array(8)].map((_, index) => <SkeletonComponent key={index} />);
		}

		if (!searchSuccess) {
			return (
				<Stack>
					{searchParam.trim() !== "" && (
						<Text>
							No results for
							<Text as="span" fontWeight="bold">
								{" "}
								'{searchParam}'.
							</Text>
						</Text>
					)}
					<Text>
						Try looking for:
						{animalTypes.map((item, index) => (
							<Text key={index} as="span" fontWeight="bold">
								{" "}
								{item}
							</Text>
						))}
						.
					</Text>
				</Stack>
			);
		}

		return (
			<>
				<Grid templateColumns={"0.7fr 0.3fr"} gap={3} w="100%">
					<Stack gap={6}>
						{searchList.map((item, index) => (
							<SearchItemComponent key={index} item={item} handleSelectItem={(item) => handleSelectItem(item)} />
						))}
					</Stack>
					<Box display={{ base: "none", md: "block" }}>
						{selectedItem ? <ItemDetailsComponent item={selectedItem} /> : null}
					</Box>
				</Grid>
			</>
		);
	};

	return (
		<Stack flexDirection="column" w="100" h="100%" px={10} gap={8} mt={4}>
			{renderSearch()}
			{openDetailsDialog && (
				<ItemDetailsDialogComponent selectedItem={selectedItem} setOpenDetailsDialog={setOpenDetailsDialog} />
			)}
		</Stack>
	);
};
export default SearchResult;
