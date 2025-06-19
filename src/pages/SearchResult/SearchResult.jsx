import { Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { getFakeDataService } from "../../services/animalServices";
import SkeletonComponent from "./components/SkeletonComponent";
import SearchItemComponent from "./components/SearchItemComponent";
import { animalTypes } from "../../constants/animals";

const SearchResult = () => {
	const [searchParams] = useSearchParams();
	const searchParam = searchParams.get("value");

	const [searchList, setSearchList] = useState();
	const [loading, setLoading] = useState(true);
	const [searchSuccess, setSearchSuccess] = useState(false);

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

	const renderSearch = () => {
		if (loading) {
			return [...Array(8)].map((_, index) => <SkeletonComponent key={index} />);
		} else {
			if (!searchSuccess) {
				return (
					<Stack>
						<Text>
							No results for
							<Text as="span" fontWeight="bold">
								{" "}
								'{searchParam}'.
							</Text>
						</Text>
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
			} else {
				return searchList.map((item, index) => <SearchItemComponent item={item} key={index} />);
			}
		}
	};

	return (
		<Stack flexDirection="column" w="100" h="100%" px={20} gap={8} mt={4}>
			{renderSearch()}
		</Stack>
	);
};
export default SearchResult;
