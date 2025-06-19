import { colors } from "../../../constants/colors";

const SearchItemComponent = ({ item, handleSelectItem }) => {
	const { url, title, description, id } = item;
	return (
		<div style={{ display: "flex", flexDirection: "column" }} key={id}>
			<p style={{ fontSize: "12px" }}>{url}</p>
			<p
				style={{ fontSize: "20px", fontWeight: "bold", color: colors.BLUE, cursor: "pointer" }}
				onClick={() => handleSelectItem(item)}
			>
				{title}
			</p>
			<p style={{ fontSize: "14px" }}>{description}</p>
		</div>
	);
};
export default SearchItemComponent;
