import InputComponent from "./InputComponent";
import { CloseIcon, SearchIcon } from "../assets/icons";
import { colors } from "../constants/colors";

const SearchBarComponent = ({
	searchValue,
	maxW,
	handleOnChange,
	w = "100%",
	px = "16px",
	py = "12px",
	handleSearch,
	cleanSearchValue,
}) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				paddingInline: px,
				paddingBlock: py,
				width: w,
				maxWidth: maxW,
				border: `1px solid ${colors.GREYLIGHT}`,
				borderRadius: "24px",
			}}
		>
			<img src={SearchIcon} style={{ height: "16px" }} />
			<InputComponent
				onChange={handleOnChange}
				name="search"
				value={searchValue}
				w="100%"
				handleSearch={handleSearch}
			/>
			{searchValue && <img src={CloseIcon} style={{ height: "16px", cursor: "pointer" }} onClick={cleanSearchValue} />}
		</div>
	);
};
export default SearchBarComponent;
