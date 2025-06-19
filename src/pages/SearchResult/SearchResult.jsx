import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { getFakeDataService } from "../../services/animalServices";
import SkeletonComponent from "./components/SkeletonComponent";
import ItemDetailsDialogComponent from "./components/ItemDetailsDialogComponent";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useSelector } from "react-redux";
import NoResultResponseComponent from "./components/NoResultResponseComponent";
import ResultResonseComponent from "./components/ResultResonseComponent";

const SearchResult = () => {
	const isMobile = useIsMobile();

	const { animals, types } = useSelector((store) => store.animals);

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
			const { success, data } = await getFakeDataService({ search: searchParam, animals, types });

			setSearchSuccess(success);
			setSearchList(data);
			setLoading(false);
		};

		getFakeData();
	}, [animals, searchParam, types]);

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
			return <NoResultResponseComponent searchParam={searchParam} types={types} />;
		}

		return (
			<ResultResonseComponent
				handleSelectItem={handleSelectItem}
				searchList={searchList}
				selectedItem={selectedItem}
				isMobile={isMobile}
			/>
		);
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				width: "100%",
				height: "100%",
				px: "12px",
				marginTop: "8px",
				gap: "12px",
				paddingTop: "10px",
			}}
		>
			{renderSearch()}
			{openDetailsDialog && (
				<ItemDetailsDialogComponent selectedItem={selectedItem} setOpenDetailsDialog={setOpenDetailsDialog} />
			)}
		</div>
	);
};
export default SearchResult;
